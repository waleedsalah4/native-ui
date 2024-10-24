import Link from "next/link";
import Image from "next/image";

const links = [
  {
    id: 1,
    name: "Documentation",
    href: "/docs/getting-started",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      <div className="home-bg min-h-screen">
        <header className="sticky top-4 z-50">
          <div className="glassy-navbar relative mx-4 flex items-center justify-between gap-2 rounded-full p-2 text-sm font-medium">
            <nav className="flex items-center gap-x-4 pl-2">
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width={100}
                  height={50}
                  className="pl-2"
                />
              </Link>
              <ul className="flex items-center gap-x-4">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="text-foreground bg-primary rounded-full px-2 py-2 text-base font-medium text-[#F8FAFC] lg:px-4"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/"
              className="h-10 rounded-full bg-[#6f606633] px-4 py-2 text-center text-sm font-bold leading-relaxed text-[#F8FAFC] shadow-md"
            >
              Contact us
            </Link>
          </div>
        </header>
        <main>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="px-4 md:px-6">
              <div className="grid items-center gap-6">
                <div className="flex flex-col justify-center space-y-10 text-center">
                  <div className="space-y-8">
                    <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                      Welcome to our humble UI Components documentation
                    </h1>
                    <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100">
                      Custom ui components and hooks for rapid development, with
                      basic design that it&#39;s easy to customize to your&#39;s
                    </p>
                  </div>
                  <div className="mx-auto w-full max-w-sm space-y-2">
                    <Link
                      href="/docs/getting-started"
                      className="btn-bg rounded-full px-8 py-4 font-mono text-sm text-zinc-200 shadow-lg md:text-xl dark:text-zinc-100"
                    >
                      View Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
