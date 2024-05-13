import { Status } from "../../types/Status";
import { TaskCreate, TaskUpdate } from "../../types/Task";

export function createTask(token: string,task: TaskCreate) {
    let controller = new AbortController();
    const requestOptions = {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" , },
        body: JSON.stringify(task),
        signal: controller.signal,
    };
    return fetch(
        `${import.meta.env.VITE_BACKEND}/task/`,
        requestOptions
    ).then((response) => response.json());
}

export function updateTask(token: string, task: TaskUpdate) {
    let controller = new AbortController();
    const requestOptions = {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(task),
        signal: controller.signal,
    };
    return fetch(
        `${import.meta.env.VITE_BACKEND}/task/`,
        requestOptions
    ).then((response) => response.json());
}

export function getTasks(token: string, id: number, status?: Status){

    let controller = new AbortController();
    const requestOptions = {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        signal: controller.signal,
    };
    return fetch(
        `${import.meta.env.VITE_BACKEND}/task/${id}${status ? `?status=${status}` : ""}`,
        requestOptions
    ).then((response) => response.json());
}

export function deleteTasks(token: string, id: number){

    let controller = new AbortController();
    const requestOptions = {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        signal: controller.signal,
    };
    return fetch(
        `${import.meta.env.VITE_BACKEND}/task/${id}`,
        requestOptions
    ).then((response) => response.json())
}