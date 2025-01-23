export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: "primary" | "secondary" | "icon";
    nohover?: boolean;
}

export interface AddButtonProps {
    onClick: () => void;
}

export interface StyledButtonProps {
    $nohover?: boolean;
    $variant: "primary" | "secondary" | "icon";
}

export interface DeleteButtonProps {
    onClick: () => void;
}
