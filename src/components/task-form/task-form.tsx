import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { TTaskFormInputs, TTaskFormProps } from "./types";
import { StyledForm } from "./style";
import { Button, DatePicker, Input, Select, TextArea } from "../ui";
import { useSelector } from "../../store";

export const TaskForm: FC<TTaskFormProps> = ({ onSubmit, defaultValues }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        control,
    } = useForm<TTaskFormInputs>({
        mode: "onChange",
        defaultValues: {
            board_id: defaultValues?.board,
            deadline: defaultValues?.deadline,
            description: defaultValues?.descripton,
            title: defaultValues?.title,
        },
    });
    const { loading } = useSelector((state) => state.tasks);
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
                rules={{ required: "Выберите доску" }}
                render={({ field }) => (
                    <Select
                        defaultBoard={defaultValues?.board}
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
                loading={loading}
            >
                Сохранить
            </Button>
        </StyledForm>
    );
};
