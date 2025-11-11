export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen px-6 md:px-16 bg-background gap-8">

      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-start pt-36 md:pt-43 text-center md:text-left space-y-6 md:space-y-8">
        {/* Greeting */}
        <h2 className="text-2xl md:text-3xl font-sans font-medium text-gray-300">
          Hey, I'm Vishal
        </h2>

        {/* Role */}
        <h1
          className="text-5xl md:text-6xl font-serif font-extrabold leading-tight"
          style={{ color: "#ff4d6d" }}
        >
          A Software Developer & <br /> Data Engineer
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-xl font-sans text-gray-400 max-w-lg">
          Transforming{" "}
          <span className="font-semibold" style={{ color: "#ff4d6d" }}>
            novel ideas
          </span>{" "}
          into applications that captivate, engage, and{" "}
          <span className="font-semibold" style={{ color: "#ff4d6d" }}>
            enhance experiences
          </span>.
        </p>
      </div>


      {/* Center Column: Image */}
      <div className="flex-[0.8] flex justify-center md:self-end">
        <div className="w-[400px] md:w-[480px] lg:w-[580px] h-auto overflow-hidden">
          <img
            src="/images/about/profile.jpg"
            alt="About Me"
            className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            style={{
              objectPosition: "center 25%",
              opacity: 0.85,
            }}
          />
        </div>
      </div>


      {/* Right Column */}
      <div className="flex-1 flex flex-col justify-start pt-36 md:pt-48 max-w-md md:max-w-lg text-gray-300 leading-relaxed mx-auto md:mx-0 text-sm md:text-base space-y-6 md:space-y-8 text-justify">

        <p>
          🎓 I'm a recent graduate from <span className="font-semibold text-[#ff4d6d]">PES University</span> with a strong tech background. I enjoy putting those skills to use by building <span className="font-semibold text-[#ff4d6d]">products and applications</span> that solve problems I can relate to.
        </p>

        <p>
          🤖 Recently, I've started exploring <span className="font-serif font-bold text-[#ff4d6d]">AI & Machine Learning</span>, integrating them into applications effectively. I also love <span className="font-semibold text-[#ff4d6d]">system design</span>—a skill I find extremely underrated—and creating <span className="font-semibold text-[#ff4d6d]">intuitive user interfaces</span> that users find engaging.
        </p>

        <p>
          💡 Collaboration is key! I'm always eager to <span className="font-semibold text-[#ff4d6d]">learn from peers</span> and work on exciting projects. Hit me up if you're interested in building something together!
        </p>

      </div>


    </div>
  );
}
