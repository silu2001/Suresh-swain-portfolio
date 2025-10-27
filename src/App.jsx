import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, easeOut, easeInOut, useMotionValue, useTransform } from "framer-motion";
import { FaUserAlt, FaCode, FaMapMarkerAlt, FaGraduationCap, FaDownload } from "react-icons/fa";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman } from "react-icons/si";
// import emailjs from "@emailjs/browser";

// // 🔑 Replace with your actual EmailJS credentials
// const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
// const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Container = ({ children }) => (
  <div className="min-h-screen bg-[#0B1121] text-gray-100 px-0 md:px-16 lg:px-28 pt-1 ">
    {children}
  </div>
);

const Section = ({ id, children, className = "py-20" }) => (
  <section id={id} className={className}>
    <div className="max-w-6xl mx-auto ">{children}</div>
  </section>
);

// ✅ Header (Fixed Navbar + Mobile Menu)

import { Link } from "react-scroll";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800/40 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          Suresh<span className="text-emerald-400">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:hiden lg:flex gap-6 text-gray-300">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(52, 211, 153, 0.15)",
                borderRadius: "0.5rem",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="px-2 py-1 rounded-md"
            >
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-emerald-400 font-medium"
                className="cursor-pointer transition capitalize hover:text-white"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m0 6H4"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ✅ Mobile Menu (only visible when menuOpen = true) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" bg-black/90 border-t border-gray-800"
          >
            <div className="flex flex-col items-center gap-4 py-6 text-gray-300">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    scale: 1.08,
                    textShadow: "0px 0px 6px rgba(52, 211, 153, 0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-emerald-400 font-medium"
                    onClick={() => setMenuOpen(false)} // close menu after click
                    className="cursor-pointer transition hover:text-white capitalize"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
// ✅ Hero Section
const Hero = () => {

  return (
    // Tilt rotation based on mouse position

    <Section id="home" className="h-screen flex items-center justify-center relative overflow-hidden  lg:pt-16  pt-5 mt-16 sm:mt-0 z-10 px-5 ">

        {/* 🌟 Full-Width Glow Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full 
        bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.25)_0%,rgba(6,182,212,0)_75%)] 
        blur-3xl"
      />

      {/* ✨ Animated Glow Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[150px]"
      />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl relative sm:-mt-20 lg:mt-26 ">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-[#2570EA]">Suresh Swain</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl">
            I build fast, accessible, and delightful web experiences — merging
            UI/UX design sense with robust frontend engineering.
          </p>
          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 20px 2px rgba(59,130,246,0.6)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              href="#projects" className="px-5 py-3 rounded-lg bg-[#2570EA]  border border-[#2570EA]">View Work</motion.a>
            <motion.a
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 20px 2px rgba(6, 215, 219, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              href="#contact" className="px-5 py-3 rounded-lg border border-[#0CB3BA] ">Contact</motion.a>
          </div>
        </motion.div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-72 h-72 overflow-hidden  bg-linear-to-tr from-[#1E90FF] to-[#FF69B4] rounded-3xl shadow-2xl cursor-pointer"
            whileHover={{ rotateY: 15, rotateX: 15, scale: 1.05 }}

          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="w-xl rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>

    </Section>
  );
};

// ✅ About Section

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
        staggerChildren: 0.2, // 👈 each child appears 0.2s apart
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className=" text-white py-20 px-6 md:px-16 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center">
        About <span className="text-blue-600">Me</span>
        <span className="block w-16 h-[3px] bg-cyan-400 mx-auto mt-3 rounded-md"></span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl items-center ">
        {/* Left Side: About Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{once: true, amount: 0.3 }}

          className="space-y-5 text-center md:text-left">
          <p className="text-lg text-white">
            I'm <span className="text-blue-600 font-semibold">Suresh Chandra Swain</span>,
            a Frontend Developer specializing in modern web applications. I work
            with React, Tailwind CSS, and JavaScript to build responsive,
            interactive websites.
          </p>
          <p className="text-lg text-white">
            I aim to turn creative ideas into clean, user-friendly digital
            experiences. My passion lies in creating websites that not only look
            great but also provide exceptional user experiences across all
            devices.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px 2px rgba(59,130,246,0.6)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 mx-auto md:mx-0">
            <FaDownload className="text-white" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right Side: Info Boxes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-6">
          {/* Experience */}
          <motion.div
            variants={childVariants}
            className="p-6 bg-linear-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
            <FaUserAlt className="text-3xl mb-2 opacity-90" />
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-sm opacity-90">1.5+ Years</p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={childVariants}
            className="p-6 bg-linear-to-br from-cyan-400 to-blue-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
            <FaCode className="text-3xl mb-2 opacity-90" />
            <h3 className="text-lg font-semibold">Skills</h3>
            <p className="text-sm opacity-90">React, JavaScript, Tailwind</p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={childVariants}
            className="p-6 bg-linear-to-br from-orange-400 to-red-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
            <FaGraduationCap className="text-3xl mb-2 opacity-90" />
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-sm opacity-90">Master in Computer Applications</p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={childVariants}
            className="p-6 bg-linear-to-br from-green-400 to-teal-600 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
            <FaMapMarkerAlt className="text-3xl mb-2 opacity-90" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-sm opacity-90">India / Remote</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


// ✅ Skills Section

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "REST API", logo: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-api-web-development-flaticons-lineal-color-flat-icons.png" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0b1120] text-gray-200 text-center py-16 px-5 "
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="text-3xl font-bold uppercase mb-2 relative inline-block">
        Skills
        <span className="block w-14 h-[3px] bg-emerald-400 mx-auto mt-2 rounded-md"></span>
      </motion.h2>

      <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto">
        Here are some of the technologies and tools I’ve worked with to design,
        build, and deploy modern web applications.
      </p>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-[#1b2436] p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-[0_4px_20px_#34d399] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-emerald-400">
              {group.category}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center w-24 h-24 bg-gray-800 rounded-xl hover:bg-emerald-500 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 mb-2"
                  />
                  <span className="text-sm font-medium text-gray-300 hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
// ✅ Projects Section
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "GitHub Profile Detective",
      desc: "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile...",
      tech: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
      code: "https://github.com/silu2001/MAAC-Project-react",
      live: "https://maac-project-react.vercel.app/",
    },
    {
      title: "CS Prep",
      desc: "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions...",
      tech: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
      code: "https://github.com/silu2001/E-commerce-project",
      live: "https://silu2001.github.io/E-commerce-project/",
    },
    {
      title: "Movie Recommendation App",
      desc: "A React-based web application that provides movie recommendations based on different criteria, such as...",
      tech: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
      code: "https://github.com/silu2001/Landing-responsive-page",
      live: "https://silu2001.github.io/Landing-responsive-page/",
    },
  ];
    const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
        staggerChildren: 0.2, // 👈 each child appears 0.2s apart
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.2 },
    },
  };

  return (
    <section
      id="projects"
      className=" text-white text-center py-16 px-5"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="text-3xl font-bold uppercase mb-2 relative inline-block">
        PROJECTS
        <span className="block w-14 h-[3px] bg-[#664C87] mx-auto mt-2 rounded-md"></span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="text-base text-white mb-10 max-w-2xl mx-auto">
        A showcase of the projects I have worked on, highlighting my skills and
        experience in various technologies
      </motion.p>

      {/* Cards */}
      <motion.div
         variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
       className="flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <motion.div
          variants={childVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px 2px rgba(6, 215, 219, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800/40 rounded-xl p-5 text-left cursor-pointer w-[330px] transition-transform duration-300"
          >
            <div className="w-full h-44 overflow-hidden rounded-lg mb-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-[#2292FF] mb-3">{project.desc}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#2292FF] rounded-full text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[#2292FF] bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#131A2B] p-6 rounded-xl max-w-lg w-[25vw] relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-1 right-2 text-2xl text-white hover:text-[#2292FF]"
            >
              ✕
            </button>

            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-sm mb-3">{selectedProject.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#2292FF] rounded-full text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#2292FF] text-white rounded-lg font-semibold hover:opacity-90"
              >
                View Code
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-[#2292FF] text-white rounded-lg font-semibold hover:bg-[#2292FF] hover:text-white transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// ✅ Contact Section

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section
      id="contact"
      className=" flex flex-col items-center justify-center px-6 md:px-10 py-14 bg-[#0b1120]"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="text-center mb-12">
        <h2
          className="text-4xl lg:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Get In <span className="text-[#1E90FF]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-linear-to-r from-[#1E90FF] to-[#00FFFF] mx-auto mb-4"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let’s work together to create something amazing.
        </p>
      </motion.div>

      <motion.div

        className="w-full  max-w-5xl grid md:grid-cols-2 gap-9 text-gray-100"
      >
        {/* LEFT SIDE — Info */}
        <motion.div
          // initial={{ x: -40, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-5">
            {[
              {
                icon: <Mail className="text-blue-400 w-6 h-6" />,
                title: "Email",
                text: "ss7898166@gmail.com",
              },
              {
                icon: <Phone className="text-blue-400 w-6 h-6" />,
                title: "Phone",
                text: "+91 8144304231",
              },
              {
                icon: <MapPin className="text-blue-400 w-6 h-6" />,
                title: "Location",
                text: "Bhubaneswar, Odisha, India",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 20px 2px rgba(59,130,246,0.4)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                {item.icon}
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <h3 className="font-semibold text-lg mb-3">Follow Me</h3>
            <div className="flex gap-4">
              {[Github, Linkedin, Instagram, Code2].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 12px 2px rgba(59,130,246,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  className="p-2 bg-gray-800/40 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}

          className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 md:p-8 backdrop-blur-md"
        >
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                name="from_name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full mt-2 p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                name="reply_to"
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full mt-2 p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full mt-2 p-3 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-blue-500 outline-none transition"
              ></textarea>
            </div>

            {/* Neon Glow Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 20px 2px rgba(59,130,246,0.6)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15, ease: "easeInOut", delay: 0.6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="w-full mt-2 flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                />
              </svg>
            </motion.button>

            {status === "sending" && (
              <p className="text-gray-400 text-sm">Sending...</p>
            )}
            {status === "sent" && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
            )}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

// ✅ Footer
const Footer = () => (
  <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
    © {new Date().getFullYear()} Suresh Swain · Built with React + Tailwind
  </footer>
);

// ✅ Main App
export default function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
}
