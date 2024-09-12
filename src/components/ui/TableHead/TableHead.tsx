import { FC } from 'react';
import { TableData } from '../../../api/fetchTableData';

interface ITableHeadProps {
    data: TableData,
}

export const TableHead: FC<ITableHeadProps> = ({ data }) => {
    return (
        <thead>
            <tr>
                {
                    Object.keys(data).map((key) => {
                        return (
                            <th key={crypto.randomUUID()}>{key}</th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}