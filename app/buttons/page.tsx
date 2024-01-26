"use client";

import { handleCopyJSX } from "@/lib/handles";
import { createRef, useEffect, useState } from "react";
import { toast } from "sonner";

export default function ButtonsPage() {
  const buttons = [
    {
      classes:
        "px-4 py-2 h-10 w-auto bg-black dark:bg-white text-white dark:text-black rounded-md shadow-sm hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 ease-in-out text-base font-medium",
    },
    {
      classes:
        "px-4 py-2 h-10 w-auto bg-white dark:bg-black text-black dark:text-white rounded-md shadow-sm border border-bg-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-black transition-all duration-300 ease-in-out text-base font-medium",
    },
  ];

  const myRefs = buttons.map(() => createRef<HTMLDivElement>());
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    setHtml(myRefs.map((ref) => ref.current?.innerHTML || "").join("\n"));
  }, [myRefs]);

  const copyJSX = (index: number) => {
    const copy = handleCopyJSX(myRefs[index].current);
    if (copy.success) {
      toast.success(copy.success);
    } else {
      toast.error(copy.error);
    }
  };
  return (
    <main className="p-4 size-full">
      <section className="size-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-start gap-10 transitions">
        {buttons.map((button, index) => {
          return (
            <div
              key={index}
              ref={myRefs[index]}
              className="relative w-full min-h-40 flex justify-center items-center p-4"
            >
              <button className={button.classes} onClick={() => copyJSX(index)}>
                Click to copy
              </button>
            </div>
          );
        })}
      </section>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:100px_100px] opacity-10 dark:opacity-50"></div>
    </main>
  );
}
