"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside className="col-span-1 border-r container py-5 flex flex-col gap-5 justify-between">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold flex gap-1 justify-center items-center">
          InKit
        </h1>
        <p className="text-center text-base font-medium text-muted-foreground">
          Free and Copy-Paste UI components generator
        </p>
      </div>
      <nav className="h-full flex flex-col gap-3 items-start">
        <Link href="/auth" className="w-full">
          <Button
            variant="outline"
            className={`w-full ${pathname === "/auth" ? `bg-border` : ``}`}
          >
            Auth
          </Button>
        </Link>
        <Link href="/pricing" className="w-full">
          <Button
            variant="outline"
            className={`w-full ${pathname === "/pricing" ? `bg-border` : ``}`}
          >
            Pricing
          </Button>
        </Link>
      </nav>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/gonzalochale/inkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" variant="outline">
            <Github className="stroke-1" />
          </Button>
        </a>
        <a
          href="https://twitter.com/gonzalochale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" variant="outline">
            <Twitter className="stroke-1" />
          </Button>
        </a>
        <ThemeToggle />
      </div>
    </aside>
  );
}
