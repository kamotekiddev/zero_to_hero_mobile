import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import PlayerExpStats from '@/feature/home/PlayerExpStats';

interface PlayerInfoProps {
    avatarUri: string;
    userName: string;
    level: number;
}

export default function PlayerInfo({
    avatarUri,
    userName,
    level,
}: PlayerInfoProps) {
    return (
        <VStack space="xl" className="p-8">
            <View
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#dddddd',
                    borderRadius: '100%',
                    marginHorizontal: 'auto',
                }}
            />
            <View>
                <Text size="2xl" bold className="text-center">
                    {userName}
                </Text>
                <Text className="text-center">LEVEL {level}</Text>
            </View>
            <PlayerExpStats currentExp={45} nextLevelExp={200} />
        </VStack>
    );
}
