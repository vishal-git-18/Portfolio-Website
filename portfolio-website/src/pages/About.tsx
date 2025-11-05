export default function AboutMe() {
  return (
    <div className="relative flex items-end justify-center w-full h-screen overflow-hidden bg-background">
      {/* Image */}
      <div className="w-[400px] md:w-[480px] lg:w-[580px] overflow-hidden transform transition-transform duration-700 hover:-translate-y-2 hover:scale-105">
        <img
          src="/images/about/profile.jpg"
          alt="About Me"
          className="w-full h-auto object-cover"
          style={{
            objectPosition: "center 25%",
            mixBlendMode: "multiply", // blends with background
            opacity: 0.85 // subtle transparency to blend
          }}
        />
      </div>
    </div>
  );
}
