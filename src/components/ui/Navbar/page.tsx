"use client";

import { usePathname } from "next/navigation";
import NavbarComp from "./NavbarComp";

export default function Navbar() {
  const pathname = usePathname();
  const isInComponentsPage = pathname.includes("/components");
  return (
    <div
      className={
        isInComponentsPage
          ? "sticky z-50 top-0 bg-zinc-950 border-zinc-800 xl:border-b"
          : ""
      }
    >
      <NavbarComp />
    </div>
  );
};