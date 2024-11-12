import styled from "styled-components";

export const StyledButton = styled.button<{
    $variant: "primary" | "secondary";
}>`
    box-sizing: border-box;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    background-color: ${({ $variant }) =>
        $variant === "primary" ? "#4a90e2" : "#a3c8e7"};

    ${({ $variant }) =>
        $variant === "primary" &&
        `
            box-shadow: 0 0 8px rgba(72, 144, 226, 0.6), 0 0 15px rgba(72, 144, 226, 0.4);
            &:hover {
                background-color: #4183c4;
                box-shadow: 0 0 15px rgba(72, 144, 226, 0.8), 0 0 25px rgba(72, 144, 226, 0.6);
            }
            &:active {
                box-shadow: 0 0 12px rgba(72, 144, 226, 0.9);
            }
        `}

    ${({ $variant }) =>
        $variant === "secondary" &&
        `
            background-color: #a3c8e7;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            &:hover {
                background-color: #9ab8d8;
            }
            &:active {
                background-color: #8b9bc8;
            }
        `}

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
        box-shadow: none;
        background-color: #d0dbe9;
    }
`;
