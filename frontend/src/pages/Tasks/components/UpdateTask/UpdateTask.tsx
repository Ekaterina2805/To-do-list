import {FC} from "react"

import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import useUpdateTask from "./UpdateTask.hook"
import { Task } from "../../../../types/Task";
import { Status } from "../../../../types/Status";

interface IUpdateTask {
    onClose: () => void,
    task: Task
}

const UpdateTask: FC<IUpdateTask> = ({onClose, task}) => {
    const {title, setTitle, content, setContent, status, handleStatus, update}= useUpdateTask(task, onClose)

    return <form
    className="CreateUser__form"
    onSubmit={(event) => {
      event.preventDefault();
      update()
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

            <RadioGroup
                row
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={status}
                onChange={handleStatus}
            >
                <FormControlLabel
                    value={Status.NEW}
                    control={<Radio />}
                    label="NEW"
                />
                <FormControlLabel
                    value={Status.COMPLETE}
                    control={<Radio />}
                    label="COPLETE"
                />
            </RadioGroup>
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

export default UpdateTask