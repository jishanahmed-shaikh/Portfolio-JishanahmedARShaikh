import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SkillsCard from "./SkillsCard";
import ExperienceCard from "./ExperienceCard";
import RecognitionsCard from "./RecognitionsCard";
import CertificationsCard from "./CertificationsCard";
import CommunityCard from "./CommunityCard";

const OverviewSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 gradient-text text-center"
        >
          Professional Overview
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Explore my professional journey, technical expertise, and community contributions
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <SkillsCard />
          <ExperienceCard />
          <RecognitionsCard />
          <CertificationsCard />
          <CommunityCard />
          
          {/* New Community Contribution Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
          >
            <div className="h-32 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2" 
                alt="Speaker Sessions"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Speaker Sessions</h3>
            <p className="text-gray-400 text-sm mb-4">Delivering keynotes and technical talks at conferences worldwide</p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Public Speaking</span>
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">Workshops</span>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              <span className="text-blue-400 font-semibold">2000+</span> professionals trained
            </div>
            <Link 
              to="/speaker-sessions" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              View All Sessions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
          >
            <div className="h-32 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87" 
                alt="Events & Conferences"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Events & Conferences</h3>
            <p className="text-gray-400 text-sm mb-4">Organizing tech events and participating in major conferences</p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">Event Management</span>
              <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-300">Conferences</span>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              <span className="text-blue-400 font-semibold">15+</span> hackathon wins
            </div>
            <Link 
              to="/events-conferences" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              View All Events
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
          >
            <div className="h-32 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728" 
                alt="AI Films & Creations"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AI Films & Creations</h3>
            <p className="text-gray-400 text-sm mb-4">Creating innovative AI-powered films and digital content</p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-300">AI</span>
              <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300">Film Production</span>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              <span className="text-blue-400 font-semibold">12+</span> AI films created
            </div>
            <Link 
              to="/ai-films" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              View All Creations
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
          >
            <div className="h-32 mb-4 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696" 
                alt="AR Projects and Contributions"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AR Projects & Contributions</h3>
            <p className="text-gray-400 text-sm mb-4">Developing immersive AR experiences and ecosystem contributions</p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">AR/VR</span>
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">3D Modeling</span>
            </div>
            <div className="text-sm text-gray-400 mb-4">
              <span className="text-blue-400 font-semibold">3M+</span> users reached
            </div>
            <Link 
              to="/ar-projects" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Personal Media / Gallery Section - Full Width Below Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10"
        >
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" 
                alt="Personal Media Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">Personal Media / Gallery</h3>
              <p className="text-gray-400 mb-4">
                Explore my personal collection of photos, videos, and creative content showcasing my journey, 
                achievements, and behind-the-scenes moments from various projects and events.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm px-3 py-1 rounded-full bg-white/5">Photography</span>
                <span className="text-sm px-3 py-1 rounded-full bg-white/5">Videos</span>
                <span className="text-sm px-3 py-1 rounded-full bg-white/5">Creative Content</span>
                <span className="text-sm px-3 py-1 rounded-full bg-white/5">Events</span>
              </div>
              <div className="text-sm text-gray-400 mb-4">
                <span className="text-blue-400 font-semibold">100+</span> media items
              </div>
              <Link 
                to="/gallery" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
              >
                View Gallery
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;