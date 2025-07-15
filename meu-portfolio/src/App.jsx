// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        <section
          id="home"
          className="flex items-center justify-center py-20 px-6 bg-white text-center"
        >
          <Home />
        </section>

        <section id="projects" className="py-20 px-6">
          <Projects />
        </section>

        <section
          id="contact"
          className="flex items-center justify-center py-20 px-6 bg-white"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
