import { styled } from "styled-components";
import { COLORS } from "../constants";

export const StyledDatePicker = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${COLORS.INPUT_BORDER};
    font-size: 14px;
    background-color: transparent;
    cursor: pointer;
    font-family: Inter, sans-serif;
`;

export const DateLabel = styled.label`
    color: ${COLORS.MAIN_DARK};
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
