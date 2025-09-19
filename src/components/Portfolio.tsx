import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { useForm, ValidationError } from "@formspree/react";

// Import images
import heroImage from '../assets/vanshika-real.jpg';
import aboutImage from '../assets/vanshika-about.jpg';
import projectVerq from '../assets/verq-project.png';
import projectExpense from '../assets/project-expense.jpg';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

function ContactForm() {
  const [state, handleSubmit] = useForm("xldwqned"); // your Formspree ID

  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 font-semibold">
        ✅ Thanks for reaching out! I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-foreground font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-foreground font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-foreground font-medium mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background"
          placeholder="Project inquiry"
        />
      </div>
      <div className="mb-6">
        <label className="block text-foreground font-medium mb-2">Message</label>
        <textarea
          rows={5}
          name="message"
          required
          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary resize-none bg-background"
          placeholder="Tell me about your project..."
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-primary text-primary-foreground hover:shadow-lifted transition-all duration-300 transform hover:scale-105"
        size="lg"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "VERQ - Student-Recruiter Platform",
      description: "Full-stack web platform connecting 50+ students with recruiters, featuring ATS optimization and personalized roadmaps. Reduced shortlisting time by 30% using AI-based parsing.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Supabase"],
      image: projectVerq,
    },
    {
      title: "Expense Tracker Mobile App",
      description: "Cross-platform Flutter app with Firebase real-time sync and analytics dashboard. Improved expense tracking by 40% with category-based insights and beautiful UI/UX.",
      tech: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
      image: projectExpense,
    }
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "React.js", level: 75},
    { name: "Flutter", level: 88 },
    { name: "Figma", level: 80 },
    { name: "Canva", level: 100 },
    { name: "Java", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "Node.js", level: 78 }
  ];

  const handleContactSubmit = () => {
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-card/90 backdrop-blur-lg shadow-card' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Vanshika's Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground/80 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <Card className="md:hidden bg-card/95 backdrop-blur-lg mt-2 p-4 shadow-elegant">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-foreground/80 hover:text-primary transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </Card>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-64 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Vanshika
</span>



                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A passionate UI/UX designer and developer who creates beautiful, functional, and 
                  user-centered digital experiences. I love turning complex problems into simple, elegant solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <Button
  variant="outline"
  size="lg"
  className="px-8 py-10 text-lg font-semibold bg-gradient-to-r from-blue-300 to-purple-300 text-gray-900 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300"
  onClick={() => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/file/d/1FHdYCO3KmVGLjjnqDCGFbnzW6ra7C2Nj/view?usp=sharing';
    link.download = 'Vanshika_Dhawan_Resume.pdf';
    link.click();
  }}
>
  View My CV 
</Button>



                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card p-4">
                    <img
                      src={heroImage}
                      alt="Vanshika Dhawan - UI/UX Designer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] lg:w-[33rem] lg:h-[40rem] mx-auto overflow-hidden rounded-2xl shadow-lifted">
                <img
                  src={aboutImage}
                  alt="Vanshika Dhawan - UI/UX Designer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                UI/UX Designer & Developer from Pune
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a Computer Science Engineering student at Symbiosis Institute of Technology, Pune. 
                I'm passionate about creating intuitive user experiences and developing functional mobile and web 
                applications that solve real-world problems. With proficiency in Canva and basics of Figma and React, 
                I combine creativity with technology to design and build impactful digital solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Currently, I serve as the Design Head for the Cybersecurity & Blockchain Club, SymbiTech (annual tech fest), 
                and the Placement Cell, where I lead design initiatives, manage creative direction, and collaborate with teams 
                to deliver meaningful user experiences. My goal is to craft designs that are not only visually appealing but 
                also user-centered, accessible, and practical. Beyond academics, I enjoy exploring UI/UX trends, experimenting 
                with design tools, and contributing to open-source projects to refine my skills and grow as a designer and developer.
              </p>
              <div className="flex space-x-6">
  {/* GitHub */}
  <a
    href="https://github.com/VANSHIKA-2727"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <Github size={24} />
    </Button>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vanshika-dhawan-986552296/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <Linkedin size={24} />
    </Button>
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/LoopLassVd/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <ArrowRight size={24} /> {/* you can replace with a custom icon */}
    </Button>
  </a>

  {/* Gmail */}
  <a href="mailto:vanshika.dhawan.btech2023@sitpune.edu.in">
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <Mail size={24} />
    </Button>
  </a>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card shadow-card hover:shadow-lifted transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-primary transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-contact">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
      </p>
      <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
    </div>

    <div className="max-w-2xl mx-auto">
      <Card className="bg-card shadow-elegant p-8">
        {/* Hook up Formspree */}
        <ContactForm />
      </Card>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Vanshika Dhawan
              </div>
              <p className="text-background/80 mt-2">UI/UX Designer & Developer | Building beautiful digital experiences.</p>
            </div>
            <div className="flex space-x-6">
  {/* GitHub */}
  <a
    href="https://github.com/VANSHIKA-2727"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <Github size={24} />
    </Button>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vanshika-dhawan-986552296/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <Linkedin size={24} />
    </Button>
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/LoopLassVd/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <ArrowRight size={24} /> {/* you can replace with a custom icon */}
    </Button>
  </a>

  {/* Gmail */}
  <a href="mailto:vanshika.dhawan.btech2023@sitpune.edu.in">
    <Button
      variant="ghost"
      size="icon"
      className="text-background/80 hover:text-background"
    >
      <Mail size={24} />
    </Button>
  </a>
</div>

          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/80">
            <p>&copy; 2025 Vanshika Dhawan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;