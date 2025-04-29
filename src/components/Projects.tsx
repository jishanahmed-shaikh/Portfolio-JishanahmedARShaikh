
import { motion } from "framer-motion";

const projects = [
  {
    title: "ArcadeOps Community",
    description: "Built and scaled a tech community from scratch, reaching over 1500+ members. Organized workshops, hackathons, and networking events.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    link: "https://www.linkedin.com/company/arcadeops",
    tech: ["Community", "Leadership", "Training"]
  },
  {
    title: "SnapAR Experiences",
    description: "Created immersive AR experiences reaching 1.5M+ users globally. Developed interactive filters and effects using Lens Studio.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "https://lensstudio.snapchat.com/creator/n1Ho0DhU5GkZ7zWmyaOlAQ",
    tech: ["SnapAR", "3D Modeling", "Animation"]
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Designed and implemented scalable cloud solutions for enterprise clients using GCP and Kubernetes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["GCP", "Kubernetes", "Terraform"]
  },
  {
    title: "Antibits Solutions",
    description: "Founded and grew a tech consultancy serving 300+ clients with innovative solutions in web, mobile, and cloud technologies.",
    tech: ["Consulting", "Development", "Strategy"]
  },
  {
    title: "IoT Smart Home System",
    description: "Developed a comprehensive IoT solution for home automation using Arduino and Raspberry Pi.",
    tech: ["IoT", "Arduino", "Python"]
  },
  {
    title: "E-Cycle Innovation",
    description: "Led the development of an award-winning electric cycle prototype with innovative energy recovery systems.",
    tech: ["Hardware", "Innovation", "AutoCAD"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-2 py-1 rounded-full bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
