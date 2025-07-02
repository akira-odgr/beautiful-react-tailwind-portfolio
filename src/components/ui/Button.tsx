import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
    return (
        <button type="submit" className="cosmic-button">
            {children}
        </button>
    );
};
