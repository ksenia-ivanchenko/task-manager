import { FC, memo, useEffect } from "react";
import { createPortal } from "react-dom";
import { TModalProps } from "./types";
import { ModalContent, ModalHeader, ModalOverlay, StyledModal } from "./style";
import { MdClose } from "react-icons/md";
import { Button } from "../ui";
import { COLORS } from "../ui/constants";

const modalRoot = document.getElementById("modals");

export const Modal: FC<TModalProps> = memo(({ title, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            e.key === "Escape" && onClose();
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return createPortal(
        <>
            <StyledModal>
                <ModalHeader>
                    <h3>{title}</h3>
                    <Button variant="icon">
                        <MdClose
                            onClick={onClose}
                            style={{ color: COLORS.MAIN_DARK, scale: "1.5" }}
                        />
                    </Button>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
            </StyledModal>
            <ModalOverlay onClick={onClose} />
        </>,
        modalRoot as HTMLDivElement
    );
});
