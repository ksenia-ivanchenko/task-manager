import { FC } from "react";
import { AddContainer, DeleteButtonContainer, StyledButton } from "./style";
import { AddButtonProps, ButtonProps, DeleteButtonProps } from "./types";
import { Preloader } from "../preloader";
import { MdDeleteOutline, MdOutlineAddCircleOutline } from "react-icons/md";
import { COLORS } from "../constants";

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    type,
    disabled = false,
    loading = false,
    variant = "primary",
    nohover = false,
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
            $nohover={nohover}
            {...props}
        >
            {loading ? <Preloader loading={loading} /> : children}
        </StyledButton>
    );
};

export const AddButton: FC<AddButtonProps> = ({ onClick }) => {
    return (
        <AddContainer onClick={onClick}>
            <MdOutlineAddCircleOutline
                style={{ color: COLORS.MAIN_DARK, scale: "2" }}
            />
        </AddContainer>
    );
};

export const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => {
    return (
        <DeleteButtonContainer>
            <Button variant="icon" onClick={onClick} nohover>
                <MdDeleteOutline
                    style={{
                        scale: "2",
                        color: COLORS.MAIN_DARK,
                        backgroundColor: "white",
                    }}
                />
            </Button>
        </DeleteButtonContainer>
    );
};
