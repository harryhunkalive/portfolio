
import { useState, useEffect } from 'react';
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-gray-800">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-neutral-300 mb-6 h-10">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8 max-w-lg">
                I create beautiful, responsive web applications with modern technologies. 
                Passionate about clean code and exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 hover-scale"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 hover-scale"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right content with 3D scene */}
            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
