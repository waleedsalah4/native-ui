"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "light" ? "/native.svg" : "/native-white.svg"}
      // src={"/native.svg"}
      alt="logo"
      width={100}
      height={50}
      className={cn("pl-2", className)}
    />
  );
};

export default Logo;
