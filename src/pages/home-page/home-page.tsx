import { FC } from "react";
import { useDispatch, useSelector } from "../../store";
import { logOut } from "../../store/slices";
import { Preloader } from "../../components/ui";
import { TaskCard } from "../../components";

export const HomePage: FC = () => {
    const dispatch = useDispatch();

    return (
        <TaskCard
            task={{
                board_id: "board id",
                completed: true,
                created_at: "date",
                deadline: "25.01.2025",
                description:
                    "Ветклиника работает каждый день с 10:00 до 18:00, надо заранее записаться!",
                id: "task id",
                title: "Сводить кота к ветеринару",
                user_id: "user id",
            }}
        ></TaskCard>
    );
};
