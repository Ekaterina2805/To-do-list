import {FC} from "react"

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import useCreateTask from "./CreateTask.hook"

interface ICreateTask {
    onClose: () => void
}

const CreateTask: FC<ICreateTask> = ({onClose}) => {
    const {title, setTitle, content, setContent, create} = useCreateTask(onClose)


    return <form
    className="CreateUser__form"
    onSubmit={(event) => {
      event.preventDefault();
      create()
    }}>

    <FormControl
          sx={{ m: 0 }}
          variant="standard"
          fullWidth
        >
            <FormLabel id="demo-error-radios">New Task</FormLabel>
            <TextField
                id="title"
                label="Title"
                variant="outlined"
                value={title}
                onChange={setTitle}
                margin="dense"
            />
            <TextField
                id="content"
                label="Content"
                variant="outlined"
                value={content}
                onChange={setContent}
                margin="dense"
            />
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                create
            </Button>
            <Button
                sx={{ mt: 1, mr: 1 }}
                color="error"
                variant="outlined"
                onClick={onClose}
            >
                cancel
            </Button>
        </FormControl>

    </form>
} 


export default CreateTask