"use client";

import { createRef, useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { handleCopyHTML, handleCopyJSX } from "@/lib/handles";
import { Input } from "@/components/ui/input";

const HeroVariants = cva("", {
  variants: {
    title: {
      sm: "text-5xl font-bold text-center tracking-tight",
      lg: "text-6xl font-bold text-center tracking-tighter",
      xl: "text-7xl font-extrabold text-center tracking-tighter",
    },
    subtitle: {
      sm: "text-base font-normal text-center text-black/80 dark:text-white/80",
      lg: "text-lg font-medium text-center text-black/80 dark:text-white/80",
      xl: "text-xl font-semibold text-center text-black/80 dark:text-white/80",
    },
    badge: {
      primary:
        "w-auto h-auto flex gap-1 justify-center items-center border border-black dark:border-white px-2 py-1 rounded-full text-sm font-medium text-white dark:text-black  bg-black dark:bg-white",
      secondary:
        "w-auto h-auto flex gap-1 justify-center items-center border border-black dark:border-white px-2 py-1 rounded-full text-sm font-medium text-black dark:text-white  bg-white dark:bg-black",
    },
  },
});

export default function HeroPage() {
  const myRef = createRef<HTMLDivElement>();
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<"sm" | "lg" | "xl">("sm");
  const [titleText, setTitleText] = useState("Start creating Apps");
  const [subtitle, setSubtitle] = useState<"sm" | "lg" | "xl">("sm");
  const [subtitleText, setSubtitleText] = useState(
    "Create your own components using InKit"
  );
  const [badge, setBadge] = useState<"primary" | "secondary">("primary");
  const [badgeText, setBadgeText] = useState("New components soon");

  useEffect(() => {
    if (myRef.current) {
      setHtml(myRef.current.innerHTML);
    }
  }, [myRef]);

  const copyHTML = () => {
    setLoading(true);
    const copy = handleCopyHTML(myRef.current);
    if (copy.success) {
      toast.success(copy.success);
      setLoading(false);
    } else {
      toast.error(copy.error);
      setLoading(false);
    }
  };

  const copyJSX = () => {
    setLoading(true);
    const copy = handleCopyJSX(myRef.current);
    if (copy.success) {
      toast.success(copy.success);
      setLoading(false);
    } else {
      toast.error(copy.error);
      setLoading(false);
    }
  };

  return (
    <main className="grid grid-cols-[300px_1fr] transitions">
      <aside className="container col-span-1 border-r flex flex-col gap-5 py-5">
        <Button
          size="sm"
          onClick={() => {
            setTitle("sm");
            setTitleText("Start creating Apps");
            setSubtitle("sm");
            setSubtitleText("Create your own components using InKit");
            setBadge("primary");
            setBadgeText("New components soon");
          }}
        >
          Reset
        </Button>
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium text-foreground">Bagde</span>
          <Input
            type="text"
            value={badgeText}
            onChange={(e) => setBadgeText(e.target.value)}
            maxLength={20}
          />
          <Button
            size="sm"
            variant="outline"
            onClick={() => setBadge("primary")}
            className={cn(badge === "primary" && "bg-accent")}
          >
            Primary
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setBadge("secondary")}
            className={cn(badge === "secondary" && "bg-accent")}
          >
            Secondary
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium text-foreground">Title</span>
          <Input
            type="text"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            maxLength={30}
          />
          <div className="flex gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setTitle("sm")}
              className={cn(title === "sm" && "bg-accent")}
            >
              MD
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setTitle("lg")}
              className={cn(title === "lg" && "bg-accent")}
            >
              LG
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setTitle("xl")}
              className={cn(title === "xl" && "bg-accent")}
            >
              XL
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium text-foreground">
            Subtitle
          </span>
          <Input
            type="text"
            value={subtitleText}
            onChange={(e) => setSubtitleText(e.target.value)}
            maxLength={64}
          />
          <div className="flex gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setSubtitle("sm")}
              className={cn(subtitle === "sm" && "bg-accent")}
            >
              MD
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setSubtitle("lg")}
              className={cn(subtitle === "lg" && "bg-accent")}
            >
              LG
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setSubtitle("xl")}
              className={cn(subtitle === "xl" && "bg-accent")}
            >
              XL
            </Button>
          </div>
        </div>
      </aside>
      <section
        ref={myRef}
        className="sticky top-0 w-full flex justify-center items-center h-screen overflow-hidden"
      >
        <section className="relative px-4 w-full py-5 flex flex-col gap-3 justify-center items-center">
          <span className={cn(HeroVariants({ badge }))}>
            {badgeText}{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
            </svg>
          </span>
          <h1 className={cn(HeroVariants({ title }))}>{titleText}</h1>
          <p className={cn(HeroVariants({ subtitle }))}>{subtitleText}</p>
          <div className="flex gap-3 py-3">
            <button className="px-4 py-2 h-10 w-auto bg-black dark:bg-white text-white dark:text-black rounded-md shadow-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 ease-in-out text-base font-medium">
              Get started
            </button>
            <button className="px-4 py-2 h-10 w-auto bg-white dark:bg-black text-black dark:text-white rounded-md shadow-sm border border-bg-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-black transition-all duration-300 ease-in-out text-base font-medium">
              Go to
            </button>
          </div>
        </section>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:100px_100px] opacity-10 dark:opacity-50"></div>
      </section>
      <div className="absolute top-0 right-0 p-4 flex gap-3">
        <Button
          className="flex gap-1 justify-center items-center"
          disabled={loading}
          onClick={copyJSX}
        >
          Copy JSX
        </Button>
        <Button
          className="flex gap-1 justify-center items-center"
          disabled={loading}
          onClick={copyHTML}
        >
          Copy HTML
        </Button>
      </div>
    </main>
  );
}
