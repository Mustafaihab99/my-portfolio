import { 
  CodeXml, 
 Palette, 
  FileJson, 
  FileType, 
  Atom, 
  Workflow, 
  Wind, 
  GitBranch, 
  Github, 
  Zap 
} from "lucide-react";

export const skills = [
  { name: "HTML5", icon: CodeXml, color: "text-orange-500" },
  { name: "CSS3", icon: Palette, color: "text-blue-500" },
  { name: "JavaScript", icon: FileJson, color: "text-yellow-400" },
  { name: "TypeScript", icon: FileType, color: "text-blue-400" },
  { name: "React.js", icon: Atom, color: "text-cyan-400" },
  { name: "Redux", icon: Workflow, color: "text-purple-500" },
  { name: "TailwindCSS", icon: Wind, color: "text-sky-400" },
  { name: "Git", icon: GitBranch, color: "text-red-500" },
  { name: "GitHub", icon: Github, color: "text-gray-300" },
  { name: "Vite", icon: Zap, color: "text-yellow-300" },
];
