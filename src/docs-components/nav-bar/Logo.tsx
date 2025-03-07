"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "light" ? "/native.svg" : "/native-white.svg"}
      // src={"/native.svg"}
      alt="logo"
      width={100}
      height={50}
      className="pl-2"
    />
  );
};

export default Logo;
