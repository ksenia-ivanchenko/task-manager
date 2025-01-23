import { TCreateTaskData, TUpdateTaskData } from "../../services/types";

export type TTaskFormInputs = {
    title: string;
    description: string;
    board_id: string;
    deadline?: Date | null;
};

export type TTaskFormProps = {
    onSubmit: (data: TCreateTaskData | TUpdateTaskData) => void;
    defaultValues?: {
        board?: string;
        title?: string;
        descripton?: string;
        deadline?: Date;
    };
};
