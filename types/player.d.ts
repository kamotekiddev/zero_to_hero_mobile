export interface DailyQuest {
    id: string;
    dateAssigned: string;
    isCompleted: boolean;
    dateCompleted: string | null;
    questStatus: string;
    userId: string;
    questTemplateId: string;
    questTemplate: QuestTemplate;
    questActionProgress: QuestActionProgress[];
}

export interface QuestTemplate {
    id: string;
    title: string;
    description: string;
    difficulty: number;
    actions: QuestAction[];
    rewards: QuestReward[];
    punishments: QuestPunishment[] | null;
}

export interface QuestAction {
    id: string;
    questTemplateId: string;
    actionType: number;
    targetValue: number;
    unit: number;
}

export interface QuestReward {
    id: string;
    questTemplateId: string;
    rewardType: number;
    value: number;
}

export interface QuestPunishment {
    id: string;
    questTemplateId: string;
    punishmentTypeEnum: number;
    value: number;
}

export interface QuestActionProgress {
    id: string;
    dailyQuestId: string;
    questActionId: string;
    progressValue: number;
    isActionCompleted: boolean;
}
