import { Navigate } from "react-router-dom";
import { useSelector } from "../../store";
import { ProtectedRouteProps } from "./types";
import { Preloader } from "../ui";

export const ProtectedRoute = ({ children, type }: ProtectedRouteProps) => {
    const { isAuthChecked, loading, id } = useSelector((state) => state.user);
    // const location = useLocation();
    // const from = location.state?.from || '/';

    if (type === "auth" && !id && isAuthChecked && !loading) {
        return <Navigate to="/signin" />;
    }

    if (type === "unauth" && id && isAuthChecked && !loading) {
        return <Navigate to="/home" />;
    }

    return children;
};
