import { FC, useState } from 'react';
import { FormField } from '../../ui/FormField/FormField';
import { Title } from '../../ui/Title/Title';
import { Button } from '../../ui/Button/Button';

interface IAuthFormProps {
    onClick: () => void,
}

export const AuthForm: FC<IAuthFormProps> = ({ onClick }) => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');

    return (
        <form>
            <Title type="h2">Введите логин и пароль</Title>
            <FormField type='text' value={value} placeholder='Введите логин' onChange={(e) => setValue(e.target.value)}>Логин</FormField>
            <FormField type='password' value={value1} placeholder='Введите пароль' onChange={(e) => setValue1(e.target.value)}>Пароль</FormField>
            <div>
                <Button type='button' onClick={onClick}>Button</Button>
            </div>
        </form>
    )
}