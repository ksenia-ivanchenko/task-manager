import { useEffect } from "react";
import { useDispatch, useSelector } from "./store";
import { getUser } from "./store/slices";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout, ProtectedRoute } from "./components";
import { AuthPage, HomePage } from "./pages";
import { Preloader } from "./components/ui";

function App() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    if (loading)
        return (
            <div style={{ blockSize: "100vh" }}>
                <Preloader loading={loading} size="5em" />
            </div>
        );

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/auth" replace />} />
                <Route
                    path="/home"
                    element={
                        <Layout>
                            <ProtectedRoute type="auth">
                                <HomePage />
                            </ProtectedRoute>
                        </Layout>
                    }
                />
                <Route
                    path="/auth"
                    element={
                        <Layout hideHeader>
                            <ProtectedRoute type="unauth">
                                <AuthPage />
                            </ProtectedRoute>
                        </Layout>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
