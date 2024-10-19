export interface SolveReportResponse {
    error: number;
    description: string;
    response: Response[];
}

export interface Response {
    name?:                string;
    last_name?:           string;
    sure_name?:           string;
    rfc?:                 string;
    external_id?:         string;
    plan?:                string;
    net_salary?:          string;
    requested_amount?:    string;
    remaining_amount?:    string;
    period?:              string;
    folio?:               string;
    noReference?:         string;
    cep?:                 null;
    clabe?:               string;
    card?:                null;
    bnk_alias?:           string;
    Fecha_solicitud?:     Date;
    Ultima_modificacion?: Date;
}

export interface SolveDashboard {
    error: number;
    description: string;
    response: Dashboard;
}

export interface Dashboard {
    userId?:           string;
    personId?:         string;
    employeeId?:       string;
    name?:             string;
    last_name?:        string;
    sure_name?:        string;
    short_name?:       string;
    net_salary?:       string;
    plan?:             string;
    amount_available?: string;
    worked_days?:      string;
    available?:        string;
    min_available?:    number;
}
