import { projects } from "../../data/projects";

export const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="relative w-full flex-1 group">
      <div className="relative w-full h-full px-6 pt-6 pb-2 rounded-2xl bg-[#111111] border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#ff4d6d]/50">
        
        {/* Accent gradient circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff4d6d]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Title */}
        <div className="mb-4 relative">
          <h3 className="text-2xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff4d6d] to-transparent"></div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-md hover:bg-[#ff4d6d]/10 hover:border-[#ff4d6d]/30 hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link (optional) */}
        {project.link && (
          <div className="flex justify-end mt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#ff4d6d] hover:text-[#ff87a2] transition-colors group/link mb-2"
            >
              <span>View Project</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70711 9.70711L12.7071 4.7071L15 7L16 6V0H10Z" />
                <path d="M1 2H6V4H3V13H12V10H14V15H1V2Z" />
              </svg>
            </a>
          </div>
        )}





        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff4d6d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-[#ff4d6d]/5 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};
