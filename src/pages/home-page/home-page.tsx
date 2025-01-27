import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store";
import { createBoard, getUserBoards, getUserTasks } from "../../store/slices";
import { Board } from "../../components";
import { BoardList, EmptyBoard } from "./style";
import { AddButton, Preloader } from "../../components/ui";

export const HomePage: FC = () => {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.user);
    const { boards, loading } = useSelector((state) => state.boards);
    const [creatingBoard, setCreatingBoard] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    const handleButtonClick = () => {
        setCreatingBoard(true);
        dispatch(createBoard({ name: "Новая доска" })).then(() =>
            setCreatingBoard(false)
        );
    };

    useEffect(() => {
        if (id) {
            dispatch(getUserBoards(id));
            dispatch(getUserTasks(id));
        }
    }, [id]);

    useEffect(() => {
        if (!loading && boards.length >= 0) {
            const timer = setTimeout(() => setIsRendered(true), 300);
            return () => clearTimeout(timer);
        }
    }, [loading, boards]);

    return (
        <BoardList>
            {!isRendered ? (
                <Preloader loading={!isRendered} />
            ) : (
                <>
                    {!!boards.length && (
                        <>
                            {boards.map((board) => (
                                <Board
                                    boardId={board.id}
                                    name={board.name}
                                    key={board.id}
                                />
                            ))}
                        </>
                    )}
                    {!boards.length && !loading && (
                        <EmptyBoard>Здесь могла быть ваша доска...</EmptyBoard>
                    )}
                    {creatingBoard ? (
                        <Preloader loading={creatingBoard} />
                    ) : (
                        <AddButton onClick={handleButtonClick} />
                    )}
                </>
            )}
        </BoardList>
    );
};
