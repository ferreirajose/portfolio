import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Frontend Developer
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Creating beautiful web experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow transition-all duration-300">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Frontend Developer
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 All rights reserved. Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;