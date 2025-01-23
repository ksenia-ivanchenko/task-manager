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
                    min={new Date().toISOString().split("T")[0]}
                    value={
                        field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
                    }
                    onChange={(e) =>
                        field.onChange(
                            e.target.value ? new Date(e.target.value) : null
                        )
                    }
                    placeholder=""
                    style={{ padding: "8px", borderRadius: "4px" }}
                    aria-label="Выберите дедлайн"
                />

                {error && <span style={{ color: "red" }}>{error}</span>}
            </DateContainer>
        );
    }
);
