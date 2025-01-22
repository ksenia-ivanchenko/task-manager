import { styled } from "styled-components";
import { COLORS } from "../ui/constants";

export const StyledCard = styled.div`
    border: 1px solid ${COLORS.MAIN_DARK};
    border-radius: 5px;
    max-inline-size: 400px;
    padding: 20px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
        scale: 1.1;
    }

    margin: 50px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Deadline = styled.div`
    color: ${COLORS.SHADOW_HOVER};
    align-self: flex-end;
`;

export const IconWrapper = styled.div`
    display: flex;
`;

export const DeleteButtonContainer = styled.div`
    position: absolute;
    top: -20px;
    left: 5px;
`;
