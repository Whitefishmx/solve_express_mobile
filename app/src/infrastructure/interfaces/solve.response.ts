export interface SolveReportResponse {
    error: number;
    description: string;
    response: Response[];
}

export interface Response {
    id?:               string;
    employee_id?:      string;
    folio?:            string;
    reference_number?: string;
    requested_amount?: string;
    remaining_amount?: string;
    period?:           string;
    created_at?:       Date;
    updated_at?:       Date | null;
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
