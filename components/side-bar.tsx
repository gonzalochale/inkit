import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Star, Twitter } from "lucide-react";
import SideBarLinks from "@/components/side-bar-links";

export default function SideBar() {
  return (
    <aside className="sticky top-0 h-screen col-span-1 border-r container py-5 flex flex-col gap-10 justify-between">
      <div className="flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <Link
            href="/"
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
          >
            InKit
          </Link>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground leading-7 text-balance">
          Create free Copy-Paste Tailwind CSS components for your next project
        </p>
      </div>
      <SideBarLinks />
      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="https://github.com/gonzalochale/inkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm" className="gap-1 justify-center items-center">
            <Star className="stroke-1 size-5" />
            Star
          </Button>
        </a>
        <a
          href="https://twitter.com/gonzalochale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm" className="gap-1 justify-center items-center">
            <Twitter className="stroke-1" />
            Made by Gonzalo
          </Button>
        </a>
      </div>
    </aside>
  );
}
