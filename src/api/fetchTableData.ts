import { HOST } from './host';

export type TableData = {
    companySigDate: string,
    companySignatureName: string,
    documentName: string,
    documentStatus: string,
    documentType: string,
    employeeNumber: string,
    employeeSigDate: string,
    employeeSignatureName: string,
    id: string,
}

type TableDataResponse = {
    data: TableData[],
    error_code: number,
    error_message: string,
    profiling: string,
    timings: unknown,
}

export function fetchTableData(token: string): Promise<TableDataResponse> {
    return fetch(`${HOST}/ru/data/v3/testmethods/docs/userdocs/get`, {
        headers: {
            'x-auth': token,
        }
    })
    .then(res => res.json());
}