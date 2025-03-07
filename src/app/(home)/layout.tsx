import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      className="dark:bg-[linear-gradient(to_top,#000_0%,hsla(0,0%,100%,0)_100%),linear-gradient(90deg,#eb367f33_0,rgb(121_40_202/0.2)_100%)] dark:bg-[size:100%_100%,100%_100%,1440px_1px] dark:bg-bottom dark:bg-no-repeat"
    >
      {children}
    </HomeLayout>
  );
}
