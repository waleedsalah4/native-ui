import treeData from "@/constants/tree-nodes.json";
import CheckboxesTree from "@/components/checkboxes-tree/CheckboxesTree";
function Home() {
  return (
    <section className="container mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">#Checkboxes Tree</h1>
        <CheckboxesTree data={treeData} name="categories" />
      </div>
    </section>
  );
}

export default Home;
