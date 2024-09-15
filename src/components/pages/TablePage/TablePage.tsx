import { useQuery } from '@tanstack/react-query';
import { fetchTableData, TableData } from '../../../api/fetchTableData';
import { FC, useEffect, useState } from 'react';
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
        queryKey: ['table-data'],
    }, queryClient);

    const [isEdit, setIsEdit] = useState('');
    const [itemData, setItemData] = useState<TableData[]>();

    useEffect(() => {
        data && setItemData(data.data)
    }, [data?.data])
    
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>, data: TableData[], rowID: string) {
        const { value, name } = event.target;
                                        
        setItemData(data.map((el) => {
            if (el.id === rowID) {
                // Здесь добавить мутацию с отправкой измененных данных на сервер

                return {
                    ...el,
                    [name]: value,
                }
            } 
            return el;
        }));
    }

    return (
        <>
            <table>
                { data && <TableHead data={data.data[0]} /> }
                <tbody>
                    {
                        itemData ? itemData.map((item) => {
                            const rowID = item.id;
                            return (
                                <tr key={rowID} id={rowID}>
                                    <TableItem data={item} isEdit={isEdit} onChange={e => handleOnChange(e, itemData, rowID)} />
                                    <td>
                                        {
                                            <Button type='button' id={rowID + 1} onClick={(e) => {
                                                if (!isEdit && e.currentTarget.id === rowID + 1) {
                                                    setIsEdit(rowID);
                                                    e.currentTarget.textContent = 'Отмена'
                                                }
                                                else {
                                                    setItemData(itemData);
                                                    setIsEdit('');
                                                    e.currentTarget.textContent = 'Изменить'
                                                }
                                            }}>
                                                Изменить
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