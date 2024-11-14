import { FC } from "react";
import { useDispatch, useSelector } from "../../store";
import { logOut } from "../../store/slices";
import { Preloader } from "../../components/ui";

export const HomePage: FC = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(logOut())}>
                Выйти из аккаунта
            </button>
        </div>
    );
};
