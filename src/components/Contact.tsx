
import { useState } from 'react';
import { Contact as ContactIcon, Link } from 'lucide-react';
import { toast } from 'sonner';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      href: 'https://linkedin.com/in/johndoe'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/johndoe',
      href: 'https://github.com/johndoe'
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-black/30 backdrop-blur-sm relative overflow-hidden border-gray-800/50">
          <Spotlight
            className="-top-40 right-0 md:right-60 md:-top-20"
            fill="white"
          />
          
          <div className="p-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects. 
                Let's connect and create something amazing together!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900/50 rounded-xl shadow-lg p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-neutral-200 mb-6 flex items-center gap-2">
                  <ContactIcon className="text-blue-400" size={24} />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-neutral-200"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-neutral-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none text-neutral-200"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 hover-scale"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-200 mb-6">Let's Connect</h3>
                  <p className="text-neutral-400 mb-8">
                    Feel free to reach out through any of these channels. I'm always excited 
                    to discuss new projects, creative ideas, or opportunities to be part of 
                    your vision.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg shadow-sm border border-gray-800 hover:shadow-md hover:border-gray-700 transition-all duration-200 hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="font-medium text-neutral-200">{info.label}</div>
                        <div className="text-neutral-400 text-sm">{info.value}</div>
                      </div>
                      <Link className="ml-auto text-blue-400" size={16} />
                    </a>
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

export default Contact;
