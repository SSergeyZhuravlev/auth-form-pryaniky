import { useMutation } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { login } from './api/login';
import { Title } from './components/ui/Title/Title';
import { AuthForm } from './components/pages/AuthForm/AuthForm';
import { useState } from 'react';

export const App = () => {
    const [token, setToken] = useState();

    const { mutate } = useMutation({
        mutationFn: login,

        onSuccess(data) {
            console.log(data.data.token);
            setToken(data.data.token)
        },
    }, queryClient)

    

    if (token) {
        return <div>token</div>
    }

    return (
        <div>
            <Title type='h2'>Title</Title>
            <AuthForm onClick={() => mutate({username: 'user12', password: 'password'})}  />
        </div>
    )
}