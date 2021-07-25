import User1 from "../Assets/profile.jpg"
import User2 from "../Assets/profile.jpg"
import User3 from "../Assets/profile.jpg"

export default function Chat() {
  return (
    <div className="flex gap-5 p-5 ml-16">
      <div className="flex flex-col h-auto w-3/4 gap-2">
        <div className="flex flex-col font-poppins bg-gray-900 rounded-md p-1 h-md overflow-auto">
          <div className="flex flex-col justify-center items-center self-center my-2">
            <small className="text-gray-100 px-1">{new Date().toLocaleDateString("en", { month: "long", year: "numeric", day: "numeric" })}</small>
            <hr className="w-full" />
          </div>
          <div className="flex items-end self-end gap-2 mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Yagami" width={35} height={35} />
          </div>
          <div className="flex flex-row-reverse self-start gap-3 items-end mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Lawliet" width={35} height={35} />
          </div>
          <div className="flex items-end self-end gap-2 mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Yagami" width={35} height={35} />
          </div>
          <div className="flex flex-row-reverse self-start gap-3 items-end mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Lawliet" width={35} height={35} />
          </div>
          <div className="flex items-end self-end gap-2 mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Yagami" width={35} height={35} />
          </div>
          <div className="flex flex-row-reverse self-start gap-3 items-end mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Lawliet" width={35} height={35} />
          </div>
          <div className="flex items-end self-end gap-2 mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Yagami" width={35} height={35} />
          </div>
          <div className="flex flex-row-reverse self-start gap-3 items-end mb-4 w-8/12">
            <p className="bg-gray-100 border-2 p-1 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad voluptates aut, veniam vitae, maiores perferendis, quae aperiam temporibus alias sed! Maiores, doloremque quo qui sed neque odio autem.
            </p>
            <img className="rounded-full" src={User2} alt="Lawliet" width={35} height={35} />
          </div>
        </div>
        <div>
          <input className="w-full rounded-full border p-2" type="text" placeholder="Write a message..." />
          <button></button>
        </div>
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
