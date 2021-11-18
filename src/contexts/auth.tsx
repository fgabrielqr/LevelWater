import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { View, ActivityIndicator } from "react-native";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await SecureStore.getItemAsync("levelwater_user");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn(user: any) {
    setUser(user);

    //api.defaults.headers.Authorization = `Bearer ${user.Token}`;
    await SecureStore.setItemAsync("levelwater_user", JSON.stringify(user));
  }

  function signOut() {
    SecureStore.deleteItemAsync("levelwater_user").then(() => {
      SecureStore.deleteItemAsync("levelwater_token").then(() => {
        setUser(null);
      });
    });
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
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
