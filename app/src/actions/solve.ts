import { providerApi } from '../config/api/providerApi';
import { SolveReportResponse } from '../infrastructure';

export const getListReported = async (id: number) => {
    try {
        const { data } = await providerApi.post<SolveReportResponse>('/sExpressReport', { user: id });
        return data.response;
    } catch (error) {
        console.log(error);
        return [];
    }
};
