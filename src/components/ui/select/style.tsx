import { styled } from "styled-components";
import { COLORS } from "../constants";

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
`;

export const SelectLabel = styled.label`
    color: ${COLORS.MAIN_DARK};
`;

export const SelectRadioButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SelectRadioInput = styled.input`
    margin-right: 10px;
    scale: 1.2;

    &:checked {
        background-color: ${COLORS.MAIN_DARK}; /* Цвет фона для выбранной радиокнопки */
        border-color: ${COLORS.INPUT_BORDER}; /* Цвет рамки для выбранной радиокнопки */
    }

    &:hover {
        border-color: ${COLORS.INPUT_LABEL_FOCUS};
    }

    &:focus {
        outline: none;
        border-color: ${COLORS.INPUT_LABEL_FOCUS};
    }
`;

export const SelectRadioLabel = styled.label`
    color: ${COLORS.MAIN_DARK};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: ${COLORS.INPUT_LABEL_FOCUS};
    }

    ${SelectRadioInput}:checked + & {
        color: black;
    }
`;
