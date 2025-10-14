import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission with better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/10 to-purple-800/10 z-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <MessageSquare className="w-8 h-8 mr-3 text-blue-400" />
          <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="neo-glass p-6 rounded-xl hover-lift"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-15 mr-3 text-blue-400" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <a href="mailto:shaikhjishan255@gmail.com" className="text-blue-300 hover:text-blue-400 transition-colors">
                shaikhjishan255@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="neo-glass p-6 rounded-xl hover-lift"
            >
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-15 mr-3 text-blue-400" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <a href="tel:+918591764236" className="text-blue-300 hover:text-blue-400 transition-colors">
                +91 8591764236
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="neo-glass p-6 rounded-xl hover-lift"
            >
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-15 mr-3 text-blue-400" />
                <h3 className="text-xl font-semibold">Book a Meeting</h3>
              </div>
              <a href="tel:+918591764236" className="text-blue-300 hover:text-blue-400 transition-colors">
                +91 8591764236
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="neo-glass p-8 rounded-xl space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-200">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-200">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-200">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/20 h-32 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg ${isSubmitting
                    ? "bg-gray-500"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    } transition-all duration-300 font-medium relative overflow-hidden group`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 py-2 px-3 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;