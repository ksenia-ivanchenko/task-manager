import ClipLoader from "react-spinners/ClipLoader";
import { LoaderContainer } from "./style";

export const Preloader = ({ loading }) => {
    return (
        // <LoaderContainer>
        <ClipLoader color="#4183c4" loading={loading} size="1em" />
        // </LoaderContainer>
    );
};
