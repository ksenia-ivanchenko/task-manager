import { FC } from "react";
import { StyledButton } from "./style";
import { ButtonProps } from "./types";
import { Preloader } from "../preloader";

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    type,
    disabled = false,
    loading = false,
    variant = "primary",
    ...props
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!loading && !disabled) {
            onClick?.(e);
        }
    };

    return (
        <StyledButton
            type={type}
            onClick={handleClick}
            disabled={disabled || loading}
            $variant={variant}
            {...props}
        >
            {loading ? <Preloader loading={loading} /> : children}
        </StyledButton>
    );
};
