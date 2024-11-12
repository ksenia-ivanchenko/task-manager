import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: #f9f9ff;
    border-radius: 15px;
    padding: 2rem;
    inline-size: 400px;
    block-size: 450px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    color: #3a506b;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
    }
`;
