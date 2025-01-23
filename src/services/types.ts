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
    description?: string;
    deadline?: Date;
};

export type TUpdateTaskData = {
    title?: string;
    description?: string;
    deadline?: string;
    completed?: boolean;
    board_id?: string;
};

export type TUserProfile = {
    email: string;
    id: string;
    name: string;
};

export type TBoard = {
    id: string;
    name: string;
    user_id: string;
};

export type TTask = {
    board_id: string;
    completed: boolean;
    created_at: string;
    deadline: string | null;
    description: string | null;
    id: string;
    title: string;
    user_id: string;
};
