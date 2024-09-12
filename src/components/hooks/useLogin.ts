import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../api/queryClient';
import { login } from '../../api/login';

export const useLogin = () => {
    const { mutate } = useMutation({
        mutationFn: login,

        onSuccess(data) {
            localStorage.setItem('token', JSON.stringify(data.data.token));
            setToken(data.data.token);
        },
    }, queryClient);

    const [token, setToken] = useState<string | null>(JSON.parse(localStorage.getItem('token')!));

    return {
        mutate,
        token,
    }
}