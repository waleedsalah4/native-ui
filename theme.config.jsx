import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useTheme } from "nextra-theme-docs";

const Logo = () => {
  const { theme } = useTheme();
  // console.log(theme);
  return (
    <Image
      src={theme === "light" ? "/logo-black.svg" : "/logo-white.svg"}
      alt="logo"
      width={100}
      height={50}
      className="pl-2"
    />
  );
};

export default {
  logo: <Logo />,

  project: {
    link: "https://github.com/waleedsalah4/native-ui",
  },
  chat: {
    link: "https://www.linkedin.com/in/waleed-salah-9b4a541b4",
    icon: <Linkedin />,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Native ui" />
      <meta
        property="og:description"
        content="Native ui is a small custom ui and hooks documentation"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Native Ui",
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
