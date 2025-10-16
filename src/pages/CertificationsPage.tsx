import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const certifications = [
  {
    title: "Google Cloud Professional Architect",
    issuer: "Google Cloud",
    date: "2023",
    image: "https://images.credly.com/size/680x680/images/5420d43c-a4bd-4152-81a5-3c0fff2b2c1a/image.png",
    description: "Demonstrates expertise in designing and managing Google Cloud solutions"
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    description: "Validates technical expertise in designing distributed systems on AWS"
  },
  {
    title: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    date: "2021",
    image: "https://images.credly.com/size/680x680/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
    description: "Proves skills in implementing, managing, and monitoring Azure environments"
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncftrainingcertification.png",
    description: "Demonstrates expertise in Kubernetes cluster administration"
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
    description: "Validates foundational skills in Infrastructure as Code using Terraform"
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "2021",
    image: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    description: "Demonstrates proficiency in containerization and Docker technologies"
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
    <div className="p-4 flex justify-center bg-gradient-to-r from-gray-900 to-black">
      <img
        src={cert.image}
        alt={cert.title}
        className="h-32 w-32 object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
      <p className="text-blue-300 font-medium mb-1">{cert.issuer}</p>
      <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
      <p className="text-gray-300 text-sm">{cert.description}</p>
    </div>
  </motion.div>
);

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6"
          >
            <Award className="w-8 h-8 mr-3 text-blue-400" />
            <h1 className="text-5xl font-bold gradient-text">Certifications & Credibility</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl"
          >
            Professional credentials that validate my expertise across cloud platforms, containerization,
            and infrastructure technologies. These certifications demonstrate my commitment to staying
            current with industry standards and best practices.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;