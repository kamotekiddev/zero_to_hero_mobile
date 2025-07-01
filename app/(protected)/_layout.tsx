import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { useAuthContext } from '@/context/AuthContext';

export default function _Layout() {
    const { isAuthenticated, isLoading } = useAuthContext();

    if (!isAuthenticated && !isLoading) return <Redirect href="/login" />;

    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    );
}
