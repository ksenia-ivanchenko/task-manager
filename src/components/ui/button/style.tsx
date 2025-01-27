import styled from "styled-components";
import { COLORS } from "../constants";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
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

    &:active {
        scale: 0.9;
    }

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

    ${({ $variant, $nohover }) =>
        $variant === "icon" &&
        !$nohover &&
        `
            &:hover {
                background-color: ${COLORS.LIGHT_BACKGROUND};
            }
        `}

    ${({ $variant }) =>
        $variant === "text" &&
        `
            background: none;
            color: ${COLORS.MAIN_DARK};

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

export const AddContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    min-block-size: 100px;

    &:hover {
        background-color: ${COLORS.LIGHT_BACKGROUND};
        cursor: pointer;
    }

    &:active {
        scale: 0.9;
    }
`;

export const DeleteButtonContainer = styled.div`
    position: absolute;
    top: -20px;
    left: 5px;
`;
