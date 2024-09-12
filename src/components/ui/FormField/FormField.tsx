import { FC } from 'react';
import './FormField.css';

export interface IFormFieldProps {
    children: React.ReactNode,
    label?: string,
    errorMessage?: string,
}

export const FormField: FC<IFormFieldProps> = ({ children, label, errorMessage, }) => {
    return (
        <label>
            <span>{label}</span>
            { errorMessage && <span>{errorMessage}</span> }
            {children}
        </label>
    )
}