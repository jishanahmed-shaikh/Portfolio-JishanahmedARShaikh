import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const Community = () => {
  const communityProjects = [
    {
      title: "ArcadeOps Community",
      description: "Built and scaled a tech community from scratch, reaching over 1500+ members. Organized workshops, hackathons, and networking events.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      link: "https://www.linkedin.com/company/arcadeops",
      achievements: ["1500+ Members", "50+ Events", "Global Reach"]
    },
    {
      title: "Developer Mentorship Program",
      description: "Mentored 100+ developers through career transitions and skill development programs.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      achievements: ["100+ Mentees", "Career Growth", "Skill Development"]
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to various open source projects, helping build tools and libraries used by thousands of developers.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      achievements: ["Multiple Projects", "Global Impact", "Collaboration"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-20">
          <Link to="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">Community Building</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about building and nurturing tech communities, fostering collaboration, 
              and creating spaces where developers and innovators can grow together.
            </p>
          </motion.div>

          {/* Community Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {communityProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <span 
                        key={i} 
                        className="text-sm px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Community →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Community Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1500+</div>
                <div className="text-gray-400">Community Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
                <div className="text-gray-400">Events Organized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Developers Mentored</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;