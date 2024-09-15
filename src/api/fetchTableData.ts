import { z } from 'zod';
import { HOST } from './host';
import { validateResponse } from './validateResponse';

const TableDataSchema = z.object({
    companySigDate: z.string(),
    companySignatureName: z.string(),
    documentName: z.string(),
    documentStatus: z.string(),
    documentType: z.string(),
    employeeNumber: z.string(),
    employeeSigDate: z.string(),
    employeeSignatureName: z.string(),
    id: z.string(),
})

export type TableData = z.infer<typeof TableDataSchema>;

const TableDataResponseSchema = z.object({
    data: z.array(TableDataSchema),
    error_code: z.number(),
    error_message: z.string(),
    profiling: z.string(),
    timings: z.unknown(),
})

type TableDataResponse = z.infer<typeof TableDataResponseSchema>

export async function fetchTableData(token: string): Promise<TableDataResponse> {
    return await fetch(`${HOST}/ru/data/v3/testmethods/docs/userdocs/get`, {
        headers: {
            'x-auth': token,
        }
    })
    .then(validateResponse)
    .then(res => res.json())
    .then(data => TableDataResponseSchema.parse(data));
}