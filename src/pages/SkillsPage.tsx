import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const skillCategories = {
  "Programming Languages": [
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", color: "#3776AB" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", color: "#ED8B00" },
    { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/rust/rust-plain.svg", color: "#CE422B" },
    { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg", color: "#00ADD8" },
    { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", color: "#A8B9CC" },
    { name: "C#", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", color: "#239120" },
    { name: "R", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg", color: "#276DC3" }
  ],

  "Frontend Development": [
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", color: "#000000" },
    { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
    { name: "TailwindCSS", icon: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
    { name: "Sass", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", color: "#CC6699" },
    { name: "Redux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg", color: "#764ABC" },
    { name: "Vite", icon: "https://vitejs.dev/logo-with-shadow.png", color: "#646CFF" },
    { name: "shadcn/ui", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", color: "#000000" },
    { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg", color: "#7952B3" }
  ],

  "Backend Development": [
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", color: "#000000" },
    { name: "NestJS", icon: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg", color: "#E0234E" },
    { name: "Django", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", color: "#092E20" },
    { name: "Flask", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", color: "#000000" },
    { name: "FastAPI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg", color: "#009688" },
    { name: "Spring", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", color: "#6DB33F" },
    { name: ".NET", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg", color: "#512BD4" }
  ],

  "Database": [
    { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg", color: "#DC382D" },
    { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", color: "#FFCA28" },
    { name: "SQLite", icon: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/sqlite/sqlite-original.svg", color: "#003B57" },
    { name: "Oracle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg", color: "#F80000" }
  ],
  
  "DevOps & Cloud": [
    { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", color: "#326CE5" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", color: "#FF9900" },
    { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", color: "#0078D4" },
    { name: "Google Cloud", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", color: "#4285F4" },
    { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg", color: "#D33833" },
    { name: "Ansible", icon: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/ansible/ansible-original.svg", color: "#EE0000" },
    { name: "Terraform", icon: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/terraform/terraform-original.svg", color: "#7B42BC" },
    { name: "Cloudflare", icon: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg", color: "#F38020" }
  ],

  "AI & Machine Learning": [
    { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", color: "#FF6F00" },
    { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", color: "#EE4C2C" },
    { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", color: "#F7931E" },
    { name: "Jupyter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg", color: "#F37626" },
    { name: "OpenCV", icon: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg", color: "#5C3EE8" },
    { name: "OpenAI", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/openai.svg", color: "#412991" },
    { name: "NumPy", icon: "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg", color: "#013243" },
    { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", color: "#150458" },
    { name: "Midjourney", icon: "https://cdn.worldvectorlogo.com/logos/midjourney.svg", color: "#000000" },
    { name: "Stable Diffusion", icon: "https://cdn.worldvectorlogo.com/logos/stability-ai.svg", color: "#000000" }
  ],

  "3D Engines & Game Development": [
    { name: "Unity", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg", color: "#000000" },
    { name: "Unreal Engine", icon: "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg", color: "#0E1128" },
    { name: "Blender", icon: "https://download.blender.org/branding/community/blender_community_badge_white.svg", color: "#F5792A" },
    { name: "Godot", icon: "https://www.vectorlogo.zone/logos/godotengine/godotengine-icon.svg", color: "#478CBF" },
    { name: "Snap Lens Studio", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/snapchat.svg", color: "#FFFC00" }
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
    className="flex flex-col items-center glass p-4 rounded-lg transition-all duration-300"
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