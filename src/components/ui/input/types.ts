import { InputHTMLAttributes, ChangeEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    onVisibleClick?: () => void;
}