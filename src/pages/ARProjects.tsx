import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const ARProjects = () => {
  const arProjects = [
    {
      title: "SnapAR Global Experiences",
      platform: "Snapchat Lens Studio",
      reach: "1.5M+ Users",
      description: "Created immersive AR experiences and filters that have been used by over 1.5 million users globally.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696",
      link: "https://lensstudio.snapchat.com/creator/n1Ho0DhU5GkZ7zWmyaOlAQ",
      features: ["Face Tracking", "World Effects", "Interactive Elements"],
      stats: { users: "1.5M+", countries: "50+", shares: "100K+" }
    },
    {
      title: "AR Product Visualization",
      platform: "WebAR",
      reach: "Enterprise Solution",
      description: "Developed AR solutions for e-commerce platforms allowing customers to visualize products in their space.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      features: ["3D Product Models", "Real-time Rendering", "Cross-platform"],
      stats: { clients: "15+", conversion: "+35%", satisfaction: "92%" }
    },
    {
      title: "Educational AR Experiences",
      platform: "Unity AR Foundation",
      reach: "Educational Institutions",
      description: "Interactive AR applications for educational purposes, making learning more engaging and immersive.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      features: ["Educational Content", "Interactive Learning", "Multi-platform"],
      stats: { schools: "25+", students: "5000+", engagement: "+60%" }
    }
  ];

  const technologies = [
    {
      name: "Snapchat Lens Studio",
      description: "Advanced AR filter and lens development",
      icon: "👻",
      expertise: "Expert"
    },
    {
      name: "Unity AR Foundation",
      description: "Cross-platform AR application development",
      icon: "🎮",
      expertise: "Advanced"
    },
    {
      name: "WebAR Technologies",
      description: "Browser-based AR experiences",
      icon: "🌐",
      expertise: "Advanced"
    },
    {
      name: "3D Modeling & Animation",
      description: "Creating 3D assets for AR experiences",
      icon: "🎨",
      expertise: "Intermediate"
    },
    {
      name: "Computer Vision",
      description: "Object detection and tracking algorithms",
      icon: "👁️",
      expertise: "Advanced"
    },
    {
      name: "Spatial Computing",
      description: "Understanding 3D space and user interaction",
      icon: "📐",
      expertise: "Advanced"
    }
  ];

  const contributions = [
    {
      title: "Open Source AR Libraries",
      description: "Contributing to open source AR development tools and libraries",
      impact: "Used by 1000+ developers"
    },
    {
      title: "AR Community Building",
      description: "Building and nurturing AR developer communities",
      impact: "500+ active members"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">AR Projects & Contributions</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Developing immersive augmented reality experiences and contributing to the AR ecosystem 
              with innovative solutions that bridge the digital and physical worlds.
            </p>
          </motion.div>

          {/* Featured AR Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured AR Projects</h2>
            <div className="space-y-8">
              {arProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <div className="text-blue-400 mb-1">{project.platform}</div>
                          <div className="text-green-400">{project.reach}</div>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Project →
                          </a>
                        )}
                      </div>
                      
                      <p className="text-gray-400 mb-6">{project.description}</p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, i) => (
                            <span 
                              key={i} 
                              className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.stats).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-blue-400">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">AR Technologies & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{tech.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">{tech.name}</h3>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          tech.expertise === 'Expert' ? 'bg-green-500/20 text-green-300' :
                          tech.expertise === 'Advanced' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {tech.expertise}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Community Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Community Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contributions.map((contribution, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{contribution.title}</h3>
                  <p className="text-gray-400 mb-4">{contribution.description}</p>
                  <div className="text-green-400 font-semibold">{contribution.impact}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AR Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">AR Impact & Reach</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1.5M+</div>
                <div className="text-gray-400">AR Experience Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">Countries Reached</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-400">AR Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">100K+</div>
                <div className="text-gray-400">Social Shares</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ARProjects;