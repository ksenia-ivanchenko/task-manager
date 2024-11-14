import { FC, ReactNode } from "react";
import { Header } from "../header";
import { LayoutWrapper, StyledMain } from "./style";

export const Layout: FC<{
    children: ReactNode;
    hideHeader?: boolean;
}> = ({ children, hideHeader }) => (
    <LayoutWrapper>
        {!hideHeader && <Header />}
        <StyledMain>{children}</StyledMain>
    </LayoutWrapper>
);
