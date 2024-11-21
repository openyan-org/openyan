"use client";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { FaAsterisk } from "react-icons/fa";
import NavItems from "./nav-items";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-8 w-8 hover:cursor-pointer hover:text-zinc-300" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        <div className="flex items-center">
          <FaAsterisk className="mr-2 text-2xl" />
          <SheetTitle className="text-2xl">OpenYan</SheetTitle>
        </div>
        <NavItems />
      </SheetContent>
    </Sheet>
  );
}
