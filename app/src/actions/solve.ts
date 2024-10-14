import { providerApi } from '../config/api/providerApi';
import { SolveDashboard, SolveReportResponse } from '../infrastructure';

export const getListReported = async (id: number) => {
    try {
        const { data } = await providerApi.post<SolveReportResponse>('/sExpressReport', { user: id });
        return data.response;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getDashboard = async (id: number) => {
    try {
        const { data } = await providerApi.post<SolveDashboard>('/sExpressDashboard', { user: id });
        return data.response;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const requestPayment = async (id: number, amount: number) => {
    try {
        const { data } = await providerApi.post<SolveDashboard>('/sExpressRequest', { user: id, amount });
        return data.response;
    } catch (error) {
        console.log(error);
        return {};
    }
};
