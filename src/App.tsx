import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "@/layout/Layout";
import Navbars from "@/pages/Navbars";
import Footers from "@/pages/Footers";
import Home from "./pages/Home";
import Accordions from "./pages/Accordions";
import Calendars from "./pages/Calendars";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/accordions" element={<Accordions />} />
      <Route path="/calendars" element={<Calendars />} />
      <Route path="/navbars" element={<Navbars />} />
      <Route path="/footers" element={<Footers />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
