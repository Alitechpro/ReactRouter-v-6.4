import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AboutUs, ContactUs, Home, User } from "../index";
import Layout from "../../Layout";
import Github from "../Github/Github";
import { githubInfoLoader } from "../Github/loader";

// 1st Way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

// 2nd Way to create BrowserRouter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <AboutUs />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

export default router;
