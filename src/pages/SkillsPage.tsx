import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const skillCategories = {
  "Programming Languages": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", color: "#276DC3" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", color: "#00ADD8" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg", color: "#CE422B" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" }
  ],
  
  "Cloud & DevOps": [
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078D4" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "#7B42BC" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" }
  ],

  "Frameworks & Libraries": [
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
    { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", color: "#000000" },
    { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", color: "#0E1128" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" }
  ],

  "AI & Machine Learning": [
    { name: "OpenAI", icon: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg", color: "#10A37F" },
    { name: "ChatGPT", icon: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg", color: "#10A37F" },
    { name: "Claude AI", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcZqKSWnKOK8koNnPz7p3h8TX8XTLn8TQdA&s", color: "#D97706" },
    { name: "Gemini", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png", color: "#4285F4" },
    { name: "Midjourney", icon: "https://cdn.worldvectorlogo.com/logos/midjourney.svg", color: "#000000" },
    { name: "DALL-E", icon: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg", color: "#10A37F" },
    { name: "Stable Diffusion", icon: "https://cdn.worldvectorlogo.com/logos/stability-ai.svg", color: "#000000" },
    { name: "Runway ML", icon: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_favicon-32x32.png", color: "#000000" }
  ],

  "Video Generation & AI Video": [
    { name: "Sora", icon: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg", color: "#10A37F" },
    { name: "Veo", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png", color: "#4285F4" },
    { name: "Pika Labs", icon: "https://framerusercontent.com/images/kCXJkrLbcaANNlKd3wgUEWqzlA.png", color: "#FF6B6B" },
    { name: "Luma AI", icon: "https://cdn.prod.website-files.com/66b1b6d6b57cde2b49c74c3e/66b1b6d6b57cde2b49c74c8e_luma-ai-favicon.png", color: "#000000" },
    { name: "Synthesia", icon: "https://cdn.worldvectorlogo.com/logos/synthesia.svg", color: "#7C3AED" },
    { name: "D-ID", icon: "https://assets-global.website-files.com/5f7aa4c0b1b8b8c8b8c8b8c8/5f7aa4c0b1b8b8c8b8c8b8c9_d-id-logo.png", color: "#000000" }
  ],

  "Video & Photo Editing": [
    { name: "Adobe Premiere", icon: "https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg", color: "#9999FF" },
    { name: "Adobe After Effects", icon: "https://cdn.worldvectorlogo.com/logos/after-effects-cc.svg", color: "#9999FF" },
    { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", color: "#31A8FF" },
    { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", color: "#FF9A00" },
    { name: "ClipChamp", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Clipchamp_Logo.svg/2048px-Clipchamp_Logo.svg.png", color: "#0078D4" },
    { name: "DaVinci Resolve", icon: "https://cdn.worldvectorlogo.com/logos/davinci-resolve.svg", color: "#233A51" },
    { name: "Final Cut Pro", icon: "https://cdn.worldvectorlogo.com/logos/final-cut-pro.svg", color: "#000000" },
    { name: "CapCut", icon: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/capcut/resource/image/favicon.ico", color: "#000000" }
  ],

  "Audio Production & DJ": [
    { name: "Virtual DJ", icon: "https://cdn.worldvectorlogo.com/logos/virtualdj.svg", color: "#FF0000" },
    { name: "Serato DJ", icon: "https://cdn.worldvectorlogo.com/logos/serato.svg", color: "#00D4AA" },
    { name: "Audacity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/audacity/audacity-original.svg", color: "#0000CC" },
    { name: "FL Studio", icon: "https://cdn.worldvectorlogo.com/logos/fl-studio-2.svg", color: "#FF7300" },
    { name: "Ableton Live", icon: "https://cdn.worldvectorlogo.com/logos/ableton-live.svg", color: "#000000" },
    { name: "Logic Pro", icon: "https://cdn.worldvectorlogo.com/logos/logic-pro.svg", color: "#000000" },
    { name: "Pro Tools", icon: "https://cdn.worldvectorlogo.com/logos/pro-tools-1.svg", color: "#7ACB10" }
  ],

  "Content Creation & Streaming": [
    { name: "OBS Studio", icon: "https://cdn.worldvectorlogo.com/logos/obs-studio.svg", color: "#302E31" },
    { name: "Streamlabs", icon: "https://cdn.worldvectorlogo.com/logos/streamlabs.svg", color: "#31C3A2" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", color: "#00C4CC" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", color: "#F5792A" },
    { name: "ElevenLabs", icon: "https://help.elevenlabs.io/hc/article_attachments/13791648888209", color: "#000000" },
    { name: "Murf AI", icon: "https://murf.ai/favicon.ico", color: "#6366F1" },
    { name: "Speechify", icon: "https://speechify.com/favicon.ico", color: "#FF6B35" }
  ],

  "Hardware & IoT": [
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979D" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", color: "#A22846" }
  ]
};

const SkillItem = ({ skill }: { skill: { name: string; icon: string; color: string } }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center glass p-4 rounded-lg shadow-lg transition-all duration-300"
    style={{
      background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
      borderColor: skill.color,
      boxShadow: `0 4px 12px rgba(0,0,0,0.15), 0 0 5px ${skill.color}40`
    }}
  >
    <div className="h-12 w-12 mb-3 flex items-center justify-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="max-h-full max-w-full"
        loading="lazy"
        decoding="async"
      />
    </div>
    <span className="text-sm font-medium">{skill.name}</span>
  </motion.div>
);

const SkillsPage = () => {
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 gradient-text"
          >
            Skills & Technologies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl"
          >
            A comprehensive overview of my technical expertise spanning programming languages, cloud platforms, AI tools, 
            video generation, audio production, and multimedia content creation. From full-stack development to AI-powered 
            content creation and professional audio/video editing.
          </motion.p>

          <div className="space-y-16">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="gradient-text">{category}</span>
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <SkillItem skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;