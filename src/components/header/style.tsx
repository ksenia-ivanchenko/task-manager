import styled, { css } from "styled-components";
import { COLORS } from "../ui/constants";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px ${COLORS.SHADOW};
    background: ${COLORS.LIGHT_BACKGROUND};
    padding: 20px 10px;
`;

export const Logo = styled.button`
    background: none;
    border: none;
    display: flex;
    gap: 5px;
    alingn-items: center;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.MAIN_DARK};
`;

export const SearchWrapper = styled.form`
    display: flex;
    inline-size: 500px;
`;

export const IconWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

export const ProfileIconContainer = styled.div`
    position: relative;
`;

export const DropdownMenu = styled.div<{ $show: boolean }>`
    position: absolute;
    right: 0;
    color: ${COLORS.MAIN_DARK};
    background-color: ${COLORS.LIGHT_BACKGROUND};
    border-radius: 8px;
    box-shadow: 0 4px 8px ${COLORS.SHADOW};
    min-inline-size: 200px;
    z-index: 10;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    ${({ $show }) =>
        $show &&
        css`
            opacity: 1;
            transform: translateY(0);
        `}
`;

export const DropdownItem = styled.button`
    background: none;
    border: none;
    padding: 12px;
    inline-size: 100%;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: ${COLORS.SHADOW};
    }
`;
