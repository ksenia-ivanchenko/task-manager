import styled from "styled-components";
import { COLORS } from "../ui/constants";

export const StyledForm = styled.form`
    background-color: ${COLORS.LIGHT_BACKGROUND};
    border-radius: 15px;
    padding: 2rem;
    inline-size: 400px;
    block-size: 450px;
    box-shadow: 0 10px 30px ${COLORS.SHADOW};
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    color: ${COLORS.MAIN_DARK};

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 35px ${COLORS.SHADOW_HOVER};
    }
`;
