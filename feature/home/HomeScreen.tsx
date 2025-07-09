import React from 'react';
import { SafeAreaView } from 'react-native';

import PlayerInfo from '@/feature/home/PlayerInfo';
import PlayerQuest from '@/feature/home/PlayerQuest';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <PlayerInfo avatarUri={''} userName="kamote.dev" level={1} />
            <PlayerQuest />
        </SafeAreaView>
    );
}
