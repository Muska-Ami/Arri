import { io } from "socket.io";
const socket = io();

let chan = ref("")

socket.on("chat message", (arg) => {
    let msg = '接收消息:'+arg ;
    console.log(msg);
    addMessage(msg);
});

function addMesssage(msg) {
    chan = `${chan}${msg}\n`;
}

export default chan;