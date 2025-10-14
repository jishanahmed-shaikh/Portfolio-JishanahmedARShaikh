import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const recognitions = [
  {
    title: "Top AR Creator",
    organization: "Snap Inc.",
    year: "2023",
    description: "Recognized for creating AR experiences with over 1.5M+ global users",
    icon: <Star className="w-6 h-6" />,
    category: "Achievement"
  },
  {
    title: "Community Builder of the Year",
    organization: "Google Developer Groups",
    year: "2023",
    description: "Awarded for outstanding contribution to developer community growth",
    icon: <Trophy className="w-6 h-6" />,
    category: "Leadership"
  },
  {
    title: "Innovation Excellence Award",
    organization: "ArcadeOps Community",
    year: "2022",
    description: "For building and scaling a technical community to 1500+ members",
    icon: <Award className="w-6 h-6" />,
    category: "Innovation"
  },
  {
    title: "Cloud Advocate Recognition",
    organization: "Google Cloud",
    year: "2022",
    description: "Recognized for exceptional contribution to cloud technology adoption",
    icon: <Star className="w-6 h-6" />,
    category: "Technical"
  },
  {
    title: "Startup Founder Recognition",
    organization: "Antibits Solutions",
    year: "2021",
    description: "Successfully founded and scaled tech consultancy serving 300+ clients",
    icon: <Trophy className="w-6 h-6" />,
    category: "Entrepreneurship"
  },
  {
    title: "Technical Excellence Award",
    organization: "Modified Auto Club Racing",
    year: "2018",
    description: "For developing embedded systems that improved racing vehicle performance",
    icon: <Award className="w-6 h-6" />,
    category: "Technical"
  }
];

const RecognitionCard = ({ recognition, index }: { recognition: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    className="glass rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="text-blue-400">
        {recognition.icon}
      </div>
      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
        {recognition.category}
      </span>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-2">{recognition.title}</h3>
    <p className="text-blue-300 font-medium mb-1">{recognition.organization}</p>
    <p className="text-gray-400 text-sm mb-3">{recognition.year}</p>
    <p className="text-gray-300">{recognition.description}</p>
  </motion.div>
);

const RecognitionsPage = () => {
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
            <Trophy className="w-8 h-8 mr-3 text-blue-400" />
            <h1 className="text-5xl font-bold gradient-text">Recognitions & Awards</h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl"
          >
            Throughout my career, I've been honored to receive recognition for my contributions to technology, 
            community building, and innovation. These awards reflect my commitment to excellence and impact.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <RecognitionCard key={index} recognition={recognition} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionsPage;