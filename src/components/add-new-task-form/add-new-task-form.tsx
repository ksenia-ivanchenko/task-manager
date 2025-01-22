import { FC } from "react";
import { useForm } from "react-hook-form";
import { IAddNewTaskFormInputs, TAddNewTaskFormProps } from "./types";
import { StyledForm } from "./style";
import { Button, Input, TextArea } from "../ui";

export const AddNewTaskForm: FC<TAddNewTaskFormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<IAddNewTaskFormInputs>({ mode: "onChange" });

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                id="title"
                label="Что надо сделать?"
                type="text"
                errorMessage={errors.title?.message}
                required
                {...register("title", {
                    required: "Пожалуйста, введите название",
                })}
            />
            <TextArea
                id="description"
                name="description"
                placeholder="Введите описание задачи"
                {...register("description")}
            ></TextArea>
            <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                loading={isSubmitting}
            >
                Добавить
            </Button>
        </StyledForm>
    );
};
