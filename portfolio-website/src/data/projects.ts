export interface Project {
  year: number;
  title: string;
  type: string;
  techStack: string[];
  description: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    year: 2025,
    title: "Expense Tracking & Analytics Platform",
    type: "Project",
    techStack: ["Spring Boot", "Java", "React", "JavaScript", "MySQL"],
    description: [
      "Built a full-stack application enabling users to track expenses, set budgets, and visualize spending trends.",
      "Developed recurring expense tracking, budget alerts, category-wise spending analysis, and downloadable reports.",
    ],
    link: "https://www.linkedin.com/in/vishal-ravishankar18/",
  },
  {
    year: 2025,
    title: "Smart Budget Dashboard",
    type: "Project",
    techStack: ["React", "D3.js", "Node.js"],
    description: [
      "Created an interactive dashboard visualizing real-time spending trends.",
      "Implemented charts and graphs for easy insights on monthly budgets and categories.",
    ],
  },
  {
    year: 2024,
    title: "AI Personal Assistant",
    type: "Project",
    techStack: ["Python", "React", "JavaScript", "Flask"],
    description: [
      "Developed an AI Personal Assistant using OpenAI GPT models.",
      "Integrated real-time weather updates and Google Calendar scheduling.",
    ],
  },
  {
    year: 2024,
    title: "Chatbot Platform",
    type: "Project",
    techStack: ["Python", "TensorFlow", "React"],
    description: [
      "Built a chatbot platform for customer service automation.",
      "Implemented intent recognition and conversational flows with NLP models.",
    ],
  },
  {
    year: 2023,
    title: "Portfolio Website",
    type: "Project",
    techStack: ["React", "Tailwind", "JavaScript"],
    description: [
      "Built a responsive personal portfolio website showcasing projects and skills.",
      "Implemented interactive animations and dark mode toggle.",
    ],
  },
  {
    year: 2023,
    title: "E-commerce Analytics Dashboard",
    type: "Project",
    techStack: ["React", "Node.js", "MongoDB"],
    description: [
      "Developed a dashboard for sales tracking and product performance analysis.",
      "Integrated charts, filters, and summary reports for business insights.",
    ],
  },
];
