import { QuestActionTypeEnum, QuestActionUnitEnum } from '@/enums';

export const QuestActionTypeLookup = {
    [QuestActionTypeEnum.Walking]: 'Walking',
    [QuestActionTypeEnum.Running]: 'Running',
    [QuestActionTypeEnum.Jogging]: 'Jogging',
    [QuestActionTypeEnum.Reading]: 'Reading',
};

export const QuestActionUnitLookup = {
    [QuestActionUnitEnum.Hours]: 'hrs',
    [QuestActionUnitEnum.Kilometers]: 'km',
    [QuestActionUnitEnum.Meters]: 'm',
    [QuestActionUnitEnum.Reps]: 'reps',
    [QuestActionUnitEnum.Minutes]: 'mins',
};
