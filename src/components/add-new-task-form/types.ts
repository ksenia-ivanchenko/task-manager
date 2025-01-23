import { TCreateTaskData } from "../../services/types";

export type IAddNewTaskFormInputs = {
    title: string;
    description: string;
    board_id: string;
    deadline?: Date | null;
};

export type TAddNewTaskFormProps = {
    onSubmit: (data: TCreateTaskData) => void;
    defaultBoard?: string;
};
