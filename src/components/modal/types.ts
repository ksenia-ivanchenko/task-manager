import { ReactNode } from "react";

export type TModalProps = {
    title: string;
    onClose: () => void;
    isOpen: boolean;
    children?: ReactNode;
};
