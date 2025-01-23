import { forwardRef, useEffect, useState } from "react";
import {
    SelectLabel,
    SelectRadioButtonWrapper,
    SelectRadioInput,
    SelectRadioLabel,
    SelectWrapper,
} from "./style";
import { SelectProps } from "./types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ defaultBoard, options, onChange, placeholder = "Выберите..." }, ref) => {
        const [selectedValue, setSelectedValue] = useState<string>("");

        const handleOptionChange = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            const value = event.target.value;
            setSelectedValue(value);
            onChange?.(value);
        };

        useEffect(() => {
            if (defaultBoard) {
                setSelectedValue(defaultBoard);
            }
        }, []);

        return (
            <SelectWrapper>
                <SelectLabel>{placeholder}</SelectLabel>
                {options.map((option) => (
                    <SelectRadioButtonWrapper key={option.value}>
                        <SelectRadioInput
                            type="radio"
                            id={option.value}
                            name="select-option"
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={handleOptionChange}
                        />
                        <SelectRadioLabel htmlFor={option.value}>
                            {option.label}
                        </SelectRadioLabel>
                    </SelectRadioButtonWrapper>
                ))}
            </SelectWrapper>
        );
    }
);
