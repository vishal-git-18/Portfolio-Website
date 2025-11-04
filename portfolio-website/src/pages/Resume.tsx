import { Button } from "../../src/components/ui/button";

export default function Resume() {
  const lastUpdated = "November 5th 2025"; // Update this whenever your resume changes

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center px-4 py-16 mt-5">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold">My Resume</h1>

      {/* Last updated */}
      <p className="text-sm text-gray-400 mt-4">Last updated: {lastUpdated}</p>

      {/* Description / Download */}
      <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
        You can view my resume below or download a copy.
      </p>

      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
        {/* Download */}
        <a
          href="/resume/resume.pdf"
          download="Vishal Ravishankar.pdf"
        >
          <Button>Download Resume</Button>
        </a>

        {/* View Fullscreen */}
        <a
          href="/resume/Vishal Ravishankar.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>View Fullscreen</Button>
        </a>
      </div>

      {/* Embedded Resume */}
      <div className="mt-10 w-full max-w-4xl h-[600px] md:h-[800px] border rounded-lg shadow-md overflow-hidden">
        <iframe
          src="/resume/Vishal Ravishankar.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  );
}
