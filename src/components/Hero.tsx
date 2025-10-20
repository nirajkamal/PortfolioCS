import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "../assets/Niraj_Photo.png";
import companyLogo0 from "../assets/Mercedes_logo.png";
import companyLogo2 from "../assets/snaptrude_logo.jpeg";
import eduLogo0 from "../assets/georgia_tech_logo.png";
import eduLogo1 from "../assets/iit_roorkee_logo.png";
import eduLogo2 from "../assets/tu_dresden_logo.png";

export function Hero() {
  const companies = [
    {
        "name": "Mercedes-Benz Research",
        "logo": companyLogo0
    },
    {
        "name": "IBM Research",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png"
    },
    {
        "name": "Snaptrude",
        "logo": companyLogo2
    },
    {
        "name": "Uniacco",
        "logo": "https://uniacco.imgix.net/site-static/v2/uniacco/logo_full.svg"
    }
];
  const education = [
    {
        "name": "Georgia Tech",
        "logo": eduLogo0
    },
    {
        "name": "IIT Roorkee",
        "logo": eduLogo1
    },
    {
        "name": "TU Dresden",
        "logo": eduLogo2
    }
];

  return (
    <section id="hero" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Grid container */}
        <div className="border-2 border-border shadow-retro bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column - Photo */}
            <div className="lg:col-span-4 bg-background p-6 sm:p-12 flex items-center justify-center border-r border-b border-border lg:border-b-0">
            <div className="w-48 h-48 rounded-sm overflow-hidden border-2 border-border">
              <img
                src={profilePhoto}
                alt="Niraj Kamal Karunanidhi"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>

            {/* Right Column - Name and Info */}
            <div className="lg:col-span-8 bg-background p-6 sm:p-12">
            <div className="space-y-8">
              <div>
                <h1 className="mb-6 font-bold text-3xl md:text-4xl lg:text-5xl">Niraj Kamal Karunanidhi</h1>
                <p className="text-muted-foreground mb-8">
                  MSCS @ Georgia Tech | AI & Deep Learning
                </p>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: "MS in Computer Science at Georgia Tech. Passionate about <span style='color: #ff6b3d;'>LLM Development</span>, Autonomous Driving, and <span style='color: #ff6b3d;'>High-Performance Computing</span>. Specialized in PyTorch and CUDA." }} />
              </div>

              {/* Combined logos section */}
              <div className="-mx-6 sm:-mx-12 px-6 sm:px-12 border-t border-border pt-8">
                <p className="font-mono text-muted-foreground mb-4">// WORKED WITH</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                  {[...companies, ...education].map((item) => (
                    <div
                      key={item.name}
                      className="p-4 flex flex-col items-center justify-center gap-3 text-center"
                    >
                      {item.logo && (
                        <ImageWithFallback
                          src={item.logo}
                          alt={item.name}
                          className="h-12 w-auto object-contain grayscale opacity-70 mx-auto"
                        />
                      )}
                      <span className="font-mono text-muted-foreground text-xs text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
