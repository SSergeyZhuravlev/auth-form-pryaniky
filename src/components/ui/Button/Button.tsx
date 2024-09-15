import { FC } from "react"

export interface IButtonProps {
    type: 'submit' | 'button',
    children: React.ReactNode,
    id?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button: FC<IButtonProps> = ({ type, children, id, onClick }) => 
    <button 
        type={type} 
        id={id}
        onClick={onClick}
        >
            {children}
    </button>