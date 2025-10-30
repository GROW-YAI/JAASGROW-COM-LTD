import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import About from "./pages/Products";
import Hero from "./pages/Hero";
import AboutServices from "./pages/AboutServices";
// import AboutOwner from "./pages/AboutOwner";
import Products from "./pages/Products";
import Testimonials from "./components/Testimonials";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* Global Scroll Behavior */}
        <ScrollToTopOnRouteChange />
        <RootLayout />
        {/* Floating Scroll-to-Top Button */}
        <ScrollToTopButton />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "hero", element: <Hero /> },
      { path: "about", element: <AboutServices /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "testimonials", element: <Testimonials /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

