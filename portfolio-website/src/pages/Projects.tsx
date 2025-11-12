import { projects } from "../data/projects";
import { ProjectCard } from "../components/ui/projectCard";

export default function Projects() {
  // Get unique years descending
  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);

  // Global counter for left/right alternation
  let globalIdx = 0;

  return (
    <div className="flex flex-col items-center text-white px-6 md:px-20 py-16">
      {/* Heading */}
      <h1
        className="text-6xl md:text-7xl font-extrabold italic text-center text-white mb-24"
        style={{ textShadow: "2px 2px 0 #ff4d6d" }}
      >
        Projects
      </h1>

      {/* Timeline container */}
      <div className="relative w-full max-w-6xl">
        {/* Continuous vertical timeline line */}
        <div className="absolute left-1/2 w-0.5 bg-gray-700 -top-16 bottom-0 -translate-x-1/2"></div>

        {years.map((year) => {
          const yearProjects = projects.filter((p) => p.year === year);

          return (
            <div key={year} className="relative mb-8">
              {/* Projects for this year */}
              {yearProjects.map((project) => {
                const isLeft = globalIdx % 2 === 0; // global alternation
                globalIdx++; // increment for next project

                return (
                  <div key={project.title} className="relative mb-8 last:mb-0">
                    <div className="flex items-center">
                      {/* Left side */}
                      <div className="w-full max-w-[600px] flex justify-start pr-4 pl-4 mx-auto">
                        {isLeft && <ProjectCard project={project} />}
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#ff4d6d] rounded-full z-10 border-2 border-black"></div>

                      {/* Right side */}
                      <div className="w-full max-w-[600px] flex justify-start pr-4 pl-4 mx-auto">
                        {!isLeft && <ProjectCard project={project} />}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Year label AFTER projects */}
              <div
                className="relative flex justify-center my-16"
                style={{ backgroundColor: "hsl(var(--background))" }}
              >
                <div className="px-6 py-2 z-20 relative">
                  <div className="text-4xl md:text-5xl font-extrabold text-white">{year}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
