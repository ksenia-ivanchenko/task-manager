export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
    variant?: "primary" | "secondary" | "icon";
}
