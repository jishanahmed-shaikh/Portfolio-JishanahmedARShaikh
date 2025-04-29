
import { motion } from "framer-motion";
import { Code, Cloud, Database, Server, Users, Presentation } from "lucide-react";

const skillsData = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "#4285F4", // Google Cloud blue
    description: "GCP architecture, AWS services, Azure solutions, cloud security, and migration strategies."
  },
  {
    title: "Software Development",
    icon: Code,
    color: "#38BDF8", // Tailwind blue
    description: "Web applications, mobile solutions, API development, and software architecture."
  },
  {
    title: "AR Development",
    icon: Database,
    color: "#F7DF1E", // JavaScript yellow
    description: "Immersive AR experiences, filter creation, interactive 3D content for 1.5M+ users."
  },
  {
    title: "Operations Leadership",
    icon: Server,
    color: "#38B2AC", // Teal
    description: "Business operations, strategic planning, process optimization, and team management."
  },
  {
    title: "Program Management",
    icon: Users,
    color: "#9333EA", // Purple
    description: "Project lifecycle, resource allocation, risk management, and stakeholder communication."
  },
  {
    title: "Community Development",
    icon: Presentation,
    color: "#EC4899", // Pink
    description: "Technical community building, event organization, knowledge sharing, and mentorship."
  }
];

const SkillsExpertise = () => {
  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <Code className="w-8 h-8 mr-3 text-blue-400" />
          <h2 className="text-4xl font-bold gradient-text">Tech Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-black/70 to-black/30 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 shadow-lg"
            >
              <div 
                className="h-2" 
                style={{ backgroundColor: skill.color }}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-lg mr-3"
                    style={{ backgroundColor: `${skill.color}25` }} // 15% opacity version of color
                  >
                    <skill.icon 
                      style={{ color: skill.color }} 
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                </div>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExpertise;
