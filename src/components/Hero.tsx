import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram, Twitter, ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              alt="Jishanahmed AR Shaikh - Portfolio Logo"
              className="w-12 h-11 cursor-pointer rounded p-1 shadow"
              onClick={scrollToTop}
              loading="eager"
              decoding="async"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToTop();
                }
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#home"
                    className="text-white hover:text-blue-300 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTop();
                    }}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Professional Overview Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-blue-300 transition-colors duration-300 bg-transparent">
                    Overview
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass backdrop-blur-md border border-white/10">
                    <div className="grid gap-3 p-4 w-[400px]">
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to="/skills"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Skills & Technologies</div>
                          <div className="text-xs text-gray-400">Technical expertise</div>
                        </Link>
                        <Link
                          to="/experience"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Experience</div>
                          <div className="text-xs text-gray-400">Professional journey</div>
                        </Link>
                        <Link
                          to="/certifications"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Certifications</div>
                          <div className="text-xs text-gray-400">Professional credentials</div>
                        </Link>
                        <Link
                          to="/recognitions"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Awards</div>
                          <div className="text-xs text-gray-400">Recognition & achievements</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Community Contributions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-blue-300 transition-colors duration-300 bg-transparent">
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass backdrop-blur-md border border-white/10">
                    <div className="grid gap-3 p-4 w-[450px]">
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to="/community"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Community Building</div>
                          <div className="text-xs text-gray-400">1500+ members impacted</div>
                        </Link>
                        <Link
                          to="/speaker-sessions"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Speaker Sessions</div>
                          <div className="text-xs text-gray-400">25+ sessions delivered</div>
                        </Link>
                        <Link
                          to="/events-conferences"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Events & Conferences</div>
                          <div className="text-xs text-gray-400">15+ events organized</div>
                        </Link>
                        <Link
                          to="/ar-projects"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">AR Projects</div>
                          <div className="text-xs text-gray-400">1.5M+ users reached</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Creative Works Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-blue-300 transition-colors duration-300 bg-transparent">
                    Creative
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass backdrop-blur-md border border-white/10">
                    <div className="grid gap-3 p-4 w-[350px]">
                      <div className="grid grid-cols-1 gap-2">
                        <Link
                          to="/ai-films"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">AI Films & Creations</div>
                          <div className="text-xs text-gray-400">20+ AI films created</div>
                        </Link>
                        <Link
                          to="/gallery"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">Personal Gallery</div>
                          <div className="text-xs text-gray-400">Photos, videos & creative content</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Projects */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#projects"
                    className="text-white hover:text-blue-300 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="text-white hover:text-blue-300 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 shadow-2xl"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {/* Home */}
                <button
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-white hover:text-blue-300 transition-colors py-2"
                >
                  Home
                </button>

                {/* Overview Section */}
                <div className="border-l-2 border-blue-400 pl-4">
                  <div className="text-blue-300 font-semibold mb-2">Professional Overview</div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/skills"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Skills & Technologies
                    </Link>
                    <Link
                      to="/experience"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Experience
                    </Link>
                    <Link
                      to="/certifications"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Certifications
                    </Link>
                    <Link
                      to="/recognitions"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Awards
                    </Link>
                  </div>
                </div>

                {/* Community Section */}
                <div className="border-l-2 border-green-400 pl-4">
                  <div className="text-green-300 font-semibold mb-2">Community Contributions</div>
                  <div className="grid grid-cols-1 gap-2">
                    <Link
                      to="/community"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Community Building
                    </Link>
                    <Link
                      to="/speaker-sessions"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Speaker Sessions
                    </Link>
                    <Link
                      to="/events-conferences"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Events & Conferences
                    </Link>
                    <Link
                      to="/ar-projects"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AR Projects
                    </Link>
                  </div>
                </div>

                {/* Creative Section */}
                <div className="border-l-2 border-purple-400 pl-4">
                  <div className="text-purple-300 font-semibold mb-2">Creative Works</div>
                  <div className="grid grid-cols-1 gap-2">
                    <Link
                      to="/ai-films"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Films & Creations
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Personal Gallery
                    </Link>
                  </div>
                </div>

                {/* Projects */}
                <button
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-white hover:text-blue-300 transition-colors py-2"
                >
                  Projects
                </button>

                {/* Contact */}
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-white hover:text-blue-300 transition-colors py-2"
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
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
            loading="eager"
            decoding="async"
            fetchPriority="high"
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
            AI & Cloud Engineer | Full Stack Developer | AI Film Maker
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Experienced Developer / Engineer with expertise in AI, Cloud, and Data Engineering, 
          bringing proven experience in Business Operations, Leadership, and Community Development. 
          Passionate about blending technology and creativity through AR experiences and AI-driven films, 
          helping small-scale brands grow through innovation, automation, and storytelling.
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
