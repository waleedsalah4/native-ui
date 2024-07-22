import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-[url('/bg.webp')] bg-cover bg-no-repeat">
        <div className="h-screen w-full bg-gradient-to-br from-black to-black/40 bg-no-repeat py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="grid items-center gap-6">
              <div className="flex flex-col justify-center space-y-10 text-center">
                <div className="space-y-8">
                  <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                    Welcome to our humble UI Components documentation
                  </h1>
                  <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100">
                    Custom ui components and hooks for rapid development, with
                    base design that it's easy to customize to your's
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <Link
                    href="/docs/getting-started"
                    className="rounded-md bg-gradient-to-br from-white to-white/40 p-4 font-mono text-sm text-zinc-200 shadow-lg md:text-xl dark:from-blue-900 dark:to-black/40 dark:text-zinc-100"
                  >
                    View Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
