import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: relative;
`;

export const StyledLabel = styled.label`
    color: #3a506b;
    margin-bottom: 4px;
    position: absolute;
    left: 15px;
    pointer-events: none;
    transform: translateY(15px);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledInput = styled.input<{ type?: string }>`
    border: 1px solid #accbee;
    border-radius: 4px;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    background: #f9f9ff;
    padding: 15px;

    ${({ type }) =>
        type === "password" &&
        `
    letter-spacing: 3px;
`}
    &:focus,
    :valid {
        outline: none;
        border-color: #5c8bc7;
        box-shadow: 0 4px 10px rgba(92, 139, 199, 0.2);
    }

    &:focus ~ label {
        color: #5c8bc7;
        transform: translateX(-10%) translateY(-50%) scale(0.9);
        padding: 0 0.2em;
        background-color: #f9f9ff;
    }

    &:not(:placeholder-shown) ~ label {
        color: #5c8bc7;
        transform: translateX(-10%) translateY(-50%) scale(0.9);
        padding: 0 0.2em;
        background-color: #f9f9ff;
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #f9f9ff inset;
        box-shadow: 0 0 0px 1000px #f9f9ff inset;
        -webkit-text-fill-color: black;
    }

    &:-moz-autofill {
        box-shadow: 0 0 0px 1000px #f9f9ff inset;
        color: black;
    }

    &:-ms-autofill {
        box-shadow: 0 0 0px 1000px #f9f9ff inset;
        color: black;
    }
`;

export const StyledErrorMessage = styled.span`
    color: #d9534f;
    font-size: 12px;
    margin-top: 4px;
    position: absolute;
    bottom: -20px;
    left: 0;
`;

export const PasswordToggleButton = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: #5c8bc7;
    scale: 1.3;
`;
