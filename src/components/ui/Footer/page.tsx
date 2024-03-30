"use client";

import { usePathname } from "next/navigation";
import FooterComp from "./FooterComp";

export default function Footer() {
  const pathname = usePathname();
  const isInComponentsPage = pathname.includes("/components");
  return !isInComponentsPage ? <FooterComp /> : <></>;
};