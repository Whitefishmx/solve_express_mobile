export interface SolveReportResponse {
    error:       number;
    description: string;
    response:    Response[];
}
export interface Response {
    name?:                  string;
    last_name?:             string;
    sure_name?:             string;
    rfc?:                   string;
    external_id?:           string;
    plan?:                  string;
    net_salary?:            string;
    requested_amount?:      string;
    remaining_amount?:      string;
    period?:                string;
    noReference?:           string;
    clabe?:                 string;
    card?:                  null;
    bnk_alias?:             string;
    "Fecha solicitud"?:     Date;
    "Ultima modificación"?: Date;
}