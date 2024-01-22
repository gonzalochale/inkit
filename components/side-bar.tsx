import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import SideBarLinks from "@/components/side-bar-links";

export default function SideBar() {
  return (
    <aside className="sticky top-0 h-screen col-span-1 border-r container py-5 flex flex-col gap-10 justify-between">
      <div className="flex flex-col gap-3">
        <Link href="/">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            InKit
          </h1>
        </Link>
        <p className="text-muted-foreground leading-7 text-balance">
          Create Copy-Paste free Tailwind CSS components for your next project
        </p>
      </div>
      <SideBarLinks />
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
