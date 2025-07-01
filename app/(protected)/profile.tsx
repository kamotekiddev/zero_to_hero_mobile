import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { useAuthContext } from '@/context/AuthContext';

export default function Profile() {
    const router = useRouter();
    const ctx = useAuthContext();

    const handleLogout = () => {
        ctx.logout();
        router.replace('/login');
    };

    return (
        <SafeAreaView>
            <Button>
                <ButtonText onPress={handleLogout}>Logout</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
