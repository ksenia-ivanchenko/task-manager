import { FC } from "react";
import {
    Deadline,
    DeleteButtonContainer,
    StyledCard,
    TitleContainer,
} from "./style";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdDeleteOutline,
} from "react-icons/md";
import { COLORS } from "../ui/constants";
import { Button } from "../ui";
import { TTaskCardProps } from "./types";

export const TaskCard: FC<TTaskCardProps> = ({ task }) => {
    const handleCardClick = () => {
        //логика редактирования карточки
    };

    return (
        <StyledCard onClick={handleCardClick}>
            <DeleteButtonContainer>
                <Button variant="icon">
                    <MdDeleteOutline
                        style={{
                            scale: "2",
                            color: COLORS.MAIN_DARK,
                            backgroundColor: "white",
                        }}
                    />
                </Button>
            </DeleteButtonContainer>
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
            <Deadline>{task.deadline}</Deadline>
        </StyledCard>
    );
};
