import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCommunities = [
  {
    name: "ArcadeOps Community",
    role: "Founder & Director",
    members: "1500+"
  },
  {
    name: "Google Developer Groups",
    role: "Cloud Head",
    members: "800+"
  },
  {
    name: "Pieces for Developers",
    role: "Ambassador",
    members: "Global"
  }
];

const CommunityCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <Users className="w-6 h-6 mr-3 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Community</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Building and leading technical communities, fostering collaboration and knowledge sharing.
      </p>
      
      <div className="space-y-3 mb-6">
        {featuredCommunities.map((community, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-white text-sm">{community.name}</h4>
              <p className="text-gray-300 text-xs">{community.role}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
              {community.members}
            </span>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-400 mb-4">
        <span className="text-blue-400 font-semibold">2500+</span> community members impacted
      </div>
      
      <Link 
        to="/community" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
      >
        View Community Work
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default CommunityCard;