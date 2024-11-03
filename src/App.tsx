import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "./store";
import { getUser, logOut, signInWithEmail, signUp } from "./store/slices";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    });

    return (
        <>
            <button
                onClick={() =>
                    dispatch(
                        signUp({
                            email: "anotheruser@test.com",
                            password: "anotheruser",
                        })
                    )
                }
            >
                зарегистрировать
            </button>
            <button
                onClick={() =>
                    dispatch(
                        signInWithEmail({
                            email: "testmail@test.com",
                            password: "testpassword",
                        })
                    )
                }
            >
                войти в testmail
            </button>
            <button onClick={() => dispatch(logOut())}>выйти</button>
        </>
    );
}

export default App;
