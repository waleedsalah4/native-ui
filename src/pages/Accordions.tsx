import treeData from "@/constants/tree-nodes.json";
import CheckboxesTree from "@/components/checkboxes-tree/CheckboxesTree";
import BasicAccordion from "@/components/accordions/BasicAccordion";
import InteractiveAccordion from "@/components/accordions/InteractiveAccordion";
import InteractiveAccordion2, {
  AccordionItem,
} from "@/components/accordions/InteractiveAccordion2";

function Accordions() {
  return (
    <section className="container my-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Checkboxes Tree</h1>
        <CheckboxesTree data={treeData} name="categories" />
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Basic Accordion</h1>
        <div className="rounded-lg bg-gray-200 p-4">
          <BasicAccordion
            title="Do you prefer Android or iOS"
            answer="I like to use iOS products"
          />
          <BasicAccordion
            title="Do you prefer writing CSS or Tailwind?"
            answer="I like to use Tailwind"
          />
          <BasicAccordion
            title="Firebase or Supabase?"
            answer="I am using Supabase!"
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Interactive Accordion</h1>
        <div className="rounded-lg bg-gray-200 p-4">
          <InteractiveAccordion />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">
          #Interactive Accordion with different Implementation
        </h1>
        <div className="rounded-lg bg-gray-200 p-4">
          {/* value={null} ==> initial value = null all the items will be collapsed */}
          <InteractiveAccordion2 value={null}>
            <AccordionItem value="1" trigger="Item 1">
              Lorem ipsum dolor sit, consectetur .
            </AccordionItem>
            <AccordionItem value="2" trigger="Item 2">
              Lorem ipsum dolor sit, consectetur.
            </AccordionItem>
            <AccordionItem value="3" trigger="Item 3">
              Lorem ipsum dolor sit, consectetur.
            </AccordionItem>
          </InteractiveAccordion2>
        </div>
      </div>
    </section>
  );
}

export default Accordions;
