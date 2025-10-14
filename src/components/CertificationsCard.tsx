import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCertifications = [
  {
    title: "Google Cloud Professional Architect",
    issuer: "Google Cloud",
    image: "https://images.credly.com/size/680x680/images/5420d43c-a4bd-4152-81a5-3c0fff2b2c1a/image.png"
  },
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    title: "Kubernetes Administrator",
    issuer: "CNCF",
    image: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncftrainingcertification.png"
  }
];

const CertificationsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <Award className="w-6 h-6 mr-3 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">Certifications & Credibility</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Professional credentials validating expertise across cloud platforms and technologies.
      </p>
      
      <div className="grid grid-cols-3 gap-3 mb-6">
        {featuredCertifications.map((cert, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="h-12 w-12 object-contain mb-2" 
              loading="lazy"
            />
            <p className="text-xs text-gray-300 text-center">{cert.issuer}</p>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-400 mb-4">
        <span className="text-blue-400 font-semibold">6+</span> professional certifications
      </div>
      
      <Link 
        to="/certifications" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
      >
        View All Certifications
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default CertificationsCard;