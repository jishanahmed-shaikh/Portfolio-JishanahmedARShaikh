
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const communityEvents = [
  {
    title: "Cloud Computing Workshop",
    date: "March 2024",
    location: "GDG APSIT",
    description: "Hands-on workshop on Google Cloud Platform fundamentals and best practices",
    participants: 200
  },
  {
    title: "AR Development Masterclass",
    date: "February 2024",
    location: "ArcadeOps Community",
    description: "Deep dive into Snap AR development and lens creation",
    participants: 150
  },
  {
    title: "Tech Leadership Summit",
    date: "January 2024",
    location: "LixtaNetwork",
    description: "Panel discussion on emerging technologies and leadership in tech",
    participants: 300
  },
  {
    title: "DevOps & Cloud Integration",
    date: "December 2023",
    location: "Google Cloud Arcade",
    description: "Workshop on integrating DevOps practices with cloud infrastructure",
    participants: 180
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <Users className="w-8 h-8 mr-3 text-blue-400" />
          <h2 className="text-4xl font-bold gradient-text">Community Talks & Contributions</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {communityEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{event.title}</h3>
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <p className="text-gray-300 mb-3">{event.description}</p>
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-2" />
                <span>{event.participants}+ Participants</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
