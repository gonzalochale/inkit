"use client";

import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const loginVariants = cva(
  "border border-gray-300 dark:border-zinc-700 flex flex-col gap-5 justify-center items-center p-4 bg-white dark:bg-black",
  {
    variants: {
      size: {
        default: "w-[400px] h-auto",
        sm: "w-[450px] h-auto",
        lg: "w-[500px] h-auto",
      },
      borderRadius: {
        default: "rounded-none",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      shadow: {
        default: "shadow-none",
        md: "shadow-md",
      },
    },
    defaultVariants: {
      size: "default",
      borderRadius: "default",
      shadow: "default",
    },
  }
);

export default function LoginPage() {
  const [size, setSize] = useState<"default" | "sm" | "lg" | null>("default");
  const [borderRadius, setBorderRadius] = useState<null | "sm" | "lg" | "xl">(
    null
  );
  const [shadow, setShadow] = useState<null | "md">(null);

  const handleSizeChange = (newSize: "default" | "sm" | "lg") => {
    setSize(newSize);
  };

  const handleBorderRadiusChange = (
    newBorderRadius: null | "sm" | "lg" | "xl"
  ) => {
    setBorderRadius(newBorderRadius);
  };

  const handleShadowChange = (newShadow: null | "md") => {
    setShadow(newShadow);
  };

  return (
    <main className="grid grid-cols-[300px_1fr]">
      <aside className="container col-span-1 border-r flex flex-col gap-5 py-5">
        <Button
          size="sm"
          onClick={() => {
            setSize("default");
            setBorderRadius(null);
            setShadow(null);
          }}
        >
          Reset
        </Button>
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-foreground">Size</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleSizeChange("default")}
            className={cn(size === "default" && "bg-accent")}
          >
            Default
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleSizeChange("sm")}
            className={cn(size === "sm" && "bg-accent")}
          >
            Medium
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleSizeChange("lg")}
            className={cn(size === "lg" && "bg-accent")}
          >
            Large
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-foreground">
            Border Radius
          </span>
          <div className="flex justify-between">
            <Button
              size="icon"
              variant="outline"
              onClick={() => handleBorderRadiusChange(null)}
              className={cn(
                borderRadius === null ? "bg-accent" : "",
                "rounded-none"
              )}
            >
              0
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => handleBorderRadiusChange("sm")}
              className={cn(
                borderRadius === "sm" ? "bg-accent" : "",
                "rounded-sm"
              )}
            >
              sm
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => handleBorderRadiusChange("lg")}
              className={cn(
                borderRadius === "lg" ? "bg-accent" : "",
                "rounded-lg"
              )}
            >
              lg
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => handleBorderRadiusChange("xl")}
              className={cn(
                borderRadius === "xl" ? "bg-accent" : "",
                "rounded-xl"
              )}
            >
              xl
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-foreground">Shadow</span>
          <Switch
            checked={shadow === "md" ? true : false}
            onCheckedChange={
              shadow === "md"
                ? () => handleShadowChange(null)
                : () => handleShadowChange("md")
            }
          />
        </div>
      </aside>
      <section className="sticky top-0 flex justify-center items-center h-screen">
        <div className={cn(loginVariants({ size, borderRadius, shadow }))}>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-lg font-medium text-black dark:text-white">
              Welcome Back
            </span>
            <p className="text-base font-normal text-center text-slate-600 dark:text-slate-200">
              Enter your credentials below to access your account
            </p>
          </div>
          <form className="w-full flex flex-col gap-2">
            <label
              htmlFor="text-input"
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
              htmlFor="password-input"
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
          <span className="text-base font-normal text-center text-slate-600 dark:text-slate-200">
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
              Facebook
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
      </section>
    </main>
  );
}
