export interface AuthResponse {
    message: string;
    access_token: AccessToken;
    id: string;
    email: string;
    fullName: string;
    isActive: boolean;
}

export interface AccessToken {
    token: string;
    created: Date;
    expires: Date;
    id: number;
}
