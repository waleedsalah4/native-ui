import Image from "next/image";
import { Linkedin } from "lucide-react";

export default {
  logo: (
    <>
      <div className="flex items-center gap-4">
        <Image
          src="/logo.webp"
          alt="LGA logo"
          width={55}
          height={40}
          className="pl-2"
        />
        <span>Hooks/UI</span>
      </div>
    </>
  ),
  project: {
    link: "https://github.com/waleedsalah4/reusable-components",
  },
  chat: {
    link: "https://www.linkedin.com/in/waleed-salah-9b4a541b4",
    icon: <Linkedin />,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="HOOKS/UI" />
      <meta
        property="og:description"
        content="HOOKS/UI is a small custom ui and hooks documentation"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – hooks/UI",
    };
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: <span>{new Date().getFullYear()} © Waleed Salah.</span>,
  },
  // ... other theme options
};
