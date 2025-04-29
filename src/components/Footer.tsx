import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/jishanahmed-shaikh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jishanahmedshaikh/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@jishanahmedarshaikh", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/jishanahmed_shaikh", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/jishanarshaikh", label: "Twitter" },
  ];

  return (
    <footer className="py-10 border-t border-white/10 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-gray-400">
              © {currentYear} Jishanahmed AR Shaikh. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
