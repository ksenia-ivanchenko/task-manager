import { FC } from "react";
import { StyledOverlay } from "./style";
import { TOverlayProps } from "./types";

export const Overlay: FC<TOverlayProps> = ({ onClick, isOpen }) => {
    return <StyledOverlay onClick={onClick} $isOpen={isOpen} />;
};
