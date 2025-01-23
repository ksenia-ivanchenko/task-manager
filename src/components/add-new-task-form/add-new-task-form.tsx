import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { IAddNewTaskFormInputs, TAddNewTaskFormProps } from "./types";
import { StyledForm } from "./style";
import { Button, DatePicker, Input, Select, TextArea } from "../ui";
import { useSelector } from "../../store";

export const AddNewTaskForm: FC<TAddNewTaskFormProps> = ({
    onSubmit,
    defaultBoard,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        control,
    } = useForm<IAddNewTaskFormInputs>({ mode: "onChange" });

    const { boards } = useSelector((state) => state.boards);
    let selectOptions = [];
    for (let board of boards) {
        selectOptions.push({ value: board.id, label: board.name });
    }

    // поменять компонент DatePicker на что то более менее нормальное
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
            />
            <Controller
                name="board_id"
                control={control}
                defaultValue={defaultBoard}
                rules={{ required: "Выберите доску" }}
                render={({ field }) => (
                    <Select
                        defaultBoard={defaultBoard}
                        options={selectOptions}
                        {...field}
                        placeholder="На какую доску добавим?"
                    />
                )}
            />
            <Controller
                name="deadline"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <DatePicker
                        field={field}
                        error={errors.deadline?.message}
                        labelText="Назначим дедлайн?"
                    />
                )}
            />

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
