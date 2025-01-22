import { styled } from "styled-components";
import { COLORS } from "../ui/constants";

export const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    margin: auto;
    background-color: ${COLORS.LIGHT_BACKGROUND};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04),
        0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
        0px 0px 1px rgba(0, 0, 0, 0.04);
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

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
`;
