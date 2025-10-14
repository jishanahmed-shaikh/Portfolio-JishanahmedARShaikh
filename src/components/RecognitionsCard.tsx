import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const featuredRecognitions = [
  {
    title: "Top AR Creator",
    organization: "Snap Inc.",
    year: "2023"
  },
  {
    title: "Community Builder of the Year",
    organization: "Google Developer Groups",
    year: "2023"
  },
  {
    title: "Innovation Excellence Award",
    organization: "ArcadeOps Community",
    year: "2022"
  }
];

const RecognitionsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <Trophy className="w-6 h-6 mr-3 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Recognitions & Awards</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Recognition for contributions to technology, community building, and innovation excellence.
      </p>
      
      <div className="space-y-3 mb-6">
        {featuredRecognitions.map((recognition, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-white text-sm">{recognition.title}</h4>
              <p className="text-gray-300 text-xs">{recognition.organization} • {recognition.year}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-400 mb-4">
        <span className="text-blue-400 font-semibold">6+</span> awards received
      </div>
      
      <Link 
        to="/recognitions" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
      >
        View All Awards
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default RecognitionsCard;