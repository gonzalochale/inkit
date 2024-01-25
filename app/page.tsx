import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center p-4 gap-5">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
        Create UI components with ease
      </h1>
      <div className="flex gap-5">
        <Link href="/pricing">
          <Button size="lg">Start Building</Button>
        </Link>
        <a
          href="https://github.com/gonzalochale/inkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-1 justify-center items-center"
          >
            <Star className="stroke-1 size-5" />
            Star on GitHub
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:100px_100px] opacity-10 dark:opacity-50"></div>
    </main>
  );
}
