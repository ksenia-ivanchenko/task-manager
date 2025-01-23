import { styled } from "styled-components";
import { COLORS } from "../constants";

export const StyledDatePicker = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${COLORS.INPUT_BORDER};
    font-size: 14px;
    background-color: #f9f9f9;
    cursor: pointer;

    ::-webkit-calendar-picker-indicator {
        background: #fff
            url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
            97% 50% no-repeat;
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        -webkit-appearance: none;
        display: none;
    }
`;

export const DateLabel = styled.label`
    color: ${COLORS.MAIN_DARK};
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
