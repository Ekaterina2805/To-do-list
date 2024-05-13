import io, {Socket} from "socket.io-client"

export class SocketApi {
    static socket: null | Socket = null

    static createConnection() {
        this.socket = io(import.meta.env.VITE_BACKEND,  { transports : ['websocket'] })


        this.socket.on("connect", () => {
            console.log("CONNECTED",import.meta.env.VITE_BACKEND)
        })

        this.socket.on("disconnect", (e) => {
            console.log("DISCONNECTED")
        })
    }
}