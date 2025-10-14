import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { Link } from "react-router-dom";

const featuredSkills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
];

const SkillsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <Code className="w-6 h-6 mr-3 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Skills & Technologies</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Expertise across multiple domains including cloud platforms, programming languages, and modern frameworks.
      </p>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {featuredSkills.map((skill, index) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="h-8 w-8 mb-2" 
              loading="lazy"
            />
            <span className="text-xs text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-400 mb-4">
        <span className="text-blue-400 font-semibold">20+</span> technologies mastered
      </div>
      
      <Link 
        to="/skills" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
      >
        View Full Skills
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default SkillsCard;