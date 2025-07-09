import { api } from '@/services/apiClient';
import { ApiResponse } from '@/types';
import { DailyQuest } from '@/types/player';

export const getPlayerDailyQuest = () =>
    api.get<ApiResponse<DailyQuest>>('/api/player/quest/daily');
