import Link from "next/link";
import InteractiveAccordion2, {
  AccordionItem,
} from "@/components/accordions/InteractiveAccordion2";
import links from "@/constants/footer-links.json";
import LandingSocialMediaIcons from "./LandingSocialMediaIcons";
import Image from "next/image";

function LandingFooterLinks() {
  return (
    <div>
      <div className="hidden justify-between gap-4 py-8 md:flex">
        <div className="grid justify-center md:justify-start">
          <div className="grid justify-center text-center md:justify-start">
            <Image
              src={"/logo.webp"}
              alt="logo"
              height={112}
              width={96}
              className="h-16 w-20 md:h-24 md:w-28"
            />
          </div>
          <p className="mt-4 max-w-xs text-center text-sm text-gray-600 md:text-start">
            Stands as an influential and <br /> integrated conglomerate
          </p>
          <LandingSocialMediaIcons />
        </div>
        <div className="font-Inter flex flex-wrap items-start gap-12">
          {links.footerLinks.map((link) => (
            <div key={link.id} className="flex flex-col gap-4">
              <p className="font-semibold text-white/80 dark:text-black">
                {link.name}
              </p>
              <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                {link.urls.map((url) => (
                  <Link
                    className="font-medium text-white hover:opacity-75 dark:text-black"
                    href={url.href}
                    key={url.id}
                  >
                    {url.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 md:hidden">
        {links.footerLinks.map((link, index) => (
          <InteractiveAccordion2 value={null} key={`${link.name}-${index}`}>
            <AccordionItem
              value={`item-${index + 1}`}
              trigger={
                <p className="font-semibold text-white/80">{link.name}</p>
              }
            >
              <ul className="flex flex-col gap-y-2">
                {link.urls.map((url) => (
                  <Link
                    key={url.name}
                    href={url.href}
                    className="font-medium text-white hover:opacity-75 dark:text-black"
                  >
                    {url.name}
                  </Link>
                ))}
              </ul>
            </AccordionItem>
          </InteractiveAccordion2>
        ))}
        <div className="mb-4 grid justify-center md:justify-start">
          <div className="grid justify-center text-center md:justify-start">
            <Image
              src={"/logo.webp"}
              alt="logo"
              height={112}
              width={96}
              className="h-16 w-20 md:h-24 md:w-28"
            />
          </div>
          <p className="mt-4 max-w-xs text-center text-sm text-gray-600 md:text-start">
            Stands as an influential and <br /> integrated conglomerate
          </p>
          <LandingSocialMediaIcons />
        </div>
      </div>
      <hr className="block h-[1px] border-0 border-t border-white/10 text-white/10 dark:border-black/10 dark:text-black/10" />
      <div className="flex flex-col-reverse items-center justify-between gap-2 py-4 md:flex-row">
        <p className="self-start text-sm text-white/80 dark:text-black">
          © {new Date().getFullYear()} Company
        </p>
        <div className="font-Inter flex w-full items-center justify-between gap-10 text-sm md:w-auto">
          {links.termsLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="text-white/80 dark:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingFooterLinks;
