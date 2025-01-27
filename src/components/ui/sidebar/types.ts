import { ReactNode } from "react";

export type SidebarProps = {
    onClose: () => void;
    children: ReactNode;
    isOpen: boolean;
};
