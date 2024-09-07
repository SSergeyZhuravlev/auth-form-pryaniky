import { Title } from './components/ui/Title/Title';
import { AuthForm } from './components/pages/AuthForm/AuthForm';

export const App = () => {
    const localToken = localStorage.getItem('token');
    
    if (localToken) {
        return (
            <>
                <div>token</div>
                <button onClick={() => {
                    localStorage.clear();
                }}>Clear local storage</button>
            </>
        )
    }

    return (
        <div>
            <Title type='h2'>Title</Title>
            <AuthForm  />
        </div>
    )
}