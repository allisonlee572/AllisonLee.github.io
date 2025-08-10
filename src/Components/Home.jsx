import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import ProjectHighlights from "./ProjectHighlights/ProjectHighlights";
import ProjectBanners from "./ProjectBanners/ProjectBanners";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <ProjectHighlights /> */}
      <ProjectBanners />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

/*
React hooks (nav bar)
anchor links (nav bar) smooth scroll
smt else forgot

why text-decoration none in navbar css
*/

/*
Create or replace artworks + icon

*/
