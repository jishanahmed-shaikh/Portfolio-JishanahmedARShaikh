import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const certifications = [
  {
    title: "500+ Skill Badges on Google Cloud SkillBoost",
    issuer: "Google Cloud Skills Boost",
    date: "2024-2025",
    image: "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853c206539e5ca8fb3f1bf18e9c8db9ab0/cloud/images/cloud-logo.svg",
    description: "Earned over 500 skill badges demonstrating comprehensive expertise across Google Cloud services, AI/ML, cloud architecture, and advanced cloud technologies. Top 1% of learners globally."
  },
  {
    title: "AWS Certified Cloud Graduate",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
    description: "Foundational certification demonstrating understanding of AWS cloud services, architecture principles, security best practices, and cost optimization strategies."
  },
  {
    title: "Data Analysis with Python",
    issuer: "FreeCodeCamp",
    date: "2024",
    image: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
    description: "Comprehensive certification covering advanced data analysis techniques using Python libraries including Pandas, NumPy, Matplotlib, and statistical analysis methods."
  },
  {
    title: "Developing GenAI Apps with Gemini & Streamlit",
    issuer: "Google Cloud Skills Boost",
    date: "2024",
    image: "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853c206539e5ca8fb3f1bf18e9c8db9ab0/cloud/images/cloud-logo.svg",
    description: "Specialized certification for building generative AI applications using Google's Gemini AI model and Streamlit framework for creating interactive AI-powered web applications."
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud Skills Boost",
    date: "2024",
    image: "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853c206539e5ca8fb3f1bf18e9c8db9ab0/cloud/images/cloud-logo.svg",
    description: "Advanced certification focusing on prompt engineering and design patterns in Vertex AI, covering best practices for AI model interaction and optimization."
  },
  {
    title: "Data Science & Machine Learning with R",
    issuer: "Udemy",
    date: "2023",
    image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    description: "Comprehensive course covering data science methodologies, statistical analysis, and machine learning algorithms using R programming language for data visualization and predictive modeling."
  },
  {
    title: "Young Python Professional",
    issuer: "Infosys",
    date: "2023",
    image: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-svg.svg",
    description: "Professional certification recognizing advanced Python programming skills, object-oriented programming expertise, software development best practices, and professional coding standards."
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