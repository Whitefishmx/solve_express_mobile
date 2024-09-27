import { providerApi } from '../../config/api/providerApi';
import { User } from '../../infrastructure/entities/user';
import type { AuthResponse } from '../../infrastructure/interfaces/auth.response';

const returnUserDataToken = (data: AuthResponse) => {
    const user: User = {
        id: data.id,
        email: data.email,
        fullName: data.email,
        isActive: data.isActive,
    };
    return {
        user,
        token: data.access_token.token,
    };
};

export const authLogin = async (rfc: string, password: string) => {
    try {
        const { data } = await providerApi.get<AuthResponse>('/token', { params: { usuario: rfc, contraseña: password } });
        return returnUserDataToken(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const authCheckStatus = async () => {
    try {
        const { data } = await providerApi.get<AuthResponse>('/test');
        return returnUserDataToken(data);
    } catch (error) {
        console.log(error);
        return;
    }
};
