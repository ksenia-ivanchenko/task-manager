import { forwardRef, ChangeEvent } from "react";
import {
    StyledErrorMessage,
    StyledInput,
    StyledWrapper,
    StyledLabel,
    PasswordToggleButton,
} from "./style";
import type { InputProps } from "./types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            errorMessage,
            required,
            onChange,
            name,
            id,
            onVisibleClick,
            type,
            ...props
        },
        ref
    ) => {
        const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
        };

        return (
            <StyledWrapper>
                <StyledInput
                    type={type}
                    required
                    placeholder=" "
                    ref={ref}
                    id={id || name}
                    name={name}
                    onChange={handleInputChange}
                    {...props}
                />
                <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
                {(name === "password" || name === "confirmPassword") && (
                    <PasswordToggleButton
                        type="button"
                        onClick={onVisibleClick}
                    >
                        {type === "password" ? <FaEyeSlash /> : <FaEye />}
                    </PasswordToggleButton>
                )}
                {errorMessage && (
                    <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
                )}
            </StyledWrapper>
        );
    }
);
