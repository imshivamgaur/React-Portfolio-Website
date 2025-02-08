import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
