import { create } from 'zustand';
import { User } from '../../infrastructure/entities/user';
import { AuthStatus } from '../../infrastructure/interfaces/auth.status';
import { getDashboard, getListReported, requestPayment } from '../../actions/solve';
import { Response } from '../../infrastructure';
import { Dashboard } from '../../infrastructure/interfaces/solve.response';

export interface solveState {
    history?: Response[];
    dashboard?: Dashboard;
    getListReported: (id: number) => Promise<boolean>;
    getDashboard: (id: number) => Promise<boolean>;
    requestPayment: (id: number, amount: number) => Promise<void>;
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
    requestPayment: async (id: number, amount: number) => {
        const responsePayment = await requestPayment(id, amount);
    },
}));
