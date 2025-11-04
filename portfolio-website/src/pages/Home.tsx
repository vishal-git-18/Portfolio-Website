import { Button } from "../../src/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-10 relative">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mt-14">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
      </div>

      {/* Greeting */}
      <h2 className="mt-4 text-xl font-sans font-semibold text-gray-200 text-center">
        Hi, I'm Vishal
      </h2>

      {/* Main Heading */}
      <h1 className="mt-4 text-5xl md:text-6xl font-sans font-semibold text-white text-center relative leading-tight">
        <span className="relative inline-block">
          Building
          {/* Squiggly line under the word */}
          <svg
            className="absolute -bottom-2 left-0 w-full h-5 opacity-40"
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,7 Q40,1 100,10"
              stroke="#d1d5db"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        intuitive <br /> apps, websites, and <br /> experiences.
      </h1>

      {/* Description */}
      <p className="mt-8 text-base md:text-lg text-gray-400 text-center max-w-md md:max-w-xl leading-relaxed">
        A Software Developer and Data Engineer based in Bangalore. <br />
        I specialize in creating responsive designs, architecting systems, and making data work seamlessly.
      </p>

      {/* Connect Button */}
      <a
        href="https://www.linkedin.com/in/vishal-ravishankar18/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8"
      >
        <Button className="text-xs rounded-full px-6 py-2">
          CONNECT WITH ME
        </Button>
      </a>
    </div>
  );
}
