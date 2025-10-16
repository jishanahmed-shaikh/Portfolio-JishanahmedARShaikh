import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const SpeakerSessions = () => {
    const sessions = [
        {
            title: "The Future of Cloud Computing",
            event: "Tech Summit 2024",
            date: "March 2024",
            audience: "500+ Attendees",
            description: "Delivered a keynote on emerging cloud technologies and their impact on modern software development.",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
            topics: ["Cloud Architecture", "Microservices", "DevOps"]
        },
        {
            title: "Building Scalable AR Experiences",
            event: "AR/VR Conference",
            date: "January 2024",
            audience: "300+ Developers",
            description: "Technical workshop on creating immersive AR applications that can scale to millions of users.",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
            topics: ["AR Development", "Performance", "User Experience"]
        },
        {
            title: "Community-Driven Innovation",
            event: "Developer Meetup",
            date: "December 2023",
            audience: "200+ Community Leaders",
            description: "Shared insights on building and scaling tech communities for maximum impact and collaboration.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
            topics: ["Community Building", "Leadership", "Collaboration"]
        }
    ];

    const upcomingSessions = [
        {
            title: "Leveraging AI in Education",
            event: "Ongoing Sprints Globally",
            date: "October 2025",
            status: "Upcoming"
        },
        {
            title: "The Evolution of Film Making and AI Tools",
            event: "Post AI x Film Making Festival (YouTube and Other Social Channels)",
            date: "October 2025",
            status: "Upcoming"
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
                        <h1 className="text-5xl font-bold mb-6 gradient-text">Speaker Sessions</h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Sharing knowledge and insights through keynotes, technical talks, and workshops
                            at conferences and events worldwide.
                        </p>
                    </motion.div>

                    {/* Past Sessions */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Recent Sessions</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sessions.map((session, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={session.image}
                                            alt={session.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-blue-400 mb-2">{session.event} • {session.date}</div>
                                        <h3 className="text-xl font-bold mb-3">{session.title}</h3>
                                        <p className="text-gray-400 mb-4">{session.description}</p>
                                        <div className="text-sm text-green-400 mb-4">{session.audience}</div>
                                        <div className="flex flex-wrap gap-2">
                                            {session.topics.map((topic, i) => (
                                                <span
                                                    key={i}
                                                    className="text-sm px-2 py-1 rounded-full bg-white/5"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Sessions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Sessions</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {upcomingSessions.map((session, index) => (
                                <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                                            <div className="text-blue-400">{session.event}</div>
                                            <div className="text-gray-400">{session.date}</div>
                                        </div>
                                        <span className="text-sm px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                                            {session.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Speaking Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="glass rounded-xl p-8 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6 gradient-text">Speaking Impact</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
                                <div className="text-gray-400">Sessions Delivered</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-green-400 mb-2">3000+</div>
                                <div className="text-gray-400">Total Audience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                                <div className="text-gray-400">Countries Reached</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-orange-400 mb-2">20+</div>
                                <div className="text-gray-400">Topics Covered</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SpeakerSessions;