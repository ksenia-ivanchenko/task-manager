import styled from "styled-components";
import { COLORS } from "../constants";

export const StyledWrapper = styled.div`
    inline-size: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledLabel = styled.label`
    color: ${COLORS.MAIN_DARK};
    position: absolute;
    left: 15px;
    pointer-events: none;
    transform: translateY(15px);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledInput = styled.input<{ type?: string }>`
    border: 1px solid ${COLORS.INPUT_BORDER};
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    background: transparent;
    padding: 15px;

    ${({ type }) =>
        type === "password" &&
        `
    letter-spacing: 3px;
`}
    &:focus,
    :valid {
        outline: none;
        border-color: ${COLORS.INPUT_LABEL_FOCUS};
        box-shadow: 0 4px 10px ${COLORS.SHADOW};
    }

    &:focus ~ label {
        color: ${COLORS.INPUT_LABEL_FOCUS};
        transform: translateX(-10%) translateY(-50%) scale(0.9);
        padding: 0 0.2em;
        background-color: ${COLORS.LIGHT_BACKGROUND};
    }

    &:not(:placeholder-shown) ~ label {
        color: ${COLORS.INPUT_LABEL_FOCUS};
        transform: translateX(-10%) translateY(-50%) scale(0.9);
        padding: 0 0.2em;
        background-color: ${COLORS.LIGHT_BACKGROUND};
    }

    // убираем заливку инпутов дефолтными браузерными цветами при автозаполнении
    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px ${COLORS.LIGHT_BACKGROUND} inset;
        box-shadow: 0 0 0px 1000px ${COLORS.LIGHT_BACKGROUND} inset;
        -webkit-text-fill-color: black;
    }

    &:-moz-autofill {
        box-shadow: 0 0 0px 1000px ${COLORS.LIGHT_BACKGROUND} inset;
        color: black;
    }

    &:-ms-autofill {
        box-shadow: 0 0 0px 1000px ${COLORS.LIGHT_BACKGROUND} inset;
        color: black;
    }
`;

export const StyledErrorMessage = styled.span`
    color: ${COLORS.ERROR_MESSAGE};
    font-size: 12px;
    margin-top: 4px;
    position: absolute;
    bottom: -20px;
    left: 0;
`;

export const PasswordToggleButton = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${COLORS.INPUT_LABEL_FOCUS};
    scale: 1.3;
`;
