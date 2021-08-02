import { useState } from "react"
import { KeyboardEventHandler } from "react"
import io from "socket.io-client"
import User1 from "../Assets/profile.jpg"
import User2 from "../Assets/profile.jpg"
import User3 from "../Assets/profile.jpg"

export default function Chat() {
  const [msg, setMsg] = useState<Record<string, string>[]>([])
  const chatSocket = io("http://localhost:8080/chat")
  chatSocket.on("receive", (args: Record<string, string>) => {
    setMsg([...msg, args])
  })
  const sendMsg: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.code === "Enter") {
      chatSocket.emit("send", { message: ev.currentTarget.value, from: "myID" })
      ev.currentTarget.value = ""
    }
  }

  return (
    <div className="flex gap-5 p-5 ml-16 items-start">
      <div className="flex flex-col justify-between w-3/4 gap-2 min-h-100">
        <div className="flex flex-col font-poppins bg-gray-900 rounded-md p-1 overflow-auto">
          <div className="flex flex-col justify-center items-center self-center my-2">
            <small className="text-gray-100 px-1">{new Date().toLocaleDateString("en", { month: "long", year: "numeric", day: "numeric" })}</small>
            <hr className="w-full" />
          </div>
          {msg.map((val) => (
            // { self-start flex-row-reverse }
            <div className="flex items-end self-end gap-3 mb-4 w-8/12 justify-end">
              <p className="bg-gray-100 border-2 p-1 rounded">{val.message}</p>
              <img className="rounded-full" src={User2} alt="Yagami" width={35} height={35} />
            </div>
          ))}
        </div>
        <input className="w-full rounded-full border p-2 px-4 focus:outline-none" type="text" placeholder="Write a message..." onKeyUp={sendMsg} />
      </div>
      <div className="flex flex-col gap-5 w-1/4 items-center">
        <h3>List Of Chats</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <img className="rounded-md" src={User1} alt="Ryuk" width={60} height={60} />
            <h4>Ryuk</h4>
          </div>
          <div className="flex gap-2 items-center">
            <img className="rounded-md" src={User2} alt="Yagami" width={60} height={60} />
            <h4>Yagami</h4>
          </div>
          <div className="flex gap-2 items-center">
            <img className="rounded-md" src={User3} alt="Shinigami" width={60} height={60} />
            <h4>Shinigami</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
