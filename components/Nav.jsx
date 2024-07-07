"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Links from "./../public/utils/links.json"
import { usePathname } from "next/navigation";
import { useTranslation } from 'next-i18next';

const Nav = () => {
  const { t } = useTranslation('common');
  const pathname = usePathname();
  return <nav className="flex gap-8">
    {Links.map((link, index) => {
      return <Link className={`${link.path === pathname&& "text-accent border-b-2 border-accent"} capitalize font-mediun hover:text-accent translate-all` } key={index} href={link.path}>{t(link.name)}</Link>
    })}
  </nav>;
};

export default Nav;
