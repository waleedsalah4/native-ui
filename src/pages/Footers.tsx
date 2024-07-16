import BasicFooter from "@/components/footers/BasicFooter";
import LandingFooter from "@/components/footers/landing-footer/LandingFooter";

function Footers() {
  return (
    <section className="container mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Basic Footer</h1>
        <BasicFooter />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Landing page Footer</h1>
        <LandingFooter />
      </div>
    </section>
  );
}

export default Footers;
