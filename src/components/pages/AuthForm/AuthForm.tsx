import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { queryClient } from '../../../api/queryClient';
import { Login, login, loginSchema } from '../../../api/login';
import { Button } from '../../ui/Button/Button';
import { FormField } from '../../ui/FormField/FormField';
import { Title } from '../../ui/Title/Title';

export const AuthForm = () => {
    const [_, setToken] = useState<string | null>();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Login>({
        resolver: zodResolver(loginSchema),
      })

    const { mutate } = useMutation({
        mutationFn: login,

        onSuccess(data) {
            setToken(data.data.token);
            localStorage.setItem('token', JSON.stringify(data.data.token));
        },
    }, queryClient)

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