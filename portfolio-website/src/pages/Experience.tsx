export default function Experience() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 bg-background text-left pt-0 md:pt-8">
      
      {/* LEFT SIDE — Heading */}
      <div className="flex-1 flex flex-col justify-center">
        <h1
          className="text-[7rem] md:text-[9rem] font-extrabold leading-none tracking-tight"
          style={{ color: "#FFFFFF" }}
        >
          WORK
        </h1>
        <h2
          className="text-4xl md:text-5xl italic font-[cursive] font-light"
          style={{ color: "#ff4d6d" }}
        >
          EXPERIENCE
        </h2>

        <p className="text-gray-400 mt-8 max-w-xl text-lg leading-relaxed">
          From working on full-fledged industrial applications across the stack
          to building machine learning pipelines that reduce human effort —
          I’ve learned to design, build, and think about tech that truly
          delivers impact.
        </p>
      </div>

      {/* RIGHT SIDE — Experience Cards */}
      <div className="flex-1 flex flex-col justify-center gap-8 mt-16 md:mt-0 pt-8 md:pt-8">
        
        {/* Card 1: Inube */}
        <div className="p-6 rounded-2xl border border-gray-700 bg-[#111111] hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          <h3 className="text-2xl font-bold text-white">INUBE</h3>
          <p className="text-sm text-gray-400 italic mb-3">
            Software Development Intern &nbsp;|&nbsp; Jan 2025 – Sep 2025 &nbsp;|&nbsp; Bengaluru, IN
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
            <li>
              Refactored <span className="text-[#ff4d6d] font-semibold">C# services</span> improving API response times by 20%.
            </li>
            <li>
              Built and maintained the <span className="text-[#ff4d6d] font-semibold">User Management module</span> with RBAC and audit logging.
            </li>
            <li>
              Developed agent dashboards with optimized <span className="text-[#ff4d6d] font-semibold">SQL queries</span> for 30% faster data retrieval.
            </li>
          </ul>

        <p className="mt-4 text-sm text-gray-500 flex flex-wrap gap-1 items-center">
          <span className="font-semibold text-[#ff4d6d]">Tech Stack:</span>
          <span className="px-2 py-1 border border-gray-600 rounded-full">C#</span>
          <span className="px-2 py-1 border border-gray-600 rounded-full">.NET</span>
          <span className="px-2 py-1 border border-gray-600 rounded-full">SQL</span>
          <span className="px-2 py-1 border border-gray-600 rounded-full">JavaScript</span>
          <span className="px-2 py-1 border border-gray-600 rounded-full">React</span>
        </p>

        </div>

        {/* Card 2: UrbanPro */}
        <div className="p-6 rounded-2xl border border-gray-700 bg-[#111111] hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          <h3 className="text-2xl font-bold text-white">URBANPRO</h3>
          <p className="text-sm text-gray-400 italic mb-3">
            Software Development Intern &nbsp;|&nbsp; Jun 2024 – Aug 2024 &nbsp;|&nbsp; Bengaluru, IN
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
            <li>
              Automated educator profile verification using a{" "}
              <span className="text-[#ff4d6d] font-semibold">machine learning pipeline</span>.
            </li>
            <li>
              Implemented <span className="text-[#ff4d6d] font-semibold">image validation</span> for face centering, clarity, and domain exceptions.
            </li>
            <li>
              Improved onboarding workflows and overall platform content quality.
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-500 flex flex-wrap gap-1 items-center">
            <span className="font-semibold text-[#ff4d6d]">Tech Stack:</span>
            <span className="px-2 py-1 border border-gray-600 rounded-full">Python</span>
            <span className="px-2 py-1 border border-gray-600 rounded-full">TensorFlow</span>
            <span className="px-2 py-1 border border-gray-600 rounded-full">OpenCV</span>
            <span className="px-2 py-1 border border-gray-600 rounded-full">Flask</span>
          </p>

        </div>
      </div>
    </div>
  );
}
