
import { motion } from "framer-motion";
import { Award } from "lucide-react";

// Sample certifications data
const certifications = [
  {
    title: "Google Cloud Professional Architect",
    issuer: "Google Cloud",
    date: "2023",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    date: "2021",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2021",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  }
];

const CertificationCard = ({ cert, index }: { cert: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    className="glass rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5"
  >
    <div className="p-2 flex justify-center bg-gradient-to-r from-gray-900 to-black">
      <img src={cert.image} alt={cert.title} className="h-28 w-28 object-contain" />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
      <p className="text-sm text-blue-300">{cert.issuer}</p>
      <p className="text-xs text-gray-400 mt-2">{cert.date}</p>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-6"
        >
          <Award className="w-8 h-8 mr-3 text-blue-400" />
          <h2 className="text-4xl font-bold gradient-text">Certifications & Badges</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Professional credentials demonstrating expertise across cloud platforms and technologies
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
