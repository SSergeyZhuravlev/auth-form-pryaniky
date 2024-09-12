import { Title } from './components/ui/Title/Title';
import { AuthForm } from './components/pages/AuthForm/AuthForm';
import { TablePage } from './components/pages/TablePage/TablePage';
import { useLogin } from './components/hooks/useLogin';

export const App = () => {
    const { mutate, token } = useLogin();

    return token ? <TablePage token={token} /> : (
        <div>
            <Title type='h2'>Title</Title>
            <AuthForm mutate={mutate}  />
        </div>
    );
}