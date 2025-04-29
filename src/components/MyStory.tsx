
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
              My journey in technology began with a passion for innovation and problem-solving. As a Cloud Engineer and Tech Leader with over 5 years of experience, I've specialized in architecting robust cloud solutions and leading technological initiatives across various domains.
            </p>
            <p className="text-lg text-gray-300">
              My entrepreneurial drive led me to establish Antibits Solutions, serving 300+ clients with innovative tech solutions, and founding the ArcadeOps Community, a Google Cloud-focused platform that has trained over 1500 students.
            </p>
            <p className="text-lg text-gray-300">
              Beyond my core expertise in Cloud Computing and Business Leadership, I explore creative outlets through AR Development as a SnapAR Developer, creating experiences reaching over 1.5M+ users. My background in Embedded Systems has given me unique insights into the full technology stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"/>
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
