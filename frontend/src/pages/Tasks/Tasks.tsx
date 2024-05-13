import {FC, useState} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTask } from "./Tasks.hook";

import { styled } from '@mui/material/styles';
import { AppBar, Box, CardActions, Fab, IconButton, Stack, TabClassKey, Toolbar } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';


import "./Tasks.css"
import CStatus from "../../components/Status";
import CreateTask from "./components/CreateTask/CreateTask";
import UpdateTask from "./components/UpdateTask/UpdateTask";
import { Task } from "../../types/Task";
interface ITasks {}


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: 500,
    right: 0,
    margin: '0 auto',
  });

const Tasks: FC<ITasks> = () => {
    const {tasks, filter, setFilter, delTask} = useTask()
    const [edit, setEdit] = useState<Task | undefined>(undefined)
    const [create, setCreate] = useState<boolean>(true)
    if(create) {
        return <CreateTask onClose={() => {setCreate(false)}}/>
    } else if(edit){ 
        return <UpdateTask  onClose={() => {setEdit(undefined)}} task={edit}/>
    } else 
    return <>
    <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }}>
        <Toolbar>
          
          <StyledFab color="info" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          
        </Toolbar>
      </AppBar>
    <Stack spacing={1} sx={{marginTop: 10}}>
        {tasks.map((task) => {
            return <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                <CardContent>
                    <Stack direction="row"  justifyContent="space-between" spacing={2}>
                         <Typography variant="h5" component="div">
                        {task.title}
                    </Typography>
                    <CStatus status={task.status}/>
                    </Stack>
                   
                    <Typography variant="body2">
                        {task.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Stack direction="row"  justifyContent="space-between" spacing={2}>
                    <IconButton aria-label="edit" onClick={() => setEdit(task)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => delTask(task)}>
                        <DeleteIcon />
                    </IconButton>
                    </Stack>
                </CardActions>
            </Card>
        })}
    </Stack>
    </>
}
export default Tasks