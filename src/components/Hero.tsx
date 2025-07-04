import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creating beautiful, responsive web experiences with modern technologies and clean code
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-glow-pulse px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 text-lg hover:shadow-glow transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection('about')}
            className="rounded-full hover:shadow-glow transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;