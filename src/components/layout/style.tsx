import styled from "styled-components";

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const StyledMain = styled.main`
    flex: 1; /* Главный контент будет растягиваться на оставшееся пространство */
    overflow-y: auto; /* Для добавления прокрутки, если контента будет слишком много */
`;
