import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Next.js", "Vue.js",
    "HTML5", "CSS3", "Tailwind CSS", "SASS", "Node.js",
    "Git", "Figma", "Responsive Design", "PWA", "REST APIs"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Passionate frontend developer with expertise in modern web technologies. 
            I love creating intuitive user interfaces and bringing creative designs to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-in-left">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Frontend Developer & UI/UX Enthusiast
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 3 years of experience in web development, I specialize in 
                  creating responsive, accessible, and performant web applications. 
                  I'm passionate about staying up-to-date with the latest technologies 
                  and best practices in frontend development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new design trends, 
                  contributing to open-source projects, or learning about emerging 
                  web technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;