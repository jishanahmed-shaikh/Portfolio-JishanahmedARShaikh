import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, Clock, Bell } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const EventsConferences = () => {
  const upcomingEvents = [
    {
      title: "Snapchat India AR Day 2025",
      type: "Conference",
      date: "January 2025",
      status: "Completed",
      description: "Major AR conference showcasing the latest in augmented reality technology and innovation."
    },
    {
      title: "WAVES Summit 2025",
      type: "Summit",
      date: "May 2025",
      status: "Completed",
      description: "Premier technology summit bringing together industry leaders and innovators."
    },
    {
      title: "PitchDen - Startup Funding Event",
      type: "Startup Event",
      date: "January 2025",
      status: "Completed",
      description: "Exclusive startup funding event connecting entrepreneurs with investors."
    },
    {
      title: "Google DevFest",
      type: "Developer Conference",
      date: "March 2025",
      status: "Completed",
      description: "Google's flagship developer conference featuring the latest in technology and development."
    },
    {
      title: "AWS Summit",
      type: "Cloud Conference",
      date: "July 2025",
      status: "Completed",
      description: "Amazon Web Services summit showcasing cloud innovations and best practices."
    },
    {
      title: "AGENTCON Mumbai",
      type: "AI Conference",
      date: "June 2025",
      status: "Completed",
      description: "Leading AI and agent technology conference in Mumbai."
    }
  ];

  const pastEvents = [
    {
      title: "ArcadeOps Tech Summit",
      type: "Conference",
      date: "September 2023",
      attendees: "800+ Participants",
      role: "Organizer & Speaker"
    },
    {
      title: "Cloud Innovation Hackathon",
      type: "Hackathon",
      date: "June 2023",
      attendees: "200+ Developers",
      role: "Judge & Mentor"
    },
    {
      title: "AR/VR Developer Workshop",
      type: "Workshop",
      date: "March 2023",
      attendees: "150+ Developers",
      role: "Workshop Leader"
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

            {/* Media Coming Soon Notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 mx-auto max-w-md"
            >
              <div className="glass rounded-lg p-4 border border-blue-400/30 bg-blue-500/10">
                <div className="flex items-center justify-center space-x-2 text-blue-400">
                  <Bell className="w-5 h-5 animate-pulse" />
                  <span className="font-semibold">Event & Conference Media Coming Soon</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Event Impact Stats - Moved to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-xl p-8 text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Event Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Major Events & Conferences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-blue-400/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-sm px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Status</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                        Completed
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-8"
            >
              <div className="glass rounded-lg p-4 inline-block">
                <span className="text-gray-400 text-sm">...and many more exciting events coming soon!</span>
              </div>
            </motion.div>
          </div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Past Events & Conferences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-sm px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                        {event.type}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">{event.attendees}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400">{event.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventsConferences;