import { styled } from "styled-components";

export const StyledOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    inset: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
`;
