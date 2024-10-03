import { providerApi } from '../../config/api/providerApi';
import { User } from '../../infrastructure/entities/user';
import type { AuthResponse } from '../../infrastructure/interfaces/auth.response';
// import { useAuthStore } from '../../store/auth/useAuthStore';

const returnUserDataToken = (data: AuthResponse) => {
    const user: User = {
        id: data.user.data.id,
        email: data.user.data.email,
        fullName: data.user.data.email,
        isActive: data.logged_in,
    };
    return {
        user,
        token: data.access_token.token,
    };
};

export const authLogin = async (rfc: string, password: string) => {
    try {
        const { data } = await providerApi.post<AuthResponse>('/toSignIn', { email: rfc, password: password, platform: 5 });
        return returnUserDataToken(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const authCheckStatus = async () => {
    try {
        // const { user } = useAuthStore();
        const { data } = await providerApi.post<AuthResponse>('/tokenAlive');
        return returnUserDataToken(data);
    } catch (error) {
        console.log(error);
        return;
    }
};
