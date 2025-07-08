
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-black/30 backdrop-blur-sm relative overflow-hidden border-gray-800/50">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="p-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-neutral-200">
                  Passionate Developer & Problem Solver
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                I’m a Computer Science graduate with a strong passion for Python development, data analytics, and building meaningful tech solutions.
                 During my internship at Hindustan Aeronautics Limited, I developed a full-stack task management system using Flask, Pandas, and Excel automation, 
                 and created interactive dashboards for data insights. I’ve also built a Power BI portfolio with projects in sales, insurance, and content analytics, showcasing my skills in SQL, DAX, and data modeling. 
                My technical toolkit includes Python, SQL, Power BI, Tableau, and AWS, along with Git for version control.
                In addition to technical abilities, I bring strong problem-solving, communication, and team collaboration skills developed through hands-on
                 project work and cross-functional internships. I’m a quick learner, adaptable, and always eager to grow in dynamic environments.
                  I’m currently exploring AI and cloud technologies to further expand my capabilities as a data-driven professional
                </p>
                <p className="text-neutral-400 leading-relaxed">
               
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                    Problem Solver
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                    Team Player
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                    Continuous Learner
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-black rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
