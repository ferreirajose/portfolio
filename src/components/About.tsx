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
                  Frontend Developer
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Web Designer Technician from Faculdade Idez (Estácio) 2013, graduated in Internet Systems from Unipê - Centro Universitário de João Pessoa, with approximately 9 years of experience with Front End. Working in large multinationals such as INDRA, NTT Data, SONDA, Serasa Experian in large-scale projects, for clients in the public and private financial segment, as well as the public sector. Working with the main technologies aimed at the web ecosystem such as TypeScript, Angular, React, ES6 among others, with experience in agile methodologies such as kanban and scrum.
                </p>
                <p className="text-muted-foreground leading-relaxed">
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