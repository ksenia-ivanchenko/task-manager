export type IAddNewTaskFormInputs = {
    title: string;
    description: string;
    deadline: string;
};

export type TAddNewTaskFormProps = {
    onSubmit: () => void;
};
