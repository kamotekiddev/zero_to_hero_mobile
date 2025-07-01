import * as SecureStore from 'expo-secure-store';
import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';

interface AuthContextState {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextState | null>(null);

export function AuthContextProvider({ children }: PropsWithChildren) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const login = async (token: string) => {
        try {
            setIsLoading(true);
            await SecureStore.setItemAsync('token', token);
            setIsAuthenticated(true);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            await SecureStore.deleteItemAsync('token');
            setIsAuthenticated(false);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const token = await SecureStore.getItemAsync('token');
            setIsLoading(false);
            if (token) return setIsAuthenticated(true);
            return setIsAuthenticated(false);
        })();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = (): AuthContextState => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error(
            'useAuthContext must be used within an AuthContextProvider'
        );

    return context;
};
