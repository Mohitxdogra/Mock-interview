"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center gap-2">
      <Sun className="w-5 h-5 text-yellow-500" />
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
      <Moon className="w-5 h-5 text-gray-400" />
    </div>
  );
}
