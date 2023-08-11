import React, { ReactNode, MouseEventHandler } from "react";
interface ButtonProps {
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
    return (
        <button className={className} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
