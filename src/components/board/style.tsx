import { styled } from "styled-components";
import { COLORS } from "../ui/constants";

export const StyledBoard = styled.li`
    border: 1px solid ${COLORS.INPUT_LABEL_FOCUS};
    border-radius: 5px;
    max-inline-size: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px;
    block-size: 100%;
    position: relative;
`;

export const Title = styled.input`
    color: ${COLORS.INPUT_LABEL_FOCUS};
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
`;

export const TitleContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid ${COLORS.INPUT_LABEL_FOCUS};
    margin-block-end: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
