import { FC } from "react"

export interface IButtonProps {
    type: 'submit' | 'button',
    children: React.ReactNode,
    onClick?: () => void,
}

export const Button: FC<IButtonProps> = ({ type, children, onClick }) => 
    <button 
        type={type} 
        onClick={onClick}
        >
            {children}
    </button>