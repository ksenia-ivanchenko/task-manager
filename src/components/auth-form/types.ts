import { SubmitHandler } from "react-hook-form";

export interface IAuthFormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthFormProps {
    id: string;
    title: string;
    onSubmit: SubmitHandler<IAuthFormInputs>;
    error: string | null;
    isRegistration?: boolean;
}
