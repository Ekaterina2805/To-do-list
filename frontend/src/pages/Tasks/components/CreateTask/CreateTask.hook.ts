import { useInput } from "../../../../hooks/useInput";
import { AuthStateContext } from "../../../../context/Auth.context";
import { UserStateContext } from "../../../../context/User.context";
import { useContext} from "react";
import { User } from "../../../../types/User";
import { createTask } from "../../../../hooks/backend/task";
import { SocketApi } from "../../../../api/socket-api";

function useCreateTask(onClose : () => void ) {
    const [title, setTitle] = useInput()
    const [content, setContent] = useInput()
    const user = useContext<User | undefined>(UserStateContext);
    const token = useContext(AuthStateContext);

    const create = () => {
        if( !user) return
        createTask(token, { title, content, authorId: user.id}).then(() => SocketApi.socket?.emit('update', {authorId : user.id})).then(() => onClose())
    }
    

    return {title, setTitle, content, setContent, create}
}

export default useCreateTask
