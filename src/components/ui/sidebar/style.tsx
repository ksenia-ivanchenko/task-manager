import { styled } from "styled-components";
import { COLORS } from "../constants";

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    block-size: 100vh;
    inline-size: 250px;
    display: flex;
    z-index: 20;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-250px")});
    transition: transform 0.3s ease-in-out;
`;

export const SidebarContent = styled.aside<{ $isOpen: boolean }>`
    position: relative;
    background: ${COLORS.LIGHT_BACKGROUND};
    inline-size: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
