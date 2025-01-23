import ClipLoader from "react-spinners/ClipLoader";
import { COLORS } from "../constants";
import { PreloaderContainer } from "./style";

export const Preloader = ({ loading, size = "1em" }) => {
    return (
        <PreloaderContainer>
            <ClipLoader
                color={COLORS.PRELOADER}
                loading={loading}
                size={size}
            />
        </PreloaderContainer>
    );
};
