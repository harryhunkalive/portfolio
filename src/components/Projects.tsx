
import { Link } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts for multiple locations with beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden border-gray-800">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="p-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gray-900/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-200 mb-2">{project.title}</h3>
                    <p className="text-neutral-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-neutral-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                      >
                        <Link size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 text-sm font-medium transition-colors duration-200"
                      >
                        <Link size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
