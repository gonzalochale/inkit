import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Star, Twitter } from "lucide-react";
import SideBarLinks from "./side-bar-links";

export default function MobileNav() {
  return (
    <div className="lg:hidden py-5 h-20 bg-background container border-b flex justify-start items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="stroke-1" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-5">
          <SheetHeader>
            <SheetTitle>InKit</SheetTitle>
            <SheetDescription>
              Create free Copy-Paste Tailwind CSS components for your next
              project
            </SheetDescription>
          </SheetHeader>
          <SideBarLinks />
          <SheetFooter>
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
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
