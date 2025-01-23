import { forwardRef } from "react";
import { DateContainer, DateLabel, StyledDatePicker } from "./style";
import { DatePickerProps } from "./types";

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
    ({ field, error, labelText }, ref) => {
        return (
            <DateContainer>
                <DateLabel htmlFor="date">{labelText}</DateLabel>
                <StyledDatePicker
                    id="date"
                    ref={ref}
                    type="date"
                    {...field}
                    value={
                        field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
                    }
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                    placeholder=""
                    style={{ padding: "8px", borderRadius: "4px" }}
                />

                {error && <span style={{ color: "red" }}>{error}</span>}
            </DateContainer>
        );
    }
);
