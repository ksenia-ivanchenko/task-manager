import styled from "styled-components";
import { COLORS } from "../constants";

export const StyledButton = styled.button<{
    $variant: "primary" | "secondary" | "icon";
}>`
    box-sizing: border-box;
    padding: 12px 16px;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    background-color: ${({ $variant }) =>
        $variant === "primary"
            ? COLORS.BUTTON_PRIMARY
            : $variant === "secondary"
            ? COLORS.BUTTON_SECONDARY
            : $variant === "icon"
            ? "transparent"
            : COLORS.LIGHT_BACKGROUND};

    ${({ $variant }) =>
        $variant === "primary" &&
        `
            box-shadow: 0 0 8px rgba(72, 144, 226, 0.6), 0 0 15px rgba(72, 144, 226, 0.4);
            &:hover {
                background-color: ${COLORS.BUTTON_PRIMARY_HOVER};
                box-shadow: 0 0 15px rgba(72, 144, 226, 0.8), 0 0 25px rgba(72, 144, 226, 0.6);
            }
            &:active {
                box-shadow: 0 0 12px rgba(72, 144, 226, 0.9);
            }
        `}

    ${({ $variant }) =>
        $variant === "secondary" &&
        `
            box-shadow: 0 2px 4px ${COLORS.SHADOW};
            &:hover {
                background-color: ${COLORS.BUTTON_SECONDARY_HOVER};
            }
            &:active {
                background-color: ${COLORS.BUTTON_SECONDARY_ACTIVE};
            }
        `}

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
        box-shadow: none;
        background-color: ${COLORS.BUTTON_DISABLED};
    }
`;
