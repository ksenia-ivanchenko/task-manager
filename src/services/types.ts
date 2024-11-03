export type TRegisterData = {
    email: string;
    password: string;
};

export type TEmailLoginData = {
    email: string;
    password: string;
};

export type TUpdateUserData = {
    email?: string;
    password?: string;
    data?: {};
};

export type TCreateBoardData = {
    name: string;
};

export type TUpdateBoardData = {
    board_id: string;
    name: string;
};

export type TCreateTaskData = {
    title: string;
    board_id: string;
};

export type TUpdateTaskData = {
    title?: string;
    description?: string;
    deadline?: string;
    completed?: boolean;
    board_id?: string;
};

export interface IUserProfile {
    email: string;
    id: string;
    name: string;
}

export interface IBoard {
    id: string;
    name: string;
    user_id: string;
}

export interface ITask {
    board_id: string;
    completed: boolean;
    created_at: string;
    deadline: string | null;
    description: string | null;
    id: string;
    title: string;
    user_id: string;
}
