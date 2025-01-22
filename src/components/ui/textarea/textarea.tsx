import { forwardRef } from "react";
import { StyledTextArea } from "./style";
import { TextAreaProps } from "./types";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ id, name, placeholder, rows = 4, cols = 50 }, ref) => {
        return (
            <StyledTextArea
                id={id}
                name={name}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                ref={ref}
            ></StyledTextArea>
        );
    }
);
