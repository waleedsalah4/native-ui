import AboutUs from "@/docs-components/home/about-us/AboutUs";
import Technologies from "@/docs-components/home/technologies/Technologies";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="container flex min-h-screen flex-1 flex-col justify-center text-center">
        <div className="flex flex-col justify-center space-y-10 text-center">
          <div className="space-y-8">
            <h1 className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl dark:from-white dark:to-gray-500">
              Welcome to our humble UI Components documentation
            </h1>
            <p className="mx-auto max-w-[600px] text-zinc-900 md:text-xl dark:text-zinc-100">
              Custom ui components and hooks for rapid development, with base
              design that it&#39;s easy to customize to your&#39;s
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              href="/docs/getting-started"
              className="rounded-full bg-[linear-gradient(135deg,rgba(15,27,175,0.3),rgba(230,29,29,0.68))] px-8 py-4 font-mono text-sm text-white shadow-lg md:text-xl dark:bg-[linear-gradient(135deg,rgba(235,54,127,0.3),rgba(121,40,202,0.3))] dark:text-zinc-100"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
      <AboutUs />
      {/* <Technologies /> */}
    </div>
  );
}
