import ClipLoader from "react-spinners/ClipLoader";
import { LoaderContainer } from "./style";
import { COLORS } from "../constants";

export const Preloader = ({ loading }) => {
    return (
        // <LoaderContainer>
        <ClipLoader color={COLORS.PRELOADER} loading={loading} size="1em" />
        // </LoaderContainer>
    );
};
