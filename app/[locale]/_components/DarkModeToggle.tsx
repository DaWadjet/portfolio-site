"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FC } from "react";

const DarkModeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-11 relative transition-all">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-100 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem]  transition-all scale-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-28 min-w-28">
        <DropdownMenuCheckboxItem
          onClick={() => setTheme("light")}
          checked={theme === "light"}
        >
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => setTheme("dark")}
          checked={theme === "dark"}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => setTheme("system")}
          checked={theme === "system"}
        >
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkModeToggle;
