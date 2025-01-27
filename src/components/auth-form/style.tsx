import styled from "styled-components";
import { COLORS } from "../ui/constants";

export const StyledForm = styled.form`
    background-color: ${COLORS.LIGHT_BACKGROUND};
    border-radius: 15px;
    padding: 2rem;
    inline-size: clamp(15.625rem, 0rem + 83.3333vw, 25rem);
    block-size: clamp(26.25rem, 25.7566rem + 2.6316vw, 28.125rem);
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
