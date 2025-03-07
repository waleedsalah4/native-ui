import Image from "next/image";
import Link from "next/link";
const links = [
  {
    id: 1,
    name: "Documentation",
    href: "/docs",
  },
];

function Header() {
  return (
    <header className="sticky top-4 z-50">
      <div className="glassy-navbar relative mx-4 flex items-center justify-between gap-2 rounded-full p-2 text-sm font-medium">
        <nav className="flex items-center gap-x-4 pl-2">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="logo"
              width={55}
              height={40}
              className="pl-2"
            />
          </Link>
          <ul className="flex items-center gap-x-4">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-foreground bg-primary rounded-full px-2 py-2 text-[#F8FAFC] lg:px-4"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact-us"
          className="h-10 rounded-full bg-[#6f606633] px-4 py-2 text-center text-sm font-bold leading-relaxed text-[#F8FAFC] shadow-md"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}

export default Header;
