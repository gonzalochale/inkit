"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

export default function SideBarLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/auth",
      label: "Auth",
    },
  ];
  return (
    <nav className="w-full h-full flex flex-col gap-3 items-start overflow-y-auto scroll relative pr-4">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="w-full">
          <Button
            variant="ghost"
            size="lg"
            className={`w-full justify-start ${
              pathname === link.href ? "border bg-accent" : ""
            }`}
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
