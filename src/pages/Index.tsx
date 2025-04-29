import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Community from "../components/Community";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import TicTacToe from "../components/TicTacToe";
import Footer from "../components/Footer";
import SkillsExpertise from "../components/SkillsExpertise";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MyStory />
          <SkillsExpertise />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Community />
          <Contact />
          <TicTacToe />
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
