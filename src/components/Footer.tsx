import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="resume" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="border-2 border-border shadow-retro bg-background">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
          <div className="bg-background p-6 sm:p-8 border-r border-b border-border md:[&:nth-child(3n)]:border-r-0 md:last:border-b-0">
            <p className="font-mono text-muted-foreground mb-4 text-xs sm:text-sm">// GET IN TOUCH</p>
            
            <p className="text-muted-foreground text-sm sm:text-base">
              Let's build something amazing together.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              Contact
            </p>
            <a
              href="mailto:nirajkkamal@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>nirajkkamal@gmail.com</span>
            </a>
            <p className="text-muted-foreground text-sm sm:text-base">
              Phone +1 404 449 9773
            </p>
          </div>
          <div className="bg-background p-6 sm:p-8 border-r border-b border-border md:[&:nth-child(3n)]:border-r-0 md:last:border-b-0">
            <p className="font-mono text-muted-foreground mb-4 text-xs sm:text-sm">// CONNECT</p>
            
            <div className="flex gap-3 sm:gap-4">
              <a
                  href="https://github.com/nirajkamal"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a><a
                  href="https://www.linkedin.com/in/niraj-kamal-k-31687212a"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a><a
                  href="https://twitter.com/nirajkamalk"
                  aria-label="Twitter"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a><a
                  href="mailto:nirajkkamal@gmail.com"
                  aria-label="Mail"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
            </div>
          </div>
          <div className="bg-background p-6 sm:p-8 border-r border-b border-border md:[&:nth-child(3n)]:border-r-0 md:last:border-b-0">
            <p className="font-mono text-muted-foreground mb-4 text-xs sm:text-sm">// COPYRIGHT</p>
            
            <p className="text-muted-foreground text-sm sm:text-base">
              © 2025 Niraj Kamal Karunanidhi. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
