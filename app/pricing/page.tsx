"use client";

import { createRef, useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { handleCopyHTML, handleCopyJSX } from "@/lib/handles";
import { Input } from "@/components/ui/input";

const pricingVariants = cva(
  "bg-white dark:bg-black border border-gray-300 dark:border-zinc-700 flex flex-col gap-5 justify-center items-center p-4",
  {
    variants: {
      size: {
        default: "w-[200px] py-2 h-auto",
        sm: "w-[225px] py-5 h-auto",
        lg: "w-[250px] py-5 h-auto",
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
      plan: {
        plana: "bg-accent text-white",
        planb: "bg-white text-black",
        planc: "bg-gray-800 text-white",
      },
    },
    defaultVariants: {
      size: "default",
      borderRadius: "none",
      shadow: "none",
    },
  }
);

export default function PricingPage() {
  const myRef = createRef<HTMLDivElement>();
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [size, setSize] = useState<"default" | "sm" | "lg">("default");
  const [borderRadius, setBorderRadius] = useState<"none" | "sm" | "lg" | "xl">(
    "none"
  );
  const [shadow, setShadow] = useState<"none" | "md">("none");
  const [selectedPlan, setSelectedPlan] = useState<"plana" | "planb" | "planc">(
    "planb"
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

  const handlePlanChange = (newPlan: "plana" | "planb" | "planc") => {
    setSelectedPlan(newPlan);
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
    <main className="grid grid-cols-[300px_1fr] transitions">
      <aside className="container col-span-1 border-r flex flex-col gap-5 py-5">
        <Button
          size="sm"
          onClick={() => {
            setSize("default");
            setBorderRadius("none");
            setShadow("none");
            setSelectedPlan("planb");
          }}
        >
          Reset
        </Button>
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium text-foreground">
            Border Radius
          </span>
          <div className="flex justify-between">
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
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium text-foreground">Shadow</span>
          <Switch
            checked={shadow === "md" ? true : false}
            onCheckedChange={
              shadow === "md"
                ? () => handleShadowChange("none")
                : () => handleShadowChange("md")
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium text-foreground">
            Best Plan
          </span>{" "}
          <div className="flex justify-start gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() => handlePlanChange("plana")}
              className={cn(selectedPlan === "plana" ? "bg-accent" : "")}
            >
              A
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => handlePlanChange("planb")}
              className={cn(selectedPlan === "planb" ? "bg-accent" : "")}
            >
              B
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => handlePlanChange("planc")}
              className={cn(selectedPlan === "planc" ? "bg-accent" : "")}
            >
              C
            </Button>
          </div>
        </div>
      </aside>
      <section
        ref={myRef}
        className="sticky top-0 flex justify-center items-center h-screen overflow-hidden"
      >
        <section className="relative flex flex-wrap gap-5 justify-center items-center">
          <div
            className={cn(
              pricingVariants({
                size,
                borderRadius,
                shadow,
              }),
              selectedPlan === "plana"
                ? "scale-110 border-2 border-blue-700 dark:border-blue-700"
                : ""
            )}
          >
            <span className="text-lg font-medium text-black dark:text-white">
              Plan A
            </span>
            <p className="text-3xl font-normal text-center text-slate-600 dark:text-slate-200">
              $0.00
            </p>
            <ul className="w-full flex flex-col gap-2">
              <li className="text-sm text-black dark:text-white">
                Complete access.
              </li>
              <li className="text-sm text-black dark:text-white">
                Unlimited cloud storage.
              </li>
              <li className="text-sm text-black dark:text-white">
                24/7 customer support.
              </li>
            </ul>
            <button
              className={`px-4 py-2 w-full text-sm font-medium text-white dark:text-white rounded-${borderRadius} bg-blue-700 dark:bg-blue-700 border-black dark:border-white hover:scale-105 hover:bg-black hover:dark:bg-white hover:dark:text-black`}
            >
              Select
            </button>
          </div>
          <div
            className={cn(
              pricingVariants({
                size,
                borderRadius,
                shadow,
              }),
              selectedPlan === "planb"
                ? "scale-110 border-2 border-blue-700 dark:border-blue-700"
                : ""
            )}
          >
            <span className="text-lg font-medium text-black dark:text-white">
              Plan B
            </span>
            <p className="text-3xl font-normal text-center text-slate-600 dark:text-slate-200">
              $9.99
            </p>
            <ul className="w-full flex flex-col gap-2">
              <li className="text-sm text-black dark:text-white">
                Complete access.
              </li>
              <li className="text-sm text-black dark:text-white">
                Unlimited cloud storage.
              </li>
              <li className="text-sm text-black dark:text-white">
                24/7 customer support.
              </li>
            </ul>
            <button
              className={`px-4 py-2 w-full text-sm font-medium text-white dark:text-white rounded-${borderRadius} bg-blue-700 dark:bg-blue-700 border-black dark:border-white hover:scale-105 hover:bg-black hover:dark:bg-white hover:dark:text-black`}
            >
              Select
            </button>
          </div>
          <div
            className={cn(
              pricingVariants({
                size,
                borderRadius,
                shadow,
              }),
              selectedPlan === "planc"
                ? "scale-110 border-2 border-blue-700 dark:border-blue-700"
                : ""
            )}
          >
            <span className="text-lg font-medium text-black dark:text-white">
              Plan c
            </span>
            <p className="text-3xl font-normal text-center text-slate-600 dark:text-slate-200">
              $19.99
            </p>
            <ul className="w-full flex flex-col gap-2">
              <li className="text-sm text-black dark:text-white">
                Complete access.
              </li>
              <li className="text-sm text-black dark:text-white">
                Unlimited cloud storage.
              </li>
              <li className="text-sm text-black dark:text-white">
                24/7 customer support.
              </li>
            </ul>
            <button
              className={`px-4 py-2 w-full text-sm font-medium text-white dark:text-white rounded-${borderRadius} bg-blue-700 dark:bg-blue-700 border-black dark:border-white hover:scale-105 hover:bg-black hover:dark:bg-white hover:dark:text-black`}
            >
              Select
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
