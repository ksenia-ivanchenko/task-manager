import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    placeholder: string;
    rows?: number;
    cols?: number;
}
