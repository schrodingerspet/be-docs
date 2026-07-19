"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Small timeout to ensure MDX content is fully rendered
    const timeout = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll(".prose h2, .prose h3"));
      
      const headingData: Heading[] = elements.map((elem) => {
        // Ensure element has an ID
        if (!elem.id) {
          elem.id = elem.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "";
        }
        
        return {
          id: elem.id,
          text: elem.textContent || "",
          level: parseInt(elem.tagName.substring(1))
        };
      }).filter(h => h.id && h.text);
      
      setHeadings(headingData);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (headings.length === 0) {
    return <p className="text-muted text-xs italic">No headings found.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {headings.map((heading, index) => (
        <li 
          key={index} 
          style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
        >
          <a 
            href={`#${heading.id}`}
            className="text-muted hover:text-accent transition-colors block text-sm"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
