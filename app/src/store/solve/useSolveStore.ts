import { create } from 'zustand';
import { User } from '../../infrastructure/entities/user';
import { AuthStatus } from '../../infrastructure/interfaces/auth.status';
import { getDashboard, getListReported } from '../../actions/solve';
import { Response } from '../../infrastructure';
import { Dashboard } from '../../infrastructure/interfaces/solve.response';

export interface solveState {
    history?: Response[];
    dashboard?: Dashboard;
    getListReported: (id: number) => Promise<boolean>;
    getDashboard: (id: number) => Promise<boolean>;
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
    getDashboard: async (id: number) => {
        const response = await getDashboard(id);
        if (response) {
            set(state => ({ ...state, dashboard: { ...response } }));
            return false;
        }
        return true;
    },
}));
