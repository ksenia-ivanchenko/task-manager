import styled from "styled-components";
import { COLORS } from "../../components/ui/constants";

export const BoardList = styled.ul`
    padding: 50px 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(218px, auto);
    gap: 16px;
    align-items: start;
`;

export const EmptyBoard = styled.div`
    min-block-size: 218px;
    border: 1px solid ${COLORS.INPUT_LABEL_FOCUS};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
