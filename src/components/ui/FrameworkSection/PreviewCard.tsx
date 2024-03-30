import Image from "next/image";
import { PiPlusCircleDuotone } from "react-icons/pi";

const members = [
  {
    avatar: "/",
    name: "John lorin",
    email: "john@example.com",
  },
  {
    avatar: "/",
    name: "Chris bondi",
    email: "chridbondi@example.com",
  },
  {
    avatar:"/",
    name: "yasmine",
    email: "yasmine@example.com",
  },
  {
    avatar:"/",
    name: "Joseph",
    email: "joseph@example.com",
  },
];

export default () => (
  <div className="flex-1 max-w-lg mx-auto p-6 rounded-2xl bg-[#18181B]/75 hidden md:block">
    <div className="items-start justify-between sm:flex">
      <div>
        <h3 className="text-zinc-100 text-lg font-semibold">Team members</h3>
        <p className="mt-2 text-zinc-300 text-sm max-w-xs">
          Give your team members access to manage the system.
        </p>
      </div>
      <button className="flex-none flex items-center gap-1 rounded-lg text-xs text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-3 py-2">
        <PiPlusCircleDuotone className="w-5 h-5" />
        New member
      </button>
    </div>
    <ul className="mt-12 divide-y divide-zinc-800">
      {members.map((item, idx) => (
        <li key={idx} className="py-5">
          <div className="flex gap-3">
            <Image
              src={item.avatar}
              className="flex-none w-12 h-12 rounded-full"
              width={48}
              height={48}
              alt=""
            />
            <div className="text-sm">
              <span className="block text-zinc-100 font-semibold">
                {item.name}
              </span>
              <span className="block mt-2 text-zinc-400">{item.email}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);