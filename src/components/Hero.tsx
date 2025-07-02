import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram, Twitter, ArrowUp } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/jishanahmed-shaikh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jishanahmedshaikh/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@jishanahmedarshaikh", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/jishanahmed_shaikh", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/jishanarshaikh", label: "Twitter" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden z-20">
      <nav className="absolute top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <img
              src="/my-images/mainlogo.png"
              alt="Logo"
              className="w-12 h-11 cursor-pointer rounded p-1 shadow"
              onClick={scrollToTop}
            />
          </motion.div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#about" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#tech-stack" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >Tech Stack</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#experience" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >Experience</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#education" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >Education</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#community" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("community")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >Community</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#contact" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black z-10" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 2.0 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img
            src="/my-images/jishanahmed.png"
            alt="Profile"
            className="w-full h-full object-cover grayscale object-top"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pt-48 lg:pt-56 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-2xl ml-0 md:ml-12 lg:ml-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Jishanahmed AR Shaikh
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">
           AI & Cloud Engineer | Tech. Creator | Full Stack Developer | Entrepreneur |
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experienced Technology Visionary with expertise in AI Engineering and Cloud Computing with proven 
            experience in Business Leadership, Operations and Community Development.
            Passionate about driving innovation through technological and business skills
            to foster individual and collective growth.
          </p>
          <div className="flex gap-6 justify-center mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full neo-glass hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </section>
  );
};

export default Hero;
