import { FC } from "react";
import { Status } from "../types/Status";

import Chip from '@mui/material/Chip';

interface IStatus {
    status: Status
}

const CStatus:FC<IStatus> = ({status} : IStatus) => {

    return <Chip label={status} color={status == Status.NEW ? "primary": "success"}  />
}


export default CStatus