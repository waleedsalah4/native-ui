import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "@/layout/Layout";
import Navbars from "@/pages/Navbars";
import Footers from "@/pages/Footers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<div>home page</div>} />
      <Route path="/navbars" element={<Navbars />} />
      <Route path="/footers" element={<Footers />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
