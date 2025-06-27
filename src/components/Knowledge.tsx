
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const Knowledge = () => {
  const iconSlugs = [
  
    "javascript",
    "react",
    "nodejs",
    "python",
    "Sql",
    "mongodb",
    "amazonaws",
    "docker",
    "git",
    "Flask",
    "nextjs",
    "express",
    "tailwindcss",
    "html5",
    "css3",
    "github",
    "visualstudiocode",
    "figma",
    "vercel",
    "Pandas",
    "Power BI",
    "GitHub",



  ];

  const technologies = [
    'React', 'Node.js', 'Express', 'SQL', 'MongoDB', "Excel", "Flask", "Python", "JavaScript",
    'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Next.js', "Pandas", "Power BI", "GitHub", "HTML" 
  ];

  return (
    <section id="knowledge" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-black/30 backdrop-blur-sm relative overflow-hidden border-gray-800/50">
          <Spotlight
            className="-top-40 right-0 md:right-60 md:-top-20"
            fill="white"
          />
          
          <div className="p-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">Knowledge & Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Here are some of the technologies and skills I work with to bring ideas to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Interactive Icon Cloud */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-200 mb-8"></h3>
                <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-gray-800/50 min-h-[400px]">
                  <IconCloud iconSlugs={iconSlugs} />
                </div>
              </div>

              {/* Technologies Grid */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-200 mb-8"></h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-black/30 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-800 text-center hover:shadow-md hover:border-gray-700 transition-all duration-200 hover-scale"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="text-neutral-300 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Knowledge;
