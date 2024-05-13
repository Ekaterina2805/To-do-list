import { useInput } from "../../../../hooks/useInput";
import { AuthStateContext } from "../../../../context/Auth.context";
import { UserStateContext } from "../../../../context/User.context";
import { ChangeEvent, useContext, useState} from "react";
import { User } from "../../../../types/User";
import { createTask, updateTask } from "../../../../hooks/backend/task";
import { SocketApi } from "../../../../api/socket-api";
import { Task } from "../../../../types/Task";
import { Status } from "../../../../types/Status";

function useUpdateTask(task: Task ,onClose : () => void ) {
    const [title, setTitle] = useInput(true, task.title)
    const [content, setContent] = useInput(true, task.content ?? '')
    const [status, setStatus] = useState<Status>(task.status)
    const user = useContext<User | undefined>(UserStateContext);
    const token = useContext(AuthStateContext);

    const update = () => {
        if( !user) return
        updateTask(token, { id: task.id, status, title, content, authorId: user.id}).then(() => SocketApi.socket?.emit('update', {authorId : user.id})).then(() => onClose())
    }
    
    const handleStatus = (event: ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        if (value === Status.NEW) {
          setStatus(Status.NEW);
        } else {
            setStatus(Status.COMPLETE);
        }
      };

    return {title, setTitle, content, setContent, status, handleStatus, update}
}

export default useUpdateTask