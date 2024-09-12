import { FC } from 'react';
import { TableData } from '../../../api/fetchTableData';

interface ITableItemProps {
    data: TableData,
    isEdit: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const TableItem: FC<ITableItemProps> = ({ data, isEdit, onChange }) => {
    
    return (
        Object.entries(data).map(( [key, value] ) => {
            return (
                <td key={key}>
                    {
                        isEdit === data['id'] ? 
                            <input type="text" value={value} name={key} onChange={onChange} /> 
                                : 
                            <span>{value}</span>
                    }
                </td>
            )
        })
    )
}

// TODO
// Сделать форму для добавления новой записи
// Перенести этот компонент в компонент таблицы