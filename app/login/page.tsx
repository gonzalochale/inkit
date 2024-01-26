"use client";

import { createRef, useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { handleCopyHTML, handleCopyJSX } from "@/lib/handles";
import { Input } from "@/components/ui/input";

const loginVariants = cva(
  "bg-white dark:bg-black border border-gray-300 dark:border-zinc-700 flex flex-col gap-5 justify-center items-center",
  {
    variants: {
      size: {
        default: "w-[350px] p-4 h-auto",
        sm: "w-[400px] p-5 h-auto",
        lg: "w-[500px] p-7 h-auto",
      },
      borderRadius: {
        none: "rounded-none",
        sm: "rounded-md",
        lg: "rounded-xl",
        xl: "rounded-2xl",
      },
      shadow: {
        none: "shadow-none",
        md: "shadow-md",
      },
    },
    defaultVariants: {
      size: "default",
      borderRadius: "none",
      shadow: "none",
    },
  }
);

export default function LoginPage() {
  const myRef = createRef<HTMLDivElement>();
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [size, setSize] = useState<"default" | "sm" | "lg">("default");
  const [borderRadius, setBorderRadius] = useState<"none" | "sm" | "lg" | "xl">(
    "none"
  );
  const [shadow, setShadow] = useState<"none" | "md">("none");
  const [title, setTitle] = useState<string>("Welcome Back");
  const [description, setDescription] = useState<string>(
    "Enter your credentials below to access your account"
  );

  const handleSizeChange = (newSize: "default" | "sm" | "lg") => {
    setSize(newSize);
  };

  const handleBorderRadiusChange = (
    newBorderRadius: "none" | "sm" | "lg" | "xl"
  ) => {
    setBorderRadius(newBorderRadius);
  };

  const handleShadowChange = (newShadow: "none" | "md") => {
    setShadow(newShadow);
  };

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
    <main className="grid grid-cols-1 lg:grid-cols-[300px_1fr] transitions">
      <aside className="container col-span-1 max-lg:border-b lg:border-r flex flex-col gap-5 py-5">
        <div className="flex justify-start items-start py-5 gap-10 overflow-x-auto scroll lg:gap-5 lg:flex-col">
          <Button
            size="sm"
            className="w-full"
            onClick={() => {
              setSize("default");
              setBorderRadius("none");
              setShadow("none");
              setTitle("Welcome Back");
              setDescription(
                "Enter your credentials below to access your account"
              );
            }}
          >
            Reset
          </Button>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">Size</span>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleSizeChange("default")}
                className={cn(size === "default" && "bg-accent")}
              >
                MD
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleSizeChange("sm")}
                className={cn(size === "sm" && "bg-accent")}
              >
                LG
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleSizeChange("lg")}
                className={cn(size === "lg" && "bg-accent")}
              >
                XL
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">
              Border Radius
            </span>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleBorderRadiusChange("none")}
                className={cn(
                  borderRadius === "none" ? "bg-accent" : "",
                  "rounded-none"
                )}
              ></Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleBorderRadiusChange("sm")}
                className={cn(
                  borderRadius === "sm" ? "bg-accent" : "",
                  "rounded-sm"
                )}
              ></Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleBorderRadiusChange("lg")}
                className={cn(
                  borderRadius === "lg" ? "bg-accent" : "",
                  "rounded-lg"
                )}
              ></Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => handleBorderRadiusChange("xl")}
                className={cn(
                  borderRadius === "xl" ? "bg-accent" : "",
                  "rounded-xl"
                )}
              ></Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">
              Shadow
            </span>
            <Switch
              checked={shadow === "md" ? true : false}
              onCheckedChange={
                shadow === "md"
                  ? () => handleShadowChange("none")
                  : () => handleShadowChange("md")
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">Title</span>
            <Input
              className="max-lg:min-w-[300px]"
              name="title"
              type="text"
              value={title}
              maxLength={32}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">
              Description
            </span>
            <Input
              className="max-lg:min-w-[300px]"
              name="description"
              type="text"
              value={description}
              maxLength={64}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </aside>
      <section
        ref={myRef}
        className="sticky top-0 flex justify-center items-center h-screen"
      >
        <div className={cn(loginVariants({ size, borderRadius, shadow }))}>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-lg font-medium text-black dark:text-white">
              {title}
            </span>
            <p className="text-base font-normal text-center text-slate-600 dark:text-slate-200">
              {description}
            </p>
          </div>
          <form className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-normal text-black dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Gonzalo Chalé"
              className={`h-10 text-sm px-2 border bg-white dark:bg-black rounded-${borderRadius}`}
            />
            <label
              htmlFor="password"
              className="text-sm font-normal text-black dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className={`h-10 px-2 border bg-white dark:bg-black rounded-${borderRadius}`}
            />
            <div className="flex flex-col gap-3 justify-center items-start">
              <button className="text-xs text-black dark:text-white hover:underline">
                Forgot Password?
              </button>
              <button
                className={`w-full border px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black  rounded-${borderRadius}`}
              >
                Log In
              </button>
            </div>
          </form>
          <span className="text-sm font-normal text-center text-slate-600 dark:text-slate-200">
            Or continue with
          </span>
          <div className="flex gap-3 w-full">
            <button
              className={`flex w-full gap-1 justify-center items-center border px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-${borderRadius}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              GitHub
            </button>
            <button
              className={`flex w-full gap-1 justify-center items-center border px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-${borderRadius}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
              </svg>
              Google
            </button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:100px_100px] opacity-10 dark:opacity-50"></div>
      </section>
      <div className="absolute top-0 right-0 px-4 py-5 flex gap-3">
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
