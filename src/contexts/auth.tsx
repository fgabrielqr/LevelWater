import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from 'expo-secure-store';
import api from "../services/api";
import * as auth from '../services/auth';

interface User {
    given_name: string;
    picture: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(user: any): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadStoragedData() {
            const storageUser = await SecureStore.getItemAsync('levelwater_user');
            const storageToken = await SecureStore.getItemAsync('levelwater_token');

            if (storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser))
            }
        }
        loadStoragedData();
    }, []);

    async function signIn(user: any) {
        setUser(user);
        api.defaults.headers.Authorization = `Bearer ${user.Token}`;
        await SecureStore.setItemAsync('levelwater_user', JSON.stringify(user));
    }

    function signOut() {
        SecureStore.deleteItemAsync('levelwater_user').then(() => {
            SecureStore.deleteItemAsync('levelwater_token').then(() => {
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