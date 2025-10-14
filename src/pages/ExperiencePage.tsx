import { motion } from "framer-motion";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import ParticleBackground from "../components/ParticleBackground";

const experiences = [
  {
    role: "Facilitator",
    company: "Google Cloud Arcade Program",
    period: "2023 - Present",
    description: "Leading workshops and training sessions for cloud technologies adoption across enterprise clients.",
    type: "current",
    skills: ["GCP", "Cloud Architecture", "Training"]
  },
  {
    role: "Founder & Director",
    company: "ArcadeOps Community",
    period: "2022 - Present",
    description: "Built and scaled a technical community from scratch, reaching 1500+ members. Organized workshops, hackathons, and networking events.",
    type: "current",
    skills: ["Community Building", "Leadership", "Event Management"]
  },
  {
    role: "Ambassador",
    company: "Pieces for Developers",
    period: "2022 - Present",
    description: "Representing cutting-edge developer productivity tools and advocating best practices in software development.",
    type: "current",
    skills: ["Developer Relations", "Content Creation"]
  },
  {
    role: "Head of Operations",
    company: "LixtaNetwork",
    period: "2022 - Present",
    description: "Leading operational strategy and implementation for technology solutions across diverse client portfolios.",
    type: "current",
    skills: ["Operations", "Strategy", "Client Management"]
  },
  {
    role: "Cloud Head",
    company: "GDG on Campus APSIT",
    period: "2021 - Present",
    description: "Leading cloud initiatives and training sessions for student developers, focused on Google Cloud technologies.",
    type: "current",
    skills: ["GCP", "Community", "Technical Education"]
  },
  {
    role: "SnapAR Developer",
    company: "Snap Inc.",
    period: "2020 - Present",
    description: "Creating immersive AR experiences reaching 1.5M+ users globally. Developing interactive filters and effects using Lens Studio.",
    type: "current",
    skills: ["AR Development", "Lens Studio", "Creative Design"]
  },
  {
    role: "Founder & Head of Operations",
    company: "Antibits Solutions",
    period: "2020 - Present",
    description: "Founded and grew a tech consultancy serving 300+ clients with innovative solutions in web, mobile, and cloud technologies.",
    type: "current",
    skills: ["Entrepreneurship", "Client Relations", "Technical Leadership"]
  },
  {
    role: "Business Analyst",
    company: "Ajmeri Enterprises",
    period: "2019 - 2020",
    description: "Analyzed business processes and implemented automation solutions that improved operational efficiency by 35%.",
    type: "past",
    skills: ["Process Analysis", "Automation", "Business Intelligence"]
  },
  {
    role: "Chief Hardware Engineer",
    company: "Ajmeri Enterprises",
    period: "2018 - 2019",
    description: "Led hardware implementation and integration for IoT solutions across industrial applications.",
    type: "past",
    skills: ["Hardware Design", "IoT", "Systems Integration"]
  },
  {
    role: "Lead & Sr. Embedded Engineer",
    company: "Modified Auto Club Racing",
    period: "2017 - 2018",
    description: "Developed embedded systems for performance optimization in racing vehicles, resulting in significant efficiency gains.",
    type: "past",
    skills: ["Embedded Systems", "Firmware Development", "Performance Optimization"]
  }
];

const TimelineNode = ({ experience, index, isLast }: { experience: any, index: number, isLast: boolean }) => {
  const isEven = index % 2 === 0;
  const alignment = isEven ? "md:flex-row" : "md:flex-row-reverse";
  const textAlignment = isEven ? "md:text-left" : "md:text-right";
  const dotPosition = isEven ? "md:left-1/2 md:translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2";

  return (
    <div className={`mb-8 flex flex-col ${alignment} w-full`}>
      <div className="hidden md:block w-1/2 relative">
        <div 
          className={`absolute top-5 ${dotPosition} w-4 h-4 rounded-full 
          ${experience.type === "current" ? "bg-blue-500" : "bg-gray-500"} z-10`}
        />
        {!isLast && (
          <div className={`absolute top-5 h-full w-0.5 
            ${isEven ? "left-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"}  
            ${experience.type === "current" ? "bg-blue-700/50" : "bg-gray-700/50"}`}
          />
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`glass p-6 rounded-xl shadow-lg w-full md:w-1/2 
          ${experience.type === "current" ? "border-blue-600/20" : "border-gray-600/20"}
          backdrop-blur-lg bg-white/5`}
      >
        <div className={`${textAlignment}`}>
          <div className="flex flex-wrap items-center mb-2 gap-2 justify-center md:justify-start">
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            {experience.type === "current" && (
              <Badge className="bg-blue-500 text-xs">Current</Badge>
            )}
          </div>
          <p className="text-blue-300 font-medium mb-1">{experience.company}</p>
          <p className="text-gray-400 text-sm mb-3">{experience.period}</p>
          <p className="text-gray-300 mb-4">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
            {experience.skills.map((skill: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6"
          >
            <Briefcase className="w-8 h-8 mr-3 text-blue-400" />
            <h1 className="text-5xl font-bold gradient-text">Professional Experience</h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl"
          >
            My professional journey spans across multiple domains including cloud architecture, community building, 
            AR development, and technical leadership. Here's a detailed timeline of my career progression.
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <TimelineNode 
                key={index} 
                experience={exp} 
                index={index} 
                isLast={index === experiences.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;