import { useContext, useEffect, useState} from "react";
import {  AuthStateContext } from "../../context/Auth.context";
import { User } from "../../types/User";
import { Task } from "../../types/Task";
import { Status } from "../../types/Status";
import { getTasks } from "../../hooks/backend/task";
import { UserStateContext } from "../../context/User.context";
import { deleteTasks } from "../../hooks/backend/task";
import { SocketApi } from "../../api/socket-api";

export function useTask() {

    const [tasks, setTasks] = useState<Task[]>([])
    const [filter, setFilter] = useState<Status | undefined>(undefined)
    const user = useContext<User | undefined>(UserStateContext);
    const token = useContext(AuthStateContext);
    
    const delTask = (task: Task) => {
        deleteTasks(token, task.id).then(() => SocketApi.socket?.emit('update', {authorId : user?.id}))
    }

    useEffect( () => {
        if (!user){
            return 
        }
        getTasks(token, user.id, filter).then((data) => {
            setTasks(data)
        })
    }, [filter])

    return {tasks, filter, setFilter, delTask}
}
