export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: "primary" | "secondary" | "icon" | "text";
    nohover?: boolean;
}

export interface AddButtonProps {
    onClick: () => void;
}

export interface StyledButtonProps {
    $nohover?: boolean;
    $variant: "primary" | "secondary" | "icon" | "text";
}

export interface DeleteButtonProps {
    onClick: (e) => void;
}
