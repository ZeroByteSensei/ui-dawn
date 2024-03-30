import { ReactNode } from "react";

export default function Container({ children, classNames }:{children:ReactNode, classNames:string}) {
    return <div className={`mx-auto max-w-screen-xl px-4 ${classNames}`}>{children}</div>
  }