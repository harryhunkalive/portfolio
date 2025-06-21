
const Knowledge = () => {
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' },
    { name: 'Python', level: 75, color: 'from-yellow-500 to-yellow-600' },
    { name: 'PostgreSQL', level: 70, color: 'from-indigo-500 to-indigo-600' },
    { name: 'AWS', level: 65, color: 'from-orange-500 to-orange-600' },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Next.js', 'GraphQL'
  ];

  return (
    <section id="knowledge" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Knowledge & Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and skills I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills with Progress Bars */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200 hover-scale"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
