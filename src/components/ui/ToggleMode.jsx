"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const dark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled={true}>
        <SunIcon />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(`${dark ? "light" : "dark"}`);
      }}
      className={!dark && "border-gray-300"}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ToggleMode;
