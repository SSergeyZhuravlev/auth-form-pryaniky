import { FC } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Login,  loginSchema } from '../../../api/login';
import { Button } from '../../ui/Button/Button';
import { FormField } from '../../ui/FormField/FormField';
import { Title } from '../../ui/Title/Title';
import { LoginResponse } from '../../../api/login';

interface IAuthFormProps {
    mutate: UseMutateFunction<LoginResponse, Error, {
        username: string;
        password: string;
    }, unknown>
}

export const AuthForm: FC<IAuthFormProps> = ({ mutate }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Login>({
        resolver: zodResolver(loginSchema),
      });

    return (
        <form onSubmit={handleSubmit(({ username, password }) => {
            mutate({ username, password });
        })}>
            <Title type="h2">Введите логин и пароль</Title>
            <FormField label='Логин' errorMessage={errors.username?.message}>
                <input type="text" { ...register('username') } />
            </FormField>
            <FormField label='Пароль' errorMessage={errors.password?.message}>
                <input type="password" { ...register('password') } />
            </FormField>
            <div>
                <Button type='submit'>Button</Button>
            </div>
        </form>
    )
}