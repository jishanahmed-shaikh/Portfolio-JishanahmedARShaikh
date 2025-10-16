import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Calendar, MapPin, Trophy, Users, Star, ExternalLink } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const AIFilms = () => {
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const films = [
    {
      title: "M-PIRE",
      subtitle: "Magnify Your Empire | Official Teaser Trailer",
      type: "Cinematic Vision",
      event: "MumbAI Hack 2025",
      date: "14th September 2025",
      location: "WeWork Raheja, Andheri West",
      description: "A cinematic vision of power, luxury, and legacy. M-PIRE isn't just a film, it's an ideology. It represents the timeless pursuit of greatness - a world where ambition meets art, where every choice defines an empire. From dimly lit alleys to roaring engines and silver-lined suits, M-PIRE captures the rhythm of those who build, rule, and rise.",
      thumbnail: "/AI-Films/MPIRE-THUMBNAIL.png",
      videoUrl: "https://youtu.be/4LZIUmNNJgM?si=g_v3rxltcRHgx9Le",
      themes: ["Luxury", "Power", "Legacy", "Desire"],
      targetBrands: ["Luxury Cars", "Premium Exotic Brands", "Real Estate", "High Fashion"],
      director: "Jishanahmed AR Shaikh",
      status: "Teaser Released",
      impact: "Empire Expansion Coming Soon"
    },
    {
      title: "MANGA-SEC",
      subtitle: "When AI Pretends to Help: Ethics & Cybersecurity Explained",
      type: "Educational Short Film",
      description: "Artificial Intelligence is revolutionizing our world, but not without risks and Cybersecurity Awareness is the need of the Hour. In this short story-driven video, we explore how AI, while appearing helpful, can pose serious threats when ethical boundaries are ignored. From data manipulation to digital deception, the consequences are real-and cybersecurity is our frontline defense.",
      thumbnail: "/AI-Films/AI-THUMBNAIL.png",
      videoUrl: "https://youtu.be/eatX6_Wr978?si=u42VNfHw9piHc1YU",
      themes: ["AI Ethics", "Cybersecurity", "Digital Safety", "Awareness"],
      director: "Jishanahmed AR Shaikh",
      content: "Aishwarya Sawant",
      format: "Story-Driven Educational Content",
      focus: "AI Risks & Digital Protection",
      status: "Released"
    },
    {
      title: "AVALORA",
      subtitle: "Learn WEB3 via Immersive Storytelling and Quests",
      type: "Gamified Social-Finance Ecosystem Film",
      blockchain: "Built on AVALANCHE",
      style: "Manga/Anime",
      description: "AVALORA is a gamified social-finance ecosystem built on Avalanche, where every interaction is an adventure. Powered by $AVAX and C-Chain tokens, AVALORA fuses anime-inspired storytelling, manga-style worlds, and DeFi mechanics into a single realm.",
      plot: "Shiro no Kizuna: Bonds of the White Snow - In the crimson realm of Avalora, the citadel of Avaland is ruled by Emperor AVAXIM (the Unyielding Avalanche). His envoy, AVALANCH, roams the realms as the Ambassador of Avalora, guiding new Seekers—that's you. When the Meron Forces corrupt the sacred Gems of Eternity, Avalora begins to fracture. Your quest: follow Avalanch through comic chapters, master typing duels and Web3/Avalanche trivia, purify the Gems, and restore balance before the realm shatters.",
      thumbnail: "/AI-Films/YT-Thumbnail-AVALORA.png",
      videoUrl: "https://youtu.be/MlIbgCAo_c4",
      director: "Jishanahmed AR Shaikh",
      features: ["Anime Storytelling", "DeFi Mechanics", "Interactive Quests", "Web3 Education"],
      characters: ["Emperor AVAXIM", "AVALANCH (Ambassador)", "Seekers (Players)"],
      status: "In Development"
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
            <h2 className="text-3xl font-bold mb-8 text-center">Featured AI Film Creations</h2>
            <div className="space-y-12">
              {films.map((film, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Video/Thumbnail Section */}
                    <div className="relative h-80 lg:h-auto overflow-hidden group">
                      {film.videoUrl ? (
                        <div className="relative aspect-video bg-gray-900">
                          <iframe
                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(film.videoUrl)}?rel=0&modestbranding=1&showinfo=0`}
                            title={film.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {/* Video overlay info */}
                          <div className="absolute top-4 left-4 flex items-center space-x-2">
                            <span className="px-3 py-1 rounded-full bg-red-500/80 text-white text-sm font-semibold">
                              {film.status}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <div className="text-white">
                                <h3 className="text-2xl font-bold">{film.title}</h3>
                                <p className="text-sm opacity-90">{film.subtitle}</p>
                              </div>
                              <a
                                href={film.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                              >
                                <ExternalLink className="w-6 h-6 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={film.thumbnail}
                            alt={film.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute top-4 left-4 flex items-center space-x-2">
                            <span className="px-3 py-1 rounded-full bg-red-500/80 text-white text-sm font-semibold">
                              {film.status}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <div className="text-white">
                                <h3 className="text-2xl font-bold">{film.title}</h3>
                                <p className="text-sm opacity-90">{film.subtitle}</p>
                              </div>
                              <Play className="w-12 h-12 text-white/80 hover:text-white cursor-pointer transition-colors" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="mb-4">
                        <span className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                          {film.type}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {film.description}
                      </p>

                      {/* M-PIRE Specific Details */}
                      {film.title === "M-PIRE" && (
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400">{film.event}</span>
                            <span className="text-gray-400">• {film.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-green-400" />
                            <span className="text-green-400">{film.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-400">Director: {film.director}</span>
                          </div>
                        </div>
                      )}

                      {/* MANGA-SEC Specific Details */}
                      {film.title === "MANGA-SEC" && (
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-400">Director: {film.director}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-400">Content: {film.content}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Star className="w-4 h-4 text-green-400" />
                            <span className="text-green-400">Format: {film.format}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Trophy className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-400">Focus: {film.focus}</span>
                          </div>
                        </div>
                      )}

                      {/* AVALORA Specific Details */}
                      {film.title === "AVALORA" && (
                        <div className="space-y-4 mb-6">
                          <div className="p-4 glass rounded-lg">
                            <h4 className="font-semibold text-blue-400 mb-2">Plot: "Shiro no Kizuna: Bonds of the White Snow"</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{film.plot}</p>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400">{film.blockchain}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-400">Director: {film.director}</span>
                          </div>
                        </div>
                      )}

                      {/* Themes/Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">
                          {film.title === "AVALORA" ? "Features" : "Themes"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(film.themes || film.features || []).map((theme: string, i: number) => (
                            <span
                              key={i}
                              className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Target Brands (M-PIRE only) */}
                      {film.targetBrands && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Targeted For Brands</h4>
                          <div className="flex flex-wrap gap-2">
                            {film.targetBrands.map((brand: string, i: number) => (
                              <span
                                key={i}
                                className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300"
                              >
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Characters (AVALORA only) */}
                      {film.characters && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Characters</h4>
                          <div className="flex flex-wrap gap-2">
                            {film.characters.map((character: string, i: number) => (
                              <span
                                key={i}
                                className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
                              >
                                {character}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impact Statement */}
                      {film.impact && (
                        <div className="mt-6 p-4 glass rounded-lg border border-blue-400/30">
                          <div className="flex items-center space-x-2">
                            <Trophy className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 font-semibold">{film.impact}</span>
                          </div>
                        </div>
                      )}
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
            <h2 className="text-3xl font-bold mb-6 gradient-text">AI Film Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-400">Major AI Shorts & Films</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
                <div className="text-gray-400">Expected Views</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400">Genres Explored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-gray-400">AI Tools Used</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIFilms;