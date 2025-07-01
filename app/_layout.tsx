import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import React from 'react';

import { SplashScreenController } from '@/components/splash';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AuthContextProvider } from '@/context/AuthContext';
import '@/global.css';

const queryClient = new QueryClient();

export default function _Layout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <AuthContextProvider>
                    <SplashScreenController />
                    <Slot />
                </AuthContextProvider>
            </GluestackUIProvider>
        </QueryClientProvider>
    );
}
