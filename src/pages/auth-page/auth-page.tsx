import { useState } from "react";
import { AuthForm } from "../../components";
import { useDispatch, useSelector } from "../../store";
import { signInWithEmail, signUp } from "../../store/slices";
import { AuthFormContainer, FormPage, StyledAuth, SwitchButton } from "./style";
import { TEmailLoginData, TRegisterData } from "../../services/types";
import { Preloader } from "../../components/ui";

export const AuthPage: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);

    const handleSignUp = async (data: TRegisterData) => {
        await dispatch(signUp({ email: data.email, password: data.password }));
    };

    const handleSignIn = async (data: TEmailLoginData) => {
        await dispatch(
            signInWithEmail({ email: data.email, password: data.password })
        );
    };

    const handleSwitchForm = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <StyledAuth>
            <AuthFormContainer className={isFlipped ? "flip" : ""}>
                <FormPage className={!isFlipped ? "back" : ""}>
                    <AuthForm
                        id="signin"
                        title="Вход"
                        onSubmit={handleSignIn}
                        error={error}
                    />
                    <SwitchButton onClick={handleSwitchForm}>
                        Еще нет аккаунта? Зарегистрируйтесь
                    </SwitchButton>
                </FormPage>

                <FormPage className={isFlipped ? "back" : ""}>
                    <AuthForm
                        id="signup"
                        title="Регистрация"
                        onSubmit={handleSignUp}
                        error={error}
                        isRegistration={true}
                    />
                    <SwitchButton onClick={handleSwitchForm}>
                        Уже есть аккаунт? Войдите
                    </SwitchButton>
                </FormPage>
            </AuthFormContainer>
        </StyledAuth>
    );
};
