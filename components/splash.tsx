import { SplashScreen } from 'expo-router';

import { useAuthContext } from '@/context/AuthContext';

export function SplashScreenController() {
    const { isLoading } = useAuthContext();

    if (!isLoading) SplashScreen.hideAsync();

    return null;
}
