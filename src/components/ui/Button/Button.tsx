import { FC } from "react"

export interface IButtonProps {
    type: 'submit' | 'button',
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button: FC<IButtonProps> = ({ type, children, onClick }) => 
    <button 
        type={type} 
        onClick={onClick}
        >
            {children}
    </button>