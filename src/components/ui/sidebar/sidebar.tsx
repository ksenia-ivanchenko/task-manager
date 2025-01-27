import { FC } from "react";
import { SidebarContainer, SidebarContent } from "./style";
import { SidebarProps } from "./types";
import { Overlay } from "../overlay";

export const Sidebar: FC<SidebarProps> = ({ onClose, isOpen, children }) => {
    return (
        <>
            <SidebarContainer $isOpen={isOpen}>
                <SidebarContent>{children}</SidebarContent>
            </SidebarContainer>
            <Overlay onClick={onClose} isOpen={isOpen} />
        </>
    );
};
