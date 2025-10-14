import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Media" },
    { id: "events", name: "Events" },
    { id: "speaking", name: "Speaking" },
    { id: "projects", name: "Projects" },
    { id: "personal", name: "Personal" },
    { id: "awards", name: "Awards" }
  ];

  const mediaItems = [
    {
      id: 1,
      title: "ArcadeOps Tech Summit 2023",
      category: "events",
      type: "photo",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      description: "Opening keynote at ArcadeOps Tech Summit with 800+ attendees"
    },
    {
      id: 2,
      title: "Google I/O Speaker Session",
      category: "speaking",
      type: "photo",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      description: "Presenting cloud architecture patterns at Google I/O 2023"
    },
    {
      id: 3,
      title: "AR Experience Development",
      category: "projects",
      type: "video",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc596",
      description: "Behind the scenes of creating AR experiences for Snapchat"
    },
    {
      id: 4,
      title: "Innovation Award Ceremony",
      category: "awards",
      type: "photo",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
      description: "Receiving the Innovation Excellence Award for AI Films project"
    },
    {
      id: 5,
      title: "Team Building Workshop",
      category: "personal",
      type: "photo",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description: "Leading a team building workshop for the ArcadeOps community"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Demo",
      category: "projects",
      type: "video",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Live demonstration of scalable cloud solutions architecture"
    },
    {
      id: 7,
      title: "Hackathon Judging Panel",
      category: "events",
      type: "photo",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      description: "Serving as a judge at the Cloud Innovation Hackathon"
    },
    {
      id: 8,
      title: "AI Film Festival Screening",
      category: "awards",
      type: "photo",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      description: "Premiere screening of 'Neural Dreams' at AI Film Festival"
    },
    {
      id: 9,
      title: "Community Meetup",
      category: "personal",
      type: "photo",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      description: "Casual meetup with community members and fellow developers"
    },
    {
      id: 10,
      title: "Technical Workshop",
      category: "speaking",
      type: "video",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      description: "Hands-on AR development workshop for 150+ developers"
    },
    {
      id: 11,
      title: "Startup Pitch Competition",
      category: "events",
      type: "photo",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      description: "Mentoring startups at the annual pitch competition"
    },
    {
      id: 12,
      title: "Personal Achievement",
      category: "personal",
      type: "photo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Celebrating a personal milestone in my tech journey"
    }
  ];

  const filteredItems = selectedCategory === "all"
    ? mediaItems
    : mediaItems.filter(item => item.category === selectedCategory);

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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Personal Media Gallery</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of photos, videos, and moments from my journey in technology,
              community building, and creative projects.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "glass hover:bg-white/10"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${item.category === 'events' ? 'bg-blue-500/80' :
                      item.category === 'speaking' ? 'bg-green-500/80' :
                        item.category === 'projects' ? 'bg-purple-500/80' :
                          item.category === 'awards' ? 'bg-yellow-500/80' :
                            'bg-gray-500/80'
                      }`}>
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass rounded-xl p-8 text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Gallery Statistics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{mediaItems.length}</div>
                <div className="text-gray-400">Total Media Items</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {mediaItems.filter(item => item.category === 'events').length}
                </div>
                <div className="text-gray-400">Event Photos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {mediaItems.filter(item => item.type === 'video').length}
                </div>
                <div className="text-gray-400">Video Content</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {mediaItems.filter(item => item.category === 'awards').length}
                </div>
                <div className="text-gray-400">Award Moments</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;