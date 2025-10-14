import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const EventsConferences = () => {
  const organizedEvents = [
    {
      title: "ArcadeOps Tech Summit",
      type: "Conference",
      date: "September 2023",
      attendees: "800+ Participants",
      description: "Annual tech conference featuring industry leaders, workshops, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      highlights: ["20+ Speakers", "Global Audience", "Live Streaming"]
    },
    {
      title: "Cloud Innovation Hackathon",
      type: "Hackathon",
      date: "June 2023",
      attendees: "200+ Developers",
      description: "48-hour hackathon focused on building innovative cloud-native solutions.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      highlights: ["48 Hours", "Cloud Focus", "Prize Pool"]
    },
    {
      title: "AR/VR Developer Workshop",
      type: "Workshop",
      date: "March 2023",
      attendees: "150+ Developers",
      description: "Hands-on workshop teaching AR/VR development using latest technologies.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696",
      highlights: ["Hands-on Learning", "Latest Tech", "Expert Guidance"]
    }
  ];

  const participatedEvents = [
    {
      title: "Google I/O 2023",
      role: "Speaker",
      location: "Mountain View, CA",
      description: "Presented on cloud architecture patterns and best practices."
    },
    {
      title: "AWS re:Invent 2023",
      role: "Panelist",
      location: "Las Vegas, NV",
      description: "Participated in panel discussion on serverless computing trends."
    },
    {
      title: "Microsoft Build 2023",
      role: "Workshop Leader",
      location: "Seattle, WA",
      description: "Led workshop on building scalable applications with Azure."
    },
    {
      title: "DockerCon 2023",
      role: "Technical Speaker",
      location: "Los Angeles, CA",
      description: "Delivered technical session on container orchestration strategies."
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Events & Conferences</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Organizing impactful tech events and participating in major industry conferences 
              to foster knowledge sharing and community building.
            </p>
          </motion.div>

          {/* Organized Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Events I've Organized</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizedEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-400">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="text-sm text-green-400 mb-4">{event.attendees}</div>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, i) => (
                        <span 
                          key={i} 
                          className="text-sm px-2 py-1 rounded-full bg-white/5"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Participated Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Major Conference Participation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {participatedEvents.map((event, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="text-blue-400 mb-1">{event.role}</div>
                      <div className="text-gray-400 text-sm">{event.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Event Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Event Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Events Organized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2000+</div>
                <div className="text-gray-400">Total Attendees</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-400">Conference Participations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
                <div className="text-gray-400">Countries Visited</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventsConferences;