"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TextAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay initialization slightly to ensure DOM is fully painted after route change
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("text-animate-trigger");
              observer.unobserve(entry.target); // Animate only once
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      // Select all headings, paragraphs, and any existing wow elements
      const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, .wow");
      
      elements.forEach((el) => {
        // Skip elements that shouldn't be animated (e.g., inside header to avoid weird layout shifts)
        if (el.closest('header')) return;
        
        if (!el.classList.contains("text-animate-init")) {
          el.classList.add("text-animate-init");
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
