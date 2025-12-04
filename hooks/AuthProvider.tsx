"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { api } from "@/integration/api";

interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // ✅ Load saved user and token on page refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }
  }, []);

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean = false
  ) => {
    setIsLoading(true);
    try {
      // Example API call (replace with your real one)
      const response = await api.auth.create({ email, password });

      // Assuming API returns token & user info
      const token = (response as any)?.token || "sample_token_value";
      const userEmail = (response as any)?.user?.email || email;

      // Save user and token in state
      setUser(userEmail);
      setToken(token);

      // ✅ Save to localStorage if rememberMe is true
      if (rememberMe) {
        localStorage.setItem("user", userEmail);
        localStorage.setItem("token", token);
      }

      // Redirect after login
      router.push("/admin/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error);
      alert("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
