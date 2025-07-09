import React from 'react';
import { View, Text } from 'react-native';

import { Progress, ProgressFilledTrack } from '@/components/ui/progress';

interface PlayerExpStatsProps {
    currentExp: number;
    nextLevelExp: number;
}

export default function PlayerExpStats({
    currentExp,
    nextLevelExp,
}: PlayerExpStatsProps) {
    return (
        <View className="flex flex-col gap-y-2">
            <Text className="text-center">
                {currentExp} / {nextLevelExp} EXP
            </Text>
            <Progress value={currentExp} max={nextLevelExp} size="lg">
                <ProgressFilledTrack />
            </Progress>
        </View>
    );
}
