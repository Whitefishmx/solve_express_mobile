import { create } from 'zustand';
import { User } from '../../infrastructure/entities/user';
import { AuthStatus } from '../../infrastructure/interfaces/auth.status';
import { getListReported } from '../../actions/solve';
import { Response } from '../../infrastructure';

export interface solveState {
    history?: Response[];
    getListReported: (id: number) => Promise<boolean>;
}

export const useSolveStore = create<solveState>()((set, get) => ({
    history: [],
    getListReported: async (id: number) => {
        const response = await getListReported(id);
        if (Array.isArray(response) && response?.length > 0) {
            set(state => ({ ...state, history: response }));
            return false;
        }
        return true;
    },
}));
