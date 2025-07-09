import { CheckIcon } from 'lucide-react-native';
import React from 'react';
import { FlatList, View } from 'react-native';

import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { QuestActionTypeLookup, QuestActionUnitLookup } from '@/constants';
import { QuestActionTypeEnum, QuestActionUnitEnum } from '@/enums';
import { usePlayserDailyQuest } from '@/hooks/usePlayserDailyQuest';

interface QuestActionProps {
    targetValue: number;
    unit: QuestActionUnitEnum;
    type: QuestActionTypeEnum;
    progressValues: number;
    isActionCompleted: boolean;
}

function QuestAction({
    targetValue,
    unit,
    type,
    progressValues,
    isActionCompleted,
}: QuestActionProps) {
    const unitName = QuestActionUnitLookup[unit];
    const typeName = QuestActionTypeLookup[type];

    const questActionDescription = `${targetValue}${unitName} ${typeName}`;

    return (
        <HStack space="sm" className="p-4 bg-gray-50 rounded-lg items-center">
            {isActionCompleted && (
                <View className="size-6 rounded-full bg-green-500 justify-center items-center">
                    <Icon as={CheckIcon} className="text-white" size="sm" />
                </View>
            )}
            <Text
                style={{
                    textDecorationLine: isActionCompleted
                        ? 'line-through'
                        : 'none',
                }}
            >
                {progressValues} / {questActionDescription}
            </Text>
        </HStack>
    );
}

export default function PlayerQuest() {
    const { data: dailyQuest } = usePlayserDailyQuest();

    const getCurrentActionProgress = (actionId: string) =>
        dailyQuest?.questActionProgress?.find(
            (p) => p.questActionId == actionId
        );

    return (
        <View className="px-8 pb-8 gap-y-4">
            <Text size="lg" bold>
                Today's Quest
            </Text>
            <Text>{dailyQuest?.questTemplate.title}</Text>
            <FlatList
                data={dailyQuest?.questTemplate.actions}
                contentContainerClassName="gap-y-2"
                keyExtractor={(d) => d.id}
                renderItem={({ item }) => {
                    const currentProgress = getCurrentActionProgress(item.id);

                    return (
                        <QuestAction
                            targetValue={item.targetValue}
                            type={item.actionType}
                            unit={item.unit}
                            progressValues={currentProgress?.progressValue ?? 0}
                            isActionCompleted={
                                !!currentProgress?.isActionCompleted
                            }
                        />
                    );
                }}
            />
        </View>
    );
}
