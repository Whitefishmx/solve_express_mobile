// export interface AuthResponse {
//     message: string;
//     access_token: AccessToken;
//     id: string;
//     email: string;
//     fullName: string;
//     isActive: boolean;
// }

// export interface AccessToken {
//     token: string;
//     created: Date;
//     expires: Date;
//     id: number;
// }

export interface AuthResponse {
    error:        number;
    user:         User;
    access_token: AccessToken;
    logged_in:    boolean;
}

export interface AccessToken {
    token:   string;
    created: Date;
    expires: Date;
    id:      number;
}

export interface User {
    permissions: Permission[];
    data:        Data;
}

export interface Data {
    id:         string;
    email:      string;
    name:       string;
    last_name:  string;
    sure_name:  string;
    rfc:        string;
    curp:       string;
    net_salary: string;
    plan:       string;
}

export interface Permission {
    name:     string;
    session:  string;
    route:    string;
    writable: string;
}