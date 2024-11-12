import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../ui";
import { AuthFormProps, IAuthFormInputs } from "./types";
import { StyledForm } from "./style";

export const AuthForm: FC<AuthFormProps> = ({
    id,
    title,
    onSubmit,
    error,
    isRegistration = false,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitted, isSubmitting },
        setFocus,
        watch,
    } = useForm<IAuthFormInputs>({ mode: "onChange" });

    useEffect(() => {
        setFocus("email");
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>{title}</h2>
            <Input
                id={`${id}-email`}
                label="Email"
                type="email"
                errorMessage={errors.email?.message}
                required
                autoComplete="email"
                {...register("email", {
                    required: "Email обязателен",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Неверный формат Email",
                    },
                })}
            />
            <Input
                id={`${id}-password`}
                type={showPassword ? "text" : "password"}
                label="Пароль"
                errorMessage={errors.password?.message}
                required
                autoComplete="current-password"
                onVisibleClick={togglePasswordVisibility}
                {...register("password", {
                    required: "Пароль обязателен",
                    minLength: {
                        value: 8,
                        message: "Пароль должен быть не менее 8 символов",
                    },
                })}
            />
            {isRegistration && (
                <Input
                    id={`${id}-confirm-password`}
                    label="Подтвердите пароль"
                    type={showConfirmPassword ? "text" : "password"}
                    errorMessage={errors.confirmPassword?.message}
                    required
                    autoComplete="new-password"
                    onVisibleClick={toggleConfirmPasswordVisibility}
                    {...register("confirmPassword", {
                        required: "Подтверждение пароля обязательно",
                        validate: (value) =>
                            value === watch("password") ||
                            "Пароли не совпадают",
                    })}
                />
            )}
            <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                loading={isSubmitting}
            >
                {isRegistration ? "Зарегистрироваться" : "Войти"}
            </Button>
            {isSubmitted && error && <p>{error}</p>}
        </StyledForm>
    );
};
