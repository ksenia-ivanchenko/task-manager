import styled from "styled-components";
import { COLORS } from "../constants";

export const StyledTextArea = styled.textarea`
    font-family: inherit;
    font-size: 14px;
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid ${COLORS.INPUT_BORDER};
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    resize: none;

    &:focus,
    :valid {
        outline: none;
        border-color: ${COLORS.INPUT_LABEL_FOCUS};
        box-shadow: 0 4px 10px ${COLORS.SHADOW};
    }

    &::placeholder {
        color: ${COLORS.MAIN_DARK};
    }
`;
