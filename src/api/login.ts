import { HOST } from './host';

export function login({ username, password }: { username: string, password: string }) {
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