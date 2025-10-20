import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-8">
      <div className="section-header bg-background p-6">
        <div className="mb-4 border-b-2 border-border pb-4">
          <p className="font-mono">// TABLE OF CONTENTS</p>
        </div>
        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-sm text-left w-full py-1 px-2 border-l-2 transition-colors ${
                    activeId === item.id
                      ? "border-foreground bg-secondary font-semibold"
                      : "border-border hover:border-foreground hover:bg-secondary"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
