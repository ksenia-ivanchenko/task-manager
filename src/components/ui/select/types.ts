type Option = {
    value: string;
    label: string;
};

export type SelectProps = {
    options: Option[];
    onChange?: (value: string) => void;
    placeholder?: string;
    defaultBoard?: string;
};
