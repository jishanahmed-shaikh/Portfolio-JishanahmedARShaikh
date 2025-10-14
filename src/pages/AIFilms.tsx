import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const AIFilms = () => {
  const films = [
    {
      title: "Neural Dreams",
      type: "AI-Generated Short Film",
      duration: "8 minutes",
      description: "An experimental short film created entirely using AI tools, exploring the intersection of technology and human consciousness.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      tech: ["Stable Diffusion", "RunwayML", "AI Voice Synthesis"],
      awards: ["Best AI Film 2023", "Innovation Award"]
    },
    {
      title: "Digital Metamorphosis",
      type: "AI Animation Series",
      duration: "12 episodes",
      description: "A series of AI-generated animations showcasing the evolution of digital art and creative expression.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      tech: ["DALL-E", "Midjourney", "After Effects AI"],
      awards: ["Creative Excellence", "Tech Innovation"]
    },
    {
      title: "Synthetic Narratives",
      type: "Interactive AI Experience",
      duration: "Variable",
      description: "An interactive storytelling experience where AI generates unique narratives based on user input and choices.",
      image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc",
      tech: ["GPT-4", "Custom AI Models", "Interactive Design"],
      awards: ["User Experience Award"]
    }
  ];

  const creativeTools = [
    {
      name: "AI Video Generation",
      description: "Creating cinematic sequences using advanced AI video generation models",
      icon: "🎬"
    },
    {
      name: "Synthetic Voice Acting",
      description: "Developing realistic character voices using AI voice synthesis technology",
      icon: "🎭"
    },
    {
      name: "Procedural Storytelling",
      description: "Building AI systems that generate compelling narratives and plot structures",
      icon: "📚"
    },
    {
      name: "AI-Assisted Editing",
      description: "Leveraging AI for intelligent video editing and post-production workflows",
      icon: "✂️"
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">AI Films & Creations</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pushing the boundaries of creative technology by producing innovative films, 
              animations, and interactive experiences using cutting-edge AI tools.
            </p>
          </motion.div>

          {/* Featured Films */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured AI Creations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {films.map((film, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={film.image} 
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                      {film.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-400 mb-2">{film.type}</div>
                    <h3 className="text-xl font-bold mb-3">{film.title}</h3>
                    <p className="text-gray-400 mb-4">{film.description}</p>
                    
                    {/* Awards */}
                    {film.awards && (
                      <div className="mb-4">
                        {film.awards.map((award, i) => (
                          <span 
                            key={i} 
                            className="text-sm px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 mr-2 mb-2 inline-block"
                          >
                            🏆 {award}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {film.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-sm px-2 py-1 rounded-full bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Creative Tools & Techniques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Creative AI Tools & Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {creativeTools.map((tool, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{tool.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                      <p className="text-gray-400">{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass rounded-xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Creative Philosophy</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-6">
                "AI is not replacing human creativity—it's amplifying it. By combining artificial intelligence 
                with human vision and storytelling, we can create experiences that were previously impossible."
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Innovation</h4>
                  <p className="text-gray-400">Exploring new frontiers in AI-assisted creative production</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-400">Collaboration</h4>
                  <p className="text-gray-400">Human-AI partnership in the creative process</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-purple-400">Impact</h4>
                  <p className="text-gray-400">Creating meaningful content that resonates with audiences</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Creative Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">12+</div>
                <div className="text-gray-400">AI Films Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">500K+</div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
                <div className="text-gray-400">Awards Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-gray-400">AI Tools Mastered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIFilms;