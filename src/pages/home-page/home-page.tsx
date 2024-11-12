import { FC } from "react";
import { useDispatch, useSelector } from "../../store";
import { logOut } from "../../store/slices";
import { Preloader } from "../../components/ui";

export const HomePage: FC = () => {
    const dispatch = useDispatch();

    return (
        <main>
            <button onClick={() => dispatch(logOut())}>
                Выйти из аккаунта
            </button>
        </main>
    );
};
