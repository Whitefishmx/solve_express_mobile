import { create } from 'zustand';
import { User } from '../../infrastructure/entities/user';
import { AuthStatus } from '../../infrastructure/interfaces/auth.status';
import { authCheckStatus, authLogin } from '../../actions/auth/auth';
import { StorageAdapter } from '../../config/api/adapters/async/storage';

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    login: (rfc: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
    login: async (rfc: string, password: string) => {
        const response = await authLogin(rfc, password);
        if (!response) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            return false;
        }
        await StorageAdapter.setItem('token', response.token);

        set({ status: 'authenticated', token: response.token, user: response.user });

        return true;
    },
    checkStatus: async () => {
        const resp = await authCheckStatus();
        if (!resp) {
            // TODO: 'unauthenticated'
            set({ status: 'authenticated', token: undefined, user: undefined });
            return;
        }
        await StorageAdapter.setItem('token', resp.token);

        set({ status: 'authenticated', token: resp.token, user: resp.user });
    },
    logout: async () => {
        set({ status: 'unauthenticated', token: undefined, user: undefined });
        await StorageAdapter.removeItem('token');
    },
}));
