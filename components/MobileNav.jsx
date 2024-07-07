"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import Links from "./../public/utils/links.json";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div>Logo</div>
        {Links.map((link, index) => (
          <Link
            className={`${link.path === pathname&& "text-accent border-b-2 border-accent"} capitalize font-mediun hover:text-accent translate-all` }
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
