import { FC, useRef, useState } from "react";
import { TBoardProps } from "./types";
import { TaskCard } from "../task-card";
import { StyledBoard, Title, TitleContainer } from "./style";
import { useDispatch, useSelector } from "../../store";
import { AddButton, Button, DeleteButton, Preloader } from "../ui";
import { Modal } from "../modal";
import { TaskForm } from "../task-form";
import { TCreateTaskData } from "../../services/types";
import { createTask, deleteBoard, updateBoard } from "../../store/slices";
import { MdCreate } from "react-icons/md";
import { COLORS } from "../ui/constants";

export const Board: FC<TBoardProps> = ({ boardId, name }) => {
    const { tasks } = useSelector((state) => state.tasks);
    const [showModal, setShowModal] = useState(false);
    const [disableEdit, setDisableEdit] = useState(true);
    const [currentName, setCurrentName] = useState(name);
    const [deletingBoard, setDeletingBoard] = useState(false);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleEditButtonClick = () => {
        setDisableEdit(false);

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleBlur = () => {
        if (!disableEdit) {
            dispatch(updateBoard({ name: currentName, board_id: boardId }));
            setDisableEdit(true);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            dispatch(updateBoard({ name: currentName, board_id: boardId }));
            setDisableEdit(true);
            inputRef.current?.blur();
        }
    };

    const handleAddNewTask = async (data: TCreateTaskData) => {
        await dispatch(
            createTask({
                title: data.title,
                description: data.description,
                board_id: data.board_id,
                deadline: data.deadline,
            })
        );
        setShowModal(false);
    };

    let boardTasks = [];

    if (tasks) {
        boardTasks = tasks.filter((task) => task.board_id === boardId);
    }

    const handleDelete = () => {
        setDeletingBoard(true);
        dispatch(deleteBoard(boardId)).then(() => setDeletingBoard(false));
    };

    // как при показе модалки с формой сделать, чтобы там не было выбора доски и таска сразу сохранилась на эту доску

    return (
        <>
            <StyledBoard>
                {!deletingBoard ? (
                    <>
                        <DeleteButton onClick={handleDelete} />
                        <TitleContainer>
                            <Title
                                disabled={disableEdit}
                                ref={inputRef}
                                value={currentName}
                                onChange={(e) => setCurrentName(e.target.value)}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                            />
                            <Button
                                variant="icon"
                                onClick={handleEditButtonClick}
                            >
                                <MdCreate
                                    style={{
                                        color: COLORS.INPUT_LABEL_FOCUS,
                                        scale: "1.5",
                                    }}
                                />
                            </Button>
                        </TitleContainer>
                        {boardTasks.map((task) => (
                            <TaskCard task={task} key={task.id} />
                        ))}
                        <AddButton onClick={() => setShowModal(true)} />
                    </>
                ) : (
                    <Preloader loading={deleteBoard} />
                )}
            </StyledBoard>

            {showModal && (
                <Modal
                    title="Добавить задачу"
                    onClose={() => setShowModal(false)}
                >
                    <TaskForm
                        onSubmit={handleAddNewTask}
                        defaultValues={{ board: boardId }}
                    />
                </Modal>
            )}
        </>
    );
};
