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
    const [gettingData, setGettingData] = useState(false);

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

    if (gettingData) return <Preloader loading={gettingData}></Preloader>;

    return (
        <BoardList>
            {boards.length ? (
                <>
                    {boards.map((board) => (
                        <Board
                            boardId={board.id}
                            name={board.name}
                            key={board.id}
                        />
                    ))}{" "}
                </>
            ) : (
                <EmptyBoard>Здесь могла быть ваша доска...</EmptyBoard>
            )}
            {creatingBoard ? (
                <Preloader loading={creatingBoard}></Preloader>
            ) : (
                <AddButton onClick={handleButtonClick} />
            )}
        </BoardList>
    );
};
