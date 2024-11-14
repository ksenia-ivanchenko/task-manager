import styled from "styled-components";

export const StyledAuth = styled.div`
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AuthFormContainer = styled.div`
    width: 400px;
    height: 500px;
    perspective: 1000px;
`;

export const FormPage = styled.div`
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.7s ease-in-out;

    &.back {
        transform: rotateY(180deg);
    }
`;

export const SwitchButton = styled.button`
    margin-top: 1rem;
    background-color: transparent;
    border: none;
    color: #0073e6;
    cursor: pointer;
    text-decoration: underline 0.08em rgba(255, 255, 255, 0);
    text-underline-offset: 0.3em;
    transition: text-decoration-color 300ms;

    &:hover {
        text-decoration-color: inherit;
    }
`;
