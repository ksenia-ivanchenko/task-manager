import { styled } from "styled-components";
import { COLORS } from "../ui/constants";

export const StyledModal = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    z-index: 9999;
    margin: auto;
    background-color: ${COLORS.LIGHT_BACKGROUND};
    padding: 20px;
    border-radius: 10px;
    transition: opacity 0.2s ease-out;
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: 20px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    inset: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
`;
