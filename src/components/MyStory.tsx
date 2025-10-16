
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const MyStory = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <Award className="w-8 h-8 mr-3 text-blue-400" />
          <h2 className="text-4xl font-bold gradient-text">My Story</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              My journey in technology began with a deep curiosity for how ideas transform into impactful realities. Over the years, I’ve evolved into a Full Stack Engineer with expertise in Cloud, AI, and Data Engineering, building scalable systems that bridge innovation with real-world usability.
            </p>
            <p className="text-lg text-gray-300">
              As the founder of Antibits Solutions, I’ve delivered cutting-edge tech solutions to over 300 clients, blending cloud-native architectures with intelligent automation. My community initiative, ArcadeOps, has empowered 2,000+ students to master Google Cloud and modern DevOps practices fueling the next generation of cloud innovators.
            </p>
            <p className="text-lg text-gray-300">
              Beyond engineering, I’m passionate about Augmented Reality and AI-driven Filmmaking, where I merge storytelling, technology, and design to create immersive digital experiences. My creative work as a SnapAR Developer has reached over 3 million users, showcasing how art and AI can redefine human connection.
            </p>
            <p className="text-lg text-gray-300">
              Rooted in a foundation of Embedded Systems and IoT, I bring an end-to-end perspective to technology connecting hardware, data, and intelligence to craft experiences that inspire, inform, and innovate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <img
              src="/my-images/jishanahmed.png"
              alt="Jishanahmed Profile"
              className="relative z-10 rounded-3xl shadow-2xl neo-glass object-cover h-96 w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
