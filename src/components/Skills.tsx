import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
  { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "#7B42BC" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5" },
  { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", color: "#000000" },
  { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979D" },
  { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", color: "#A22846" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "IoT", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwRDBGRCI+PHBhdGggZD0iTTExLDUuNEM5Ljc0LDMuOTUgOCwzIDYsM0M2LDcsOSw4LDksMTBWMTJIMTVWMTBDMTUsOCwxOCw3LDE4LDNDMTYuMjQsMyAxNC42NiwzLjk1IDEzLjQsNS40QzEyLjgsNC4zNiwxMiwzLDEyLDNDMTIsMyAxMS4yLDQuMzYsMTAuNiw1LjRNMTgsMTlINUExLDEgMCAwLDEgNCwxOFYxM0EyLDIgMCAwLDEgNiwxMUgxOEEyLDIgMCAwLDEgMjAsMTNWMThBMSwxIDAgMCwxIDE5LDE5SDEzVjE1SDExVjE5SDZWMTdINVYxOEg2QTEsMSAwIDAsMCA3LDE3VjEySDUuNUEwLjUsMC41IDAgMCwwIDUsMTIuNVYxNkg0VjEyLjVBMS41LDEuNSAwIDAsMCAyMC41LDEySDE5VjE3QTEsMSAwIDAsMCAyMCwxOEgyMVYxN0gyMFYxOUgxOE0xNCwxMy41QTEuNSwxLjUgMCAwLDAgMTIuNSwxMkExLjUsMS41IDAgMCwwIDExLDEzLjVBMS41LDEuNSAwIDAsMCAxMi41LDE1QTEuNSwxLjUgMCAwLDAgMTQsMTMuNU0xMi41LDE0QTAuNSwwLjUgMCAwLDEgMTIsMTMuNUEwLjUsMC41IDAgMCwxIDEyLjUsMTNBMC41LDAuNSAwIDAsMSAxMywxMy41QTAuNSwwLjUgMCAwLDEgMTIuNSwxNFoiLz48L3N2Zz4=", color: "#00D0FD" },
  { name: "SnapAR", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGRkYwMCI+PHBhdGggZD0iTTEyLjAzMSwwQzUuMzc5LDAsMCw1LjM3OSwwLDEyLjAzMUMwLDE4LjY2OCw1LjM3OSwyNCwxMi4wMzEsMjRDMTguNjY4LDI0LDI0LDE4LjY2OCwyNCwxMi4wMzFDMjMuOTg0LDUuMzc5LDE4LjY2OCwwLDEyLjAzMSwwWk0xOC44NDMsMTYuODE2QzE4Ljg0MywxNi44MTYgMTcuMTg1LDE2LjgzMiAxNS41OSwxNi4xMTZDMTUuMzcsMTYuMDUyIDE1LjEzNCwxNS45ODggMTQuODk4LDE1Ljk0QzE0LjY0NiwxNS44NzYgMTQuMzk1LDE1LjgyOCAxNC4xNDMsMTUuNzY0QzEzLjc0LDE1LjY2OCAxMy4zNjgsMTUuNTcyIDEzLjAxMiwxNS40NkMxMi41MDksMTUuMjg4IDEyLjAzMSwxNS4xNDQgMTEuNjEyLDE0Ljk1NkMxMS40MTEsMTQuODYgMTEuMTc1LDE0LjczMiAxMC45MzksMTQuNjA0QzEwLjg3NSwxNC41NzIgMTAuODExLDE0LjUyNCAxMC43MzEsMTQuNDkyQzkuMDg5LDEzLjU5IDcuODgxLDEyLjI4NyA3LjUwOSwxMC43OTFDNS44MzUsMTAuNDM1IDQuNzIzLDkuNDIyIDQuNzA3LDcuMTU0QzQuNzA3LDcuMTU0IDUuNzg3LDcuODM4IDcuMTU0LDcuODcxQzYuODM0LDcuMDU4IDYuODE4LDYuMDYxIDcuMjA1LDUuMTk3QzcuNTM4LDUuNzk3IDcuOTkzLDYuMzAxIDguNTQ1LDYuNzU0QzkuNDA4LDcuNDcgMTAuNDY5LDcuOTI2IDExLjYxMiw4LjA4NkMxMS42MTIsOC4wNzEgMTEuNjEyLDguMDcxIDExLjYxMiw4LjA3MUMxMS42MTIsOC4wNTUgMTEuNjEyLDguMDU1IDExLjYxMiw4LjA1NUMxMS41OTYsNy45NzUgMTEuNTgsNy45MTIgMTEuNTgsNy44MzhDMTEuNDUyLDcuMzUxIDExLjQwNCw2LjgzMiAxMS40MzYsNi4zMTdDMTEuNDUyLDYuMjIxIDExLjQ2OCw2LjE0MSAxMS40ODQsNi4wNzdDMTEuNSwzLjY5MiAxMy4wNiwxLjg5OCAxNS41NDgsMi4wMDZDMTguMDg0LDIuMTE4IDE5LjM3MSw0LjM4NyAxOC45NjgsNi42NzZDMTguOTUyLDYuODAzIDE4LjkzNiw2LjkyOSAxOC45MDQsNy4wNThDMTguNzY1LDcuNzEgMTguNDk4LDguNzg3IDE4LjQ5OCw4Ljc4N0MyMC4xNTcsMTAuOTU5IDE5LjQyNSwxMy42MzEgMTkuNDI1LDEzLjYzMUMxOS40MjUsMTMuNjMxIDE5LjMzMSwxMy40OTggMTkuMTMzLDEzLjMyMkMxOC40ODQsMTIuNzUgMTcuNTg3LDEyLjUyOCAxNi42NjQsMTIuNjU3QzE1LjUyNCwxMi44MTcgMTQuNSwxMy41MDEgMTQuMDYxLDE0LjU3MkMxNC4wNjEsMTQuNTg4IDE0LjA0NSwxNC41ODggMTQuMDQ1LDE0LjYwNEMxNC4wMjksMTQuNjIgMTQuMDI5LDE0LjYzNiAxNC4wMTMsMTQuNjUyQzEzLjc2NSwxNC43MzIgMTMuOTAxLDE0Ljg3NiAxMy45MDEsMTQuODc2QzE0LjU2OSwyMC4xNzMgMTguODQzLDE2LjgxNiAxOC44NDMsMTYuODE2WiIvPjwvc3ZnPg==", color: "#FFFF00" },
  { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#000000" },
  { name: "Excel", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzIxN2M0NiI+PHBhdGggZD0iTTI0LDJWMTlDMjQsMTkuNiAyMy42LDIwIDIzLDIwSDddTTAsMTNIMVYxOEMxLDE4LjYgMS40LDE5IDIsMTlIMlYxM0gwWk0wLDhdTTAsOFY2QzAsNS40IDAuNCw1IDEsNUgyMEwyMCw4WiIvPjxwYXRoIGQ9Ik0yMSw1SDdWMTlIMjFWNVogTTEyLDlIMTlWMTFIMTJWOVogTTEyLDEzSDE5VjE1SDEyVjEzWiBNOSwxM0gxMVYxNUg5VjEzWiBNOSw5SDExVjExSDlWOVoiLz48L3N2Zz4=", color: "#217c46" },
  { name: "AutoCAD", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0M4NUEzMyI+PHBhdGggZD0iTTIzLjI0OCw1LjgzNVY0LjAyNWMwLjAxMy0xLjAyMy0wLjc2NC0xLjg3NS0xLjc4Ny0xLjkxMmgtNS42NTNjLTAuNTU4LDAuMDU2LTEuMDU0LDAuMzYzLTEuMzc0LDAuODQ4bC0xNi4wNSwxMy4zNjQgZGNsaWNrLWFzc2lnbjppbiBhY3Rpb24tb3V0LWtleSglS0VZX0MxJSk8L3BhdGg+PC9zdmc+", color: "#C85A33" },
  { name: "Unreal", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzFBQkNGRSI+PHBhdGggZD0iTTEyLDJDNi40OCwyIDIsMi4xIDIsMTJjMCw5LjksNC40OCwxMCwxMCwxMGM1LjUyLDAsMTAsMCwxMC0xMEM0NCwyIDQxLjUyLDIgMTIsMnogTTcuMjMsMTYuOWw4LDAgTTYuNzcsNy43Mmw4LjQzLDBMMjAuNTMsMTQuNzdMMTYuNDEsMTQuNzdWNy4xNEwxMiwxMy42OFYxMCIvPjwvc3ZnPg==", color: "#1ABCFE" }
];

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
      <img src={skill.icon} alt={skill.name} className="max-h-full max-w-full" />
    </div>
    <span className="text-sm font-medium">{skill.name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 gradient-text text-center"
        >
          Tech Stack
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Expertise across multiple domains of technology and leadership
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
