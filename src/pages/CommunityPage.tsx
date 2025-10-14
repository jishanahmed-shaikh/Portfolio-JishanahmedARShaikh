import { motion } from "framer-motion";
import { ArrowLeft, Users, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const communityActivities = [
  {
    title: "ArcadeOps Community",
    role: "Founder & Director",
    members: "1500+",
    description: "Built and scaled a technical community focused on DevOps, Cloud, and emerging technologies. Organized workshops, hackathons, and networking events.",
    achievements: ["1500+ active members", "50+ workshops conducted", "20+ hackathons organized"],
    icon: <Users className="w-6 h-6" />,
    period: "2022 - Present"
  },
  {
    title: "Google Developer Groups",
    role: "Cloud Head",
    members: "800+",
    description: "Leading cloud initiatives and training sessions for student developers at GDG on Campus APSIT, focused on Google Cloud technologies.",
    achievements: ["800+ students trained", "30+ cloud workshops", "GCP certification guidance"],
    icon: <Globe className="w-6 h-6" />,
    period: "2021 - Present"
  },
  {
    title: "Pieces for Developers",
    role: "Ambassador",
    members: "Global",
    description: "Representing cutting-edge developer productivity tools and advocating best practices in software development across the developer community.",
    achievements: ["Developer advocacy", "Content creation", "Community engagement"],
    icon: <Heart className="w-6 h-6" />,
    period: "2022 - Present"
  },
  {
    title: "Google Cloud Arcade",
    role: "Facilitator",
    members: "500+",
    description: "Leading workshops and training sessions for cloud technologies adoption across enterprise clients and developer communities.",
    achievements: ["500+ professionals trained", "Enterprise workshops", "Cloud adoption guidance"],
    icon: <Users className="w-6 h-6" />,
    period: "2023 - Present"
  }
];

const contributions = [
  {
    title: "Open Source Contributions",
    description: "Active contributor to various open source projects in cloud, DevOps, and AR development",
    impact: "10+ repositories"
  },
  {
    title: "Technical Mentorship",
    description: "Mentoring junior developers and students in cloud technologies and career development",
    impact: "100+ mentees"
  },
  {
    title: "Content Creation",
    description: "Creating technical content, tutorials, and documentation for developer communities",
    impact: "50+ articles"
  },
  {
    title: "Speaking Engagements",
    description: "Regular speaker at tech conferences, meetups, and community events",
    impact: "25+ talks"
  }
];

const CommunityCard = ({ activity, index }: { activity: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    className="glass rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="text-blue-400">
        {activity.icon}
      </div>
      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
        {activity.members} Members
      </span>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
    <p className="text-blue-300 font-medium mb-1">{activity.role}</p>
    <p className="text-gray-400 text-sm mb-3">{activity.period}</p>
    <p className="text-gray-300 mb-4">{activity.description}</p>
    
    <div className="space-y-1">
      <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
      {activity.achievements.map((achievement: string, i: number) => (
        <div key={i} className="text-xs text-gray-300 flex items-center">
          <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
          {achievement}
        </div>
      ))}
    </div>
  </motion.div>
);

const ContributionCard = ({ contribution, index }: { contribution: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass rounded-lg p-4 bg-gradient-to-r from-white/5 to-white/10"
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-semibold text-white">{contribution.title}</h4>
      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
        {contribution.impact}
      </span>
    </div>
    <p className="text-sm text-gray-300">{contribution.description}</p>
  </motion.div>
);

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6"
          >
            <Users className="w-8 h-8 mr-3 text-blue-400" />
            <h1 className="text-5xl font-bold gradient-text">Community Involvement</h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl"
          >
            Community building and knowledge sharing are at the heart of my professional journey. 
            I believe in empowering others through education, mentorship, and collaborative innovation.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {communityActivities.map((activity, index) => (
              <CommunityCard key={index} activity={activity} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Additional Contributions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contributions.map((contribution, index) => (
              <ContributionCard key={index} contribution={contribution} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;