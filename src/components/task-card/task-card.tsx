import { FC, useState } from "react";
import { Deadline, StyledCard, TitleContainer } from "./style";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { COLORS } from "../ui/constants";
import { Button, DeleteButton, Preloader } from "../ui";
import { TTaskCardProps } from "./types";
import { useDispatch, useSelector } from "../../store";
import { deleteTask } from "../../store/slices";
import { formatDate } from "../../utils/formatDate";

export const TaskCard: FC<TTaskCardProps> = ({ task }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    // добавить проверялку на точно ли хотим удалить
    const handleDelete = () => {
        setLoading(true);
        dispatch(deleteTask(task.id)).then(() => setLoading(false));
    };

    const handleCardClick = () => {
        //логика редактирования карточки
    };

    return (
        <StyledCard onClick={handleCardClick}>
            {!loading && (
                <div>
                    <DeleteButton onClick={handleDelete} />
                    <TitleContainer>
                        <h3>{task.title}</h3>
                        <Button variant="icon">
                            {task.completed ? (
                                <MdCheckBox
                                    style={{
                                        scale: "1.5",
                                        color: COLORS.MAIN_DARK,
                                    }}
                                />
                            ) : (
                                <MdCheckBoxOutlineBlank
                                    style={{
                                        scale: "1.5",
                                        color: COLORS.MAIN_DARK,
                                    }}
                                />
                            )}
                        </Button>
                    </TitleContainer>
                    <p>{task.description}</p>
                    {task.deadline && (
                        <Deadline>{formatDate(task.deadline)}</Deadline>
                    )}
                </div>
            )}
            {loading && <Preloader loading={loading} />}
        </StyledCard>
    );
};
