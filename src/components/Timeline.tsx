interface TimelineItem {
  period: string;
  content: string | JSX.Element;
  featured?: boolean;
}

export function Timeline() {
  const timelineItems: TimelineItem[] = [
    {
        "period": "2026 (Expected)",
        "content": "MSCS Specializing in <span style='color: #ff6b3d;'>Machine Learning</span>, NLP, and High-Performance Computing with GPUs.",
        "featured": true
    },
    {
        "period": "August 2025",
        "content": "Delivered <span style='color: #ff6b3d;'>Lightning Talk</span> on \"Pytorch and Foundation Models\" at Georgia Tech Dev-Day in Klaus Research wing, hosted by IBM.",
        "featured": false
    },
    {
        "period": "2022 - 2024",
        "content": "Led development of a proprietary <span style='color: #ff6b3d;'>Large Language Model</span> for code generation and built ADAS validation simulations.",
        "featured": false
    },
    {
        "period": "March 2025",
        "content": "Delivered a <span style='color: #ff6b3d;'>Tech Talk</span> on \"<span style='color: #ff6b3d;'>Autonomous Driving</span> and <span style='color: #ff6b3d;'>Data Science</span>\" to IIT Roorkee's Mehta Family School of Data Science.",
        "featured": false
    },
    {
        "period": "May 2025 - Aug 2025",
        "content": "Contributed to PyTorch and IBM's <span style='color: #ff6b3d;'>Foundation Models Stack</span>, enhancing attention mechanisms.",
        "featured": true
    },
    {
        "period": "March 2024",
        "content": "Delivered a <span style='color: #ff6b3d;'>Keynote</span> titled \"<span style='color: #ff6b3d;'>Driving the Autonomous Future</span>\" at Cognizance (IIT Roorkee), covering advances in <span style='color: #ff6b3d;'>Autonomous Driving</span>, perception, and real\u00e2\u20ac\u2018world deployment challenges.",
        "featured": false
    },
    {
        "period": "2018",
        "content": "Gold Medalist in Inter-IIT Tech Meet for <span style='color: #ff6b3d;'>Computer Vision</span> and focused on computational graphics.",
        "featured": false
    }
];

  return (
    <section id="timeline" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 inline-block border-2 border-border px-4 sm:px-6 py-3 sm:py-4 bg-background">
          <p className="font-mono text-muted-foreground mb-2 text-xs sm:text-sm">TIMELINE</p>
          <h2 className="font-bold">Professional Journey</h2>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="flex gap-3 sm:gap-6">
          {/* Static vertical line with dots */}
          <div className="relative flex-shrink-0 w-6 sm:w-8">
            <div className="absolute left-1.5 sm:left-2 top-0 bottom-0 w-px bg-foreground/40"></div>
            {timelineItems.map((_, index) => (
              <div
                key={index}
                className="relative h-20 sm:h-24 flex items-center"
              >
                {/* Square dot */}
                <div className="absolute left-[2px] sm:left-[2px] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-foreground border-2 border-background z-10"></div>
              </div>
            ))}
          </div>

          {/* Scrollable content */}
          <div className="flex-1 border-2 border-border bg-background max-h-[600px] overflow-y-auto">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-6 border-b border-border last:border-b-0"
              >
                {/* Content */}
                <p className="text-sm sm:text-base">
                  <strong>{item.period}</strong> <span dangerouslySetInnerHTML={{ __html: item.content }} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
