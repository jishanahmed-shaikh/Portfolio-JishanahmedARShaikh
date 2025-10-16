import { motion } from "framer-motion";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import ParticleBackground from "../components/ParticleBackground";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "PassionBytes PVT LTD (USA | UAE | INDIA)",
    period: "July 2025 - Present",
    description: "Engineering scalable front-end architectures using ReactJS, TypeScript, and Tailwind CSS. Building NLP-driven AI modules for search and summarization using Python (SpaCy, Transformers). Improved load time by 30% through performance audits.",
    type: "current",
    skills: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Python", "NLP", "AI/ML"]
  },
  {
    role: "SnapAR Community Developer / Creator",
    company: "Snap Inc.",
    period: "Sept 2024 - Present",
    description: "Developing interactive AR experiences for Snapchat and Spectacles using React + WebGL. Leveraging Lens Studio's JavaScript API for gesture, facial, and voice-triggered interactions. Impacted 3M+ global users.",
    type: "current",
    skills: ["AR Development", "Lens Studio", "React", "WebGL", "JavaScript API", "Computer Vision"]
  },
  {
    role: "Facilitator - Google Cloud Arcade Program (C1 & C2)",
    company: "Google Inc. - Google Cloud Learning Services",
    period: "Mar 2025 - Jun 2025",
    description: "Training 2,000+ professionals in cloud architecture, AI APIs, and containerization on GCP. Built React-based dashboards with Firestore + Cloud Functions. Achieved 95% completion rate via gamified challenges.",
    type: "past",
    skills: ["GCP", "Kubernetes", "Terraform", "React", "Cloud Functions", "BigQuery"]
  },
  {
    role: "Head of Operations (Technology & Partnerships)",
    company: "Lixta Network",
    period: "Apr 2024 - Apr 2025",
    description: "Directing AI-powered dashboard development using ReactJS, FastAPI, and Python. Architecting microservices using Docker, Redis, and Celery. Increased revenue by 30% through automation and enterprise partnerships.",
    type: "past",
    skills: ["ReactJS", "FastAPI", "Python", "Docker", "Redis", "Scikit-learn", "ML"]
  },
  {
    role: "Ambassador",
    company: "Pieces for Developers (USA)",
    period: "Dec 2024 - May 2025",
    description: "Advocating AI-assisted workflows through live sessions on Pieces OS & Contextual APIs. Built demo extensions with AI-driven code suggestions. Boosted engagement by 20% through community showcases.",
    type: "past",
    skills: ["AI APIs", "Pieces OS", "JavaScript", "Developer Tools", "Community Management"]
  },
  {
    role: "Founding Director - Community",
    company: "ArcadeOps Community",
    period: "Apr 2025 - Jun 2025",
    description: "Built a global cloud learning community of 2,000+ members. Partnered with 5+ international tech organizations for upskilling and mentorship programs.",
    type: "past",
    skills: ["Community Building", "Leadership", "Cloud Technologies", "International Partnerships"]
  },
  {
    role: "Head - Cloud Department",
    company: "Google Developer Groups on Campus - APSIT",
    period: "Oct 2024 - May 2025",
    description: "Organized Cloud & DevOps bootcamps for 500+ participants. Mentored students on deploying cloud-native applications and modern development practices.",
    type: "past",
    skills: ["GCP", "DevOps", "Student Mentorship", "Cloud Native", "Technical Education"]
  },
  {
    role: "Business Analyst / Hardware Engineer",
    company: "Ajmeri Enterprises (Thane)",
    period: "Feb 2024 - Jul 2024 / May 2023 - Jan 2024",
    description: "Built ReactJS + Power BI dashboards for client insights and data-driven decisions. Developed IoT-based diagnostic systems with embedded controllers and sensors.",
    type: "past",
    skills: ["ReactJS", "Power BI", "Python", "IoT", "Embedded Systems", "Analytics"]
  },
  {
    role: "Lead - Embedded Systems",
    company: "Modified Auto Club Racing - APSIT",
    period: "Feb 2023 - Jan 2024",
    description: "Directed IoT and embedded projects using Arduino, ESP32, and real-time sensors. Built Raspberry Pi-based data visualization dashboards for performance tracking.",
    type: "past",
    skills: ["Arduino", "ESP32", "Raspberry Pi", "IoT", "Data Visualization", "Embedded Systems"]
  },
  {
    role: "Founder & Head of Operations",
    company: "Antibits Solutions",
    period: "Dec 2019 - Dec 2024",
    description: "Founded tech venture serving 300+ clients with full-stack automation systems. Built hybrid IoT + Cloud platforms. Managed 15-member development team. Delivered 20% YoY growth through tech innovation.",
    type: "past",
    skills: ["Entrepreneurship", "Full-Stack Development", "IoT", "Cloud Architecture", "Team Leadership"]
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