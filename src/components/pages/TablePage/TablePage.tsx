import { useQuery } from '@tanstack/react-query';
import { fetchTableData, TableData } from '../../../api/fetchTableData';
import { FC, useState } from 'react';
import { queryClient } from '../../../api/queryClient';
import { TableItem } from '../../ui/TableItem/TableItem';
import { TableHead } from '../../ui/TableHead/TableHead';
import { Button } from '../../ui/Button/Button';

interface ITablePage {
    token: string,
}

export const TablePage: FC<ITablePage> = ({ token }) => {
    const { data } = useQuery({
        queryFn: async () => await fetchTableData(token),
        queryKey: ['table-data']
    }, queryClient);

    const [isEdit, setIsEdit] = useState('');
    const [itemData, setItemData] = useState<TableData>();
    
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>, data: TableData, rowID: string) {
        const { value, name } = event.target;
        
        return setItemData(data.id + 1 === rowID ? { ...data,  [name]: value} : data)
    }

    return (
        <>
            <table>
                { data && <TableHead data={data.data[0]} /> }
                <tbody>
                    {
                        data ? data.data.map((data) => {
                            const rowID = data.id + 1;
                            return (
                                <tr key={data.id} id={rowID}>
                                    <TableItem data={itemData || data} isEdit={isEdit} onChange={e => handleOnChange(e, data, rowID)} />
                                    <td>
                                        {
                                            <Button type='button' onClick={() => {
                                                if (!isEdit) setIsEdit(data.id)
                                                else {
                                                    setItemData(data)
                                                    setIsEdit('')
                                                }
                                            }}>
                                                { !isEdit ? 'Изменить' : 'Отмена' }
                                            </Button>
                                        }
                                    </td>
                                </tr>
                            )
                        }) : <tr><td>Ничего не найдено</td></tr>
                    }
                </tbody>
            </table>
            <button onClick={() => {
                localStorage.clear();
            }}>Clear local storage</button>
            <button onClick={() => {
                localStorage.clear();
            }}>Добавить новую запись</button>
        </>
    )
}