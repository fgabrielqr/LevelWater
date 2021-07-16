import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from 'expo-secure-store';
import api from "../services/api";
import * as auth from '../services/auth';

interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadStoragedData() {
            const storageUser = await SecureStore.getItemAsync('@RNAuth:user');
            const storageToken = await SecureStore.getItemAsync('@RNAuth:token');

            if (storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser))
            }
        }
    }, []);

    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await SecureStore.setItemAsync('@RNAuth:user', JSON.stringify(response.user));
        await SecureStore.setItemAsync('@RNAuth:token', response.token);
    }

    function signOut() {
        SecureStore.deleteItemAsync('@RNAuth:user').then(() => {
            SecureStore.deleteItemAsync('@RNAuth:token').then(() => {
                setUser(null);
            });
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}