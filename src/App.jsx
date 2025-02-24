import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/Products";
import Hero from "./pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // This wraps all the child routes
    children: [
      { index: true, element: <Home /> }, // Default homepage
      { path: "hero", element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
