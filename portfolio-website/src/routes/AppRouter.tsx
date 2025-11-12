import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
// import Resume from "../pages/Resume";
import Navbar from "../components/layout/Navbar";

function AppWrapper() {
  const location = useLocation();

  // Hide navbar only on /resume
  const showNavbar = location.pathname !== "/resume";

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
