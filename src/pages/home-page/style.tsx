import styled from "styled-components";
import { COLORS } from "../../components/ui/constants";

export const BoardList = styled.ul`
    padding: 50px 20px;
    display: grid;
    grid-template-columns: repeat(
        4,
        1fr
    ); /* 4 колонки с равным распределением */
    grid-auto-rows: 1fr; /* Автоматическая высота строк */
    gap: 16px; /* Отступы между досками */
    align-items: start; /* Выравнивание досок по верхнему краю */
`;

export const EmptyBoard = styled.div`
    block-size: 218px;
    border: 1px solid ${COLORS.INPUT_LABEL_FOCUS};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
