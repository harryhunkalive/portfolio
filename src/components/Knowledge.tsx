
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Knowledge = () => {
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-blue-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-500' },
    { name: 'Python', level: 75, color: 'from-yellow-400 to-yellow-500' },
    { name: 'PostgreSQL', level: 70, color: 'from-indigo-400 to-indigo-500' },
    { name: 'AWS', level: 65, color: 'from-orange-400 to-orange-500' },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Next.js', 'GraphQL'
  ];

  return (
    <section id="knowledge" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden border-gray-800">
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
              {/* Skills with Progress Bars */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-200 mb-8">Technical Proficiency</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-neutral-300 font-medium">{skill.name}</span>
                        <span className="text-neutral-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Grid */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-200 mb-8">Technologies & Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gray-900/50 p-4 rounded-lg shadow-sm border border-gray-800 text-center hover:shadow-md hover:border-gray-700 transition-all duration-200 hover-scale"
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
