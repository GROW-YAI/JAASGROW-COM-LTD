import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Automatically scrolls the page to the top
 * whenever the route/path changes.
 */
export default function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null; // No visible UI
}
