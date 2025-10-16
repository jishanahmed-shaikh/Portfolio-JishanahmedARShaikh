import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const recognitions = [
  {
    title: "3M+ Users Impacted via AR Creations",
    organization: "Snap Inc.",
    year: "2024-Present",
    description: "Created interactive AR experiences for Snapchat and Spectacles that reached and engaged over 3 million users globally across 50+ countries.",
    icon: <Star className="w-6 h-6" />,
    category: "Impact"
  },
  {
    title: "Top 40 Finalist - XR Creator Hackathon",
    organization: "WAVES 2025, Ministry of I&B, India",
    year: "2025",
    description: "Selected as top 40 finalist in prestigious XR Creator Hackathon organized by Ministry of Information & Broadcasting, India, competing against 1000+ participants nationwide.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "Top 50 Finalist - Volkswagen iMobilothon",
    organization: "Volkswagen",
    year: "2024",
    description: "Reached top 50 in Volkswagen's global mobility innovation hackathon focusing on future transportation solutions with placement opportunity.",
    icon: <Award className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "Winner - TheTimeHack 2025",
    organization: "TheTimeHack International",
    year: "2025",
    description: "First place winner in international time-constrained hackathon demonstrating rapid prototyping and innovation skills, building complete solution in 24 hours.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "Winner - E-Cyclothon 2022",
    organization: "E-Cyclothon, Maharashtra, India",
    year: "2022",
    description: "First place winner in sustainability-focused hackathon for developing innovative eco-friendly technology solutions for waste management.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "Winner - EXALT Hackathon 2023",
    organization: "EXALT, Maharashtra, India",
    year: "2023",
    description: "Won first place for innovative AI-powered technology solution addressing real-world challenges in the healthcare sector.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "3rd Winner - Hackonomics 2025",
    organization: "Hackonomics International",
    year: "2025",
    description: "Third place in international economics and technology focused hackathon for developing innovative blockchain-based financial solution.",
    icon: <Award className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "3rd Winner - SnapAR Reimagination Challenge",
    organization: "Snap Inc., Maharashtra, India",
    year: "2025",
    description: "Third place in Snap's AR innovation challenge for creative and technical excellence in developing advanced AR experience with innovative interactions.",
    icon: <Award className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "3rd Runner-Up - HackNovate 2025",
    organization: "HackNovate International",
    year: "2025",
    description: "Fourth place in international hackathon with participants from multiple countries, competing against international teams and securing top position.",
    icon: <Award className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "Best Visual Design - HackSocial 2025",
    organization: "HackSocial International",
    year: "2025",
    description: "Awarded for exceptional visual design and user experience in social impact hackathon, recognized for outstanding UI/UX design skills.",
    icon: <Star className="w-6 h-6" />,
    category: "Design"
  },
  {
    title: "Contributor - GSSOC 2024",
    organization: "GirlScript Summer of Code",
    year: "2024",
    description: "Active contributor in one of India's largest open source programs for students, contributed to multiple projects and mentored newcomers.",
    icon: <Star className="w-6 h-6" />,
    category: "Open Source"
  },
  {
    title: "Inter-States Football Competition Representative",
    organization: "Junior College Sports",
    year: "Academic Year",
    description: "Represented Junior College at Inter-States Football Competition, demonstrating leadership and teamwork skills in competitive sports.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Sports"
  },
  {
    title: "Special Prize - Someshwar Technothon 2022",
    organization: "Someshwar Technothon, Maharashtra, India",
    year: "2022",
    description: "Received special recognition for innovative technology solution and exceptional technical implementation in regional technology competition.",
    icon: <Award className="w-6 h-6" />,
    category: "Competition"
  },
  {
    title: "Hackathon Mentor & Judge",
    organization: "Multiple Organizations",
    year: "2025",
    description: "Served as mentor and judge at prestigious hackathons including BNB Hack Bombay 2025, Cognition GameJam 2025, HackNova 2025, and Smart India Hackathon 2025.",
    icon: <Star className="w-6 h-6" />,
    category: "Leadership"
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