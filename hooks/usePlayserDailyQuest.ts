import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { getPlayerDailyQuest } from '@/services/player';
import { ApiResponse } from '@/types';
import { DailyQuest } from '@/types/player';

export const usePlayserDailyQuest = () => {
    return useQuery<AxiosResponse<ApiResponse<DailyQuest>>, any, DailyQuest>({
        queryKey: ['player_daily_quest'],
        queryFn: () => getPlayerDailyQuest(),
        select: ({ data }) => data.data,
    });
};
