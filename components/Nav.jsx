"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { capitalize } from "@mui/material";

const links = [
  {
    name:"home",
    path:"/"
  },
  {
    name:"servicios",
    path: "/services"
  },
  {
    name:"resumen",
    path: "/resume"
  },
  {
    name:"work",
    path: "/work"
  },
  {
    name:"contact",
    path: "/contact"
  }
]

const Nav = () => {
  const pathname = usePathname();
  return <nav className="flex gap-8">
    {links.map((link, index) => {
      return <Link className={`${link.path === pathname&& "text-accent border-b-2 border-accent"} capitalize font-mediun hover:text-accent translate-all` } key={index} href={link.path}>{link.name}</Link>
    })}
  </nav>;
};

export default Nav;
