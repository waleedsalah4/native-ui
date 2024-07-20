import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import links from "@/constants/links.json";
import ReactLogo from "@/assets/react.svg";

const MobileMenu = ({
  pathname,
  closeMenu,
}: {
  pathname: string;
  closeMenu: () => void;
}) => {
  return (
    <div className="absolute left-0 top-16 z-50 flex w-full flex-col items-center gap-y-9 rounded-2xl bg-[#181919] px-4 py-12 md:hidden">
      <img src={ReactLogo} alt="logo" width={55} height={40} />
      <ul className="flex flex-col gap-y-9">
        {links.navLinks.map((link) => (
          <li
            key={link.id}
            className={cn("text-xl font-medium text-white", {
              "text-green-800": pathname.includes(link.href),
            })}
          >
            <Link to={link.href} onClick={closeMenu}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/"
        onClick={closeMenu}
        className="h-10 rounded-full bg-white px-4 py-2 text-sm font-bold text-foreground"
      >
        Contact Us
      </Link>
    </div>
  );
};

function GlassyNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setOpenMenu(false);
  }

  useEffect(() => {
    if (window.scrollY > 0) setIsScrolled(true);
    const handleScroll = () => {
      // Throttle the scroll event using requestAnimationFrame
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 0;
        setIsScrolled(isScrolled);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "container sticky top-4 z-50 transition-all duration-500 ease-in-out",
        {
          "top-2": isScrolled,
        }
      )}
    >
      <div
        className={cn(
          "relative mx-0 flex items-center justify-between gap-2 rounded-full border border-primary bg-white p-2 text-sm font-medium",
          {
            "scrolled-navbar": isScrolled,
          }
        )}
      >
        <nav className="flex items-center gap-x-4 pl-2">
          <Link to="/">
            <img
              src={ReactLogo}
              alt="LGA logo"
              width={55}
              height={40}
              className="pl-2"
            />
          </Link>
          <ul className="hidden items-center gap-x-4 md:flex">
            {links.navLinks.map((link) => (
              <li
                key={link.id}
                className={cn("text-foreground", {
                  "primary-btn rounded-full bg-primary px-2 py-2 text-primary-foreground lg:px-4":
                    location.pathname.includes(link.href),
                })}
              >
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 pr-2 md:flex">
          <Link
            to="/"
            className="primary-btn font-apercu-pro h-10 rounded-full bg-primary px-4 py-2 text-center text-sm font-bold leading-relaxed text-primary-foreground"
          >
            Contact us
          </Link>
        </div>
        <button
          type="button"
          aria-label="toggle navigation bar menu"
          className="primary-btn flex flex-col items-center justify-center rounded-[96px] bg-primary px-4 py-2 md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <BurgerMenu isOpen={openMenu} />
        </button>

        {openMenu && (
          <MobileMenu closeMenu={closeMenu} pathname={location.pathname} />
        )}
      </div>
    </header>
  );
}

export default GlassyNavbar;

function BurgerMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <span
        className={cn(
          "ease my-0.5 h-0.5 w-4 transform rounded-full bg-white font-thin transition duration-300",
          {
            "translate-y-1.5 rotate-45": isOpen,
          }
        )}
      />
      <span
        className={cn(
          "ease my-0.5 h-0.5 w-4 transform rounded-full bg-white font-thin transition duration-300",
          { "opacity-0": isOpen }
        )}
      />
      <span
        className={cn(
          "ease my-0.5 h-0.5 w-4 transform rounded-full bg-white font-thin transition duration-300",
          {
            "-translate-y-1.5 -rotate-45": isOpen,
          }
        )}
      />
    </>
  );
}
