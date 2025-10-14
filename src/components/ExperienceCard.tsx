import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const featuredExperiences = [
  {
    role: "Founder & Director",
    company: "ArcadeOps Community",
    period: "2022 - Present"
  },
  {
    role: "SnapAR Developer",
    company: "Snap Inc.",
    period: "2020 - Present"
  },
  {
    role: "Cloud Facilitator",
    company: "Google Cloud",
    period: "2023 - Present"
  }
];

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Experience</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Professional journey spanning cloud architecture, community building, and AR development.
      </p>
      
      <div className="space-y-4 mb-6">
        {featuredExperiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-400/30 pl-4">
            <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
            <p className="text-blue-300 text-xs">{exp.company}</p>
            <p className="text-gray-400 text-xs">{exp.period}</p>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-400 mb-4">
        <span className="text-blue-400 font-semibold">10+</span> professional roles
      </div>
      
      <Link 
        to="/experience" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
      >
        View Full Experience
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ExperienceCard;