"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark";

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme(`${dark ? "light" : "dark"}`);
        }}
        className={!dark && "border-gray-300"}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
};

export default ToggleMode;
