import LandingFooterLinks from "./LandingFooterLinks";

//add the "container" div in case you use the component in full page and you need the background to fill the entire width and the content start with the 'container' styles

function LandingFooter() {
  return (
    <footer className="bg-black px-10 pt-12 text-white lg:pt-24 dark:bg-white dark:text-black">
      {/* <div className="container"> */}
      <div className="grid">
        <p className="font-Inter col-span-full mb-10 text-center text-xl font-semibold md:text-[32px] md:leading-[38px]">
          Get in touch and started to up your business
          <br />
          with our Company
        </p>
      </div>
      <hr className="mt-6 block h-[1px] border-0 border-t border-white/10 pb-6 text-white/10 dark:border-black/10 dark:text-black/10" />
      <LandingFooterLinks />
      {/* </div> */}
    </footer>
  );
}

export default LandingFooter;
