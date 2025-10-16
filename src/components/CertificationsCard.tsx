import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCertifications = [
  {
    title: "500+ Google Cloud Skill Badges",
    issuer: "Google Cloud",
    image: "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853c206539e5ca8fb3f1bf18e9c8db9ab0/cloud/images/cloud-logo.svg"
  },
  {
    title: "AWS Certified Cloud Graduate",
    issuer: "AWS",
    image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
  },
  {
    title: "Data Analysis with Python",
    issuer: "FreeCodeCamp",
    image: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
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
        <span className="text-blue-400 font-semibold">500+</span> Google Cloud badges
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