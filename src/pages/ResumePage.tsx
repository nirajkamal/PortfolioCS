import { Download, ExternalLink, ArrowLeft } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/shared/PageHeader";

export function ResumePage() {
  // PDF path in the public folder (served directly by Vite)
  const resumePdfPath = "/resume/Niraj_Kamal_Resume.pdf";
  
  // Option 2: Direct Overleaf link (replace with your project's read-only link)
  const overleafViewUrl = "https://www.overleaf.com/read/your-project-read-only-link";
  
  // Choose which one to use
  const useOverleafDirect = false; // Set to true to use Overleaf directly
  
  return (
    <div className="size-full relative">
      <Header />
      
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <PageHeader label="PROFESSIONAL" title="Resume" />
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={resumePdfPath}
              download="Niraj_Kamal_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-accent-orange text-accent-orange-foreground hover:opacity-80 transition-opacity font-mono text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Viewer Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="border-2 border-border bg-background">
            {/* PDF Embed */}
            <div className="p-4 border-b border-border">
              <p className="font-mono text-sm text-muted-foreground">
                // PDF VIEWER
              </p>
            </div>
            
            <div className="w-full" style={{ height: '1000px' }}>
              <iframe
                src={`${resumePdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-0"
                title="Niraj Kamal Resume"
              />
            </div>
            
            {/* Fallback for browsers that don't support PDF viewing */}
            <div className="p-8 text-center border-t border-border">
              <p className="text-muted-foreground mb-4">
                Can't see the PDF? No problem!
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={resumePdfPath}
                  download="Niraj_Kamal_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in New Tab</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Contact Info */}
            <div className="border-2 border-border bg-background p-6">
              <h3 className="font-mono text-sm text-muted-foreground mb-4">// CONTACT</h3>
              <div className="space-y-2 text-sm">
                <p>Email: nirajkamal@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Location: Atlanta, GA</p>
              </div>
            </div>

            {/* Key Skills */}
            <div className="border-2 border-border bg-background p-6">
              <h3 className="font-mono text-sm text-muted-foreground mb-4">// KEY SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Python", "Node.js", "AWS", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 border border-border font-mono text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="border-2 border-border bg-background p-6">
              <h3 className="font-mono text-sm text-muted-foreground mb-4">// EDUCATION</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Georgia Institute of Technology</p>
                <p className="text-muted-foreground">MS Computer Science</p>
                <p className="text-muted-foreground">2023-2025</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}