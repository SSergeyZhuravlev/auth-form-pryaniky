import { FC } from 'react';
import './FormField.css';

export interface IFormFieldProps {
    type: string,
    placeholder: string,
    children: React.ReactNode,
    value: string | undefined,
    isError?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const FormField: FC<IFormFieldProps> = ({ type, placeholder, children, value, isError, onChange }) => {
    return (
        <label>
            <span>{children}</span>
            { isError && <span>{isError}</span> }
            <input 
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </label>
    )
}