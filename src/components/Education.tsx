
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    major: "Computer Engineering",
    institution: "University of Mumbai, APSIT",
    duration: "2018 - 2022",
    description: "Focused on cloud infrastructure, embedded systems, and IoT development."
  },
  {
    degree: "Higher Secondary Certificate",
    major: "Science",
    institution: "Maharashtra State Board",
    duration: "2016 - 2018",
    description: "Specialized in Physics, Chemistry, and Mathematics with Computer Science."
  },
  {
    degree: "Secondary School Certificate",
    institution: "Maharashtra State Board",
    duration: "2016",
    description: "Comprehensive foundation in science and mathematics with distinction."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass bg-gradient-to-br from-white/10 to-white/5 border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{item.degree}</CardTitle>
                  {item.major && (
                    <CardDescription className="text-blue-300">{item.major}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
