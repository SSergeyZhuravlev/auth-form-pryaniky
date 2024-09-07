import { HOST } from './host';
import { z } from 'zod';

// export const loginSchema = z.object({
//     username: z.string().trim().startsWith('user', { message: 'Неверное имя пользователя' }),
//     password: z.string().trim().startsWith('password', { message: 'Неверный пароль' }),
// });

export const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export type Login = z.infer<typeof loginSchema>;

type LoginResponse = {
    data: { token: string },
    error_code: number,
    error_message: string,
    profiling: string,
    timings: unknown,
}

export function login({ username, password }: Login): Promise<LoginResponse> {
    return fetch(`${HOST}/ru/data/v3/testmethods/docs/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        })
    })
    .then(res => res.json())
}