import { useEffect } from "react"
import { SocketApi } from "../api/socket-api"

export const useConnectionSocket = () => {
    const connectSocket = () => {
        SocketApi.createConnection()
    }

    useEffect(() => {
        connectSocket()
    })
}