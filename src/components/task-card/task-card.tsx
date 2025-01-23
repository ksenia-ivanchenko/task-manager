import { FC, useState } from "react";
import { Deadline, StyledCard, TitleContainer } from "./style";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { COLORS } from "../ui/constants";
import { Button, DeleteButton, Preloader } from "../ui";
import { TTaskCardProps } from "./types";
import { useDispatch } from "../../store";
import { deleteTask, updateTask } from "../../store/slices";
import { formatDate } from "../../utils/formatDate";
import { Modal, TaskForm } from "../../components";
import { TUpdateTaskData } from "../../services/types";

export const TaskCard: FC<TTaskCardProps> = ({ task }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // добавить проверялку на точно ли хотим удалить
    const handleDelete = (e) => {
        e.stopPropagation();
        setLoading(true);
        dispatch(deleteTask(task.id)).then(() => setLoading(false));
    };

    const handleEditTask = (data: TUpdateTaskData) => {
        dispatch(updateTask({ id: task.id, taskData: data })).then(() =>
            setShowModal(false)
        );
    };

    const handleComplete = (e) => {
        e.stopPropagation();
        dispatch(
            updateTask({
                id: task.id,
                taskData: { completed: !task.completed },
            })
        );
    };

    return (
        <>
            <StyledCard onClick={(e) => setShowModal(true)}>
                {!loading && (
                    <>
                        <DeleteButton onClick={handleDelete} />
                        <TitleContainer>
                            <h3>{task.title}</h3>
                            <Button variant="icon" onClick={handleComplete}>
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
                    </>
                )}
                {loading && <Preloader loading={loading} />}
            </StyledCard>
            {showModal && (
                <Modal
                    title="Редактировать задачу"
                    onClose={() => setShowModal(false)}
                >
                    <TaskForm
                        onSubmit={handleEditTask}
                        defaultValues={{
                            title: task.title,
                            descripton: task.description,
                            deadline: task.deadline && new Date(task.deadline),
                            board: task.board_id,
                        }}
                    />
                </Modal>
            )}
        </>
    );
};
