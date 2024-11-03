import {
    IBoard,
    ITask,
    IUserProfile,
    TCreateBoardData,
    TCreateTaskData,
    TEmailLoginData,
    TRegisterData,
    TUpdateBoardData,
    TUpdateTaskData,
    TUpdateUserData,
} from "./types";
import { AuthResponse, createClient, User } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// нет работы с access и refresh токенами, поскольку в supabase это сделано под капотом

export const signUpApi = async (
    authData: TRegisterData
): Promise<AuthResponse> => {
    const { data, error } = await supabase.auth.signUp({
        email: authData.email,
        password: authData.password,
    });

    if (error) {
        return {
            data: { user: null, session: null },
            error,
        };
    }
    console.log(data);
    return {
        data,
        error: null,
    };
};

export const signInWithEmailApi = async (
    authData: TEmailLoginData
): Promise<AuthResponse> => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: authData.email,
        password: authData.password,
    });

    if (data.user) {
        return { data, error: null };
    }

    return { data: { user: null, session: null }, error };
};

export const updateUserApi = async (updateData: TUpdateUserData) => {
    const { data, error } = await supabase.auth.updateUser({
        email: updateData.email,
        password: updateData.password,
        data: updateData.data,
    });

    if (data.user) {
        console.log(
            `if you're updating email, check your inbox. otherwise, user and session info:`
        );
        console.log(data);
        return data;
    }

    console.log(error);
    return error;
};

export const getUserApi = async (): Promise<User> => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        throw new Error(error.message);
    }
    if (!data.user) {
        throw new Error("You are logged out");
    }
    return data.user;
};

export const logOutApi = async (): Promise<string | null> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error.message);
        return error.message;
    }
    console.log("you logged out!");
};


export const getProfileDataApi = async (
    userId: string
): Promise<IUserProfile | null> => {
    const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId);

    if (error || !user || user.length === 0) {
        console.log(error || "something went wrong");
        return null;
    }

    console.log(user[0]);
    return user[0];
};

export const createBoardApi = async (
    boardData: TCreateBoardData
): Promise<IBoard | null> => {
    const { data, error } = await supabase
        .from("boards")
        .insert([boardData])
        .select();

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data[0]);
    return data[0];
};

export const updateBoardApi = async (
    boardData: TUpdateBoardData
): Promise<IBoard | null> => {
    const { data, error } = await supabase
        .from("boards")
        .update({ name: boardData.name })
        .eq("id", boardData.board_id)
        .select();

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data[0]);
    return data[0];
};

export const getUserBoardsApi = async (
    userId: string
): Promise<IBoard[] | null> => {
    const { data: boards, error } = await supabase
        .from("boards")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        console.log(error);
        return null;
    }

    console.log(boards);
    return boards;
};

export const deleteBoardApi = async (boardId: string) => {
    const { error } = await supabase.from("boards").delete().eq("id", boardId);

    if (error) {
        console.log(error);
        return error.message;
    }

    console.log("you deleted board!");
};

export const createTaskApi = async (
    taskData: TCreateTaskData
): Promise<ITask | null> => {
    const { data, error } = await supabase
        .from("tasks")
        .insert([taskData])
        .select();

    if (error) {
        console.log(error);
        return null;
    }
    console.log(data[0]);
    return data[0];
};

export const updateTaskApi = async (
    taskId: string,
    taskData: TUpdateTaskData
): Promise<ITask | null> => {
    const { data, error } = await supabase
        .from("tasks")
        .update(taskData)
        .eq("id", taskId)
        .select();

    if (error || !data.length) {
        console.log(error || "something went wrong");
        return null;
    }

    console.log(data[0]);
    return data[0];
};

export const deleteTaskApi = async (taskId: string) => {
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);

    if (error) {
        console.log(error);
        return error;
    }

    console.log("you deleted task!");
};

export const getUserTasksApi = async (userId: string): Promise<ITask[] | null> => {
    const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", userId);

    if (error || !tasks.length) {
        console.log(error || "something went wrong");
        return null;
    }

    console.log(tasks);
    return tasks;
};

export const getBoardTasksApi = async (
    boardId: string
): Promise<ITask[] | null> => {
    let { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("board_id", boardId);

    if (error || !tasks.length) {
        console.log(error || "something went wrong");
        return null;
    }

    console.log(tasks);
    return tasks;
};
