import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import links from "@/constants/links.json";
import LandingSocialMediaIcons from "./LandingSocialMediaIcons";
import reactLogo from "@/assets/react.svg";

function FooterLinks() {
  return (
    <div>
      <div className="hidden justify-between gap-4 py-8 md:flex">
        <div className="grid justify-center md:justify-start">
          <div className="grid justify-center text-center md:justify-start">
            <img
              src={reactLogo}
              alt="logo"
              className="h-16 w-20 md:h-24 md:w-28"
            />
          </div>
          <p className="mt-4 max-w-xs text-center text-sm text-gray-600 md:text-start">
            Stands as an influential and <br /> integrated conglomerate
          </p>
          <LandingSocialMediaIcons />
        </div>
        <div className="flex flex-wrap items-start gap-12 font-Inter">
          {links.footerLinks.map((link) => (
            <div key={link.id} className="flex flex-col gap-4">
              <p className="font-semibold text-white/80">{link.name}</p>
              <nav className="flex flex-col space-y-2 text-sm text-gray-500">
                {link.urls.map((url) => (
                  <Link
                    className="font-medium text-white hover:opacity-75"
                    to={url.href}
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
          <Accordion type="single" collapsible key={`${link.name}-${index}`}>
            <AccordionItem value={`item-${index + 1}`} className="border-b-0">
              <AccordionTrigger className="hover:no-underline">
                <p className="font-semibold text-white/80">{link.name}</p>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-y-2">
                  {link.urls.map((url) => (
                    <Link
                      key={url.name}
                      to={url.href}
                      className="font-medium text-white hover:opacity-75"
                    >
                      {url.name}
                    </Link>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        <div className="mb-4 grid justify-center md:justify-start">
          <div className="grid justify-center text-center md:justify-start">
            <img
              src={reactLogo}
              alt="logo"
              className="h-16 w-20 md:h-24 md:w-28"
            />
          </div>
          <p className="mt-4 max-w-xs text-center text-sm text-gray-600 md:text-start">
            Stands as an influential and <br /> integrated conglomerate
          </p>
          <LandingSocialMediaIcons />
        </div>
      </div>
      <hr className="block h-[1px] border-0 border-t border-white/10 text-white/10" />
      <div className="flex flex-col-reverse items-center justify-between gap-2 py-4 md:flex-row">
        <p className="self-start text-sm text-white/80">
          © {new Date().getFullYear()} Company
        </p>
        <div className="flex w-full items-center justify-between gap-10 font-Inter text-sm md:w-auto">
          {links.termsLinks.map((link) => (
            <Link to={link.href} key={link.id} className="text-white/80">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
