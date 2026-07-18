import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowUp, FaCode, FaBrain, FaRocket } from "react-icons/fa";
import profilePic from "./profile.jpg";

const PUBLIC_URL = process.env.PUBLIC_URL;

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showScrollTop} />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home">SANDEEP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navCollapse">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#certificates">Certificates</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-3">
              <a className="btn btn-primary btn-sm d-flex align-items-center" href={`${PUBLIC_URL}/main_resume.pdf`} download>
                  <FaDownload className="me-2" /> Download Software Engineering Resume
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/*hero section*/
function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="container d-flex flex-column align-items-center">
        <div data-aos="zoom-in">
          <img src={profilePic} alt="Sandeep profile" className="profile-pic mb-3" />
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <h1 className="hero-title mb-2">
            Hi, I'm <span>Sandeep Reddy</span>
          </h1>

          <div className="hero-sub mb-3">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer | Full-Stack Developer 💻",
                  "AI/ML Enthusiast building intelligent products 🤖",
                  "Next.js, React, Python, Java, and Spring Boot",
                  "Building end-to-end web apps and intelligent systems",
                  "400+ Problems Solved 🚀",
                  "Open to Software Engineering, Full-Stack, and AI/ML roles"
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <a className="btn hero-btn btn-outline-light btn-sm" href="#projects">Explore Projects</a>
            <a className="btn hero-btn btn-primary btn-sm d-flex align-items-center" href={`${PUBLIC_URL}/main_resume.pdf`} download>
              <FaDownload className="me-2" /> Download Software Engineering Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/*about*/
function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <h2 className="section-title fs-3">About Me</h2>
          <p className="fs-5" style={{ color: "#e2e8f0" }}>
            Analytical Computer Science undergraduate focused on software engineering, full-stack development,
            and AI/ML. I enjoy building end-to-end products using Python, Java, React, and modern web technologies,
            from responsive web applications to intelligent machine learning workflows. I am actively seeking opportunities
            in software engineering, full-stack development, and AI/ML roles.
          </p>
          <div className="mt-4" style={{ color: "#e2e8f0" }}>
            <h5 className="mb-3">Education</h5>
            <ul className="list-unstyled">
              <li>🎓 <strong>Vardhaman College of Engineering</strong> — B.Tech in Computer Science & Engineering | CGPA: 9.48</li>
              <li>🎓 <strong>Sri Chaitanya Junior College</strong> — Intermediate, Mathematics, Physics & Chemistry | 9.72/10</li>
              <li>🎓 <strong>Telangana Grammar School</strong> — 10th Class | GPA: 10.0</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <div className="p-4 card-glass rounded shadow-sm">
            <h5 className="mb-3">Quick Stats</h5>
            <div className="d-flex gap-4 flex-wrap">
              <Stat label="Projects" value="5+" />
              <Stat label="CGPA" value="9.48" />
              <Stat label="Problems Solved" value="400+" />
              <Stat label="Internships" value="2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="me-3 mb-2">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function WhatIDo() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "I build responsive web apps with React, Next.js, and reliable APIs that feel polished and fast."
    },
    {
      icon: <FaBrain />,
      title: "AI/ML Solutions",
      description: "I turn ideas into practical machine learning workflows, from data prep to intelligent user experiences."
    },
    {
      icon: <FaRocket />,
      title: "Product Mindset",
      description: "I focus on clean architecture, thoughtful UX, and measurable impact for real-world users."
    }
  ];

  return (
    <section id="what-i-do" className="container py-5">
      <h2 className="section-title fs-3 mb-4">What I Do</h2>
      <div className="row g-4">
        {highlights.map((item, idx) => (
          <div className="col-md-4" key={item.title} data-aos="fade-up" data-aos-delay={idx * 80}>
            <div className="p-4 card-glass rounded shadow-sm h-100 highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h5 className="mt-3 mb-2">{item.title}</h5>
              <p className="mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "XGBoost",
    "Data Visualization",
    "Matplotlib",
    "Seaborn",
    "NLP",
    "Git"
  ];
  return (
    <section id="skills" className="container py-5">
      <h2 className="section-title fs-3 mb-4">Skills</h2>
      <div className="row g-3">
        {skills.map((s) => (
          <div className="col-6 col-md-3" key={s} data-aos="flip-left">
            <div className="p-3 card-glass rounded text-center">
              <div style={{ fontWeight: 700 }}>{s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const timeline = [
    {
      role: "AI Intern",
      company: "AICTE TechSaksham (Microsoft & SAP)",
      period: "Feb 2025 – Aug 2025",
      details: "Built an end-to-end AI resume screening system using NLP, ranking 500+ candidate profiles automatically."
    },
    {
      role: "Web Development Intern",
      company: "Cognifyz Technologies",
      period: "Jun 2024 – Aug 2024",
      details: "Developed responsive React frontends, integrated REST APIs, and refactored reusable component architecture."
    },
  ];

  return (
    <section id="experience" className="container py-5">
      <h2 className="section-title fs-3 mb-4">Experience</h2>
      <div className="timeline">
        {timeline.map((item, idx) => (
          <div className="timeline-card card-glass rounded shadow-sm p-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
            <div className="timeline-label">{item.period}</div>
            <h5 className="mb-2">{item.role}</h5>
            <p className="text-info mb-2">{item.company}</p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BackToTop({ visible }) {
  return (
    <button
      className={`back-to-top btn btn-primary shadow-lg ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

function Certificates() {
  const featuredCertificates = [
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      year: "2026",
      link: `${PUBLIC_URL}/certificates/Salesforces_PDA1.pdf`
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/Salesforce_Agent.pdf`
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/p4.pdf`
    },
    {
      title: "NPTEL Programming in Java (Elite)",
      issuer: "IIT Kharagpur",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/NPTEL_Programming_in_Java.pdf`
    },
    {
      title: "Microsoft & SAP AICTE TechSaksham - AI Internship",
      issuer: "AICTE TechSaksham",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/Aicte_certificate.pdf`
    },
    {
      title: "Infosys Java Foundation Certification",
      issuer: "Infosys",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/infosis_cert.pdf`
    },
    {
      title: "IBM SkillsBuild - Introduction to Generative AI",
      issuer: "IBM",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/IBM_Generative_AI.pdf`
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS",
      year: "2025",
      link: `${PUBLIC_URL}/certificates/TCS_Career_Edge.pdf`
    }
  ];

  const otherCertificates = [
    "HP LIFE Data Science & Analytics",
    "IBM Python 101",
    "Deloitte Data Analytics Job Simulation",
    "Accenture Software Engineering Job Simulation",
    "Intel AI For All",
    "Simplilearn Django",
    "LinkedIn Algorithms",
    "Infosys additional certifications"
  ];

  return (
    <section id="certificates" className="container py-5">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <h2 className="section-title fs-3 mb-2 mb-md-0">Featured Certifications</h2>
        <a className="btn btn-sm btn-outline-light" href="#other-certifications">View All Certifications</a>
      </div>

      <div className="row g-4">
        {featuredCertificates.map((c, idx) => (
          <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up">
            <div className="p-4 card-glass rounded shadow-sm h-100 text-center certificate-card">
              <h5 className="mb-2">{c.title}</h5>
              <p className="mb-1" style={{ color: "#38bdf8" }}>{c.issuer}</p>
              <p className="mb-3" style={{ color: "#e2e8f0" }}>{c.year}</p>

              {c.link && (
                <a
                  className="btn btn-sm btn-outline-light"
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div id="other-certifications" className="mt-5">
        <h3 className="section-title fs-4 mb-3">Other Certifications</h3>
        <div className="row g-3">
          {otherCertificates.map((item, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up">
              <div className="p-3 card-glass rounded shadow-sm h-100">
                <p className="mb-0">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ---------- PROJECTS ---------- */
function Projects() {
  const featuredProjects = [
    {
      title: "EdgeShield AI",
      badge: "🚧 In Development",
      desc: "Developing a proof-of-concept IoT intrusion detection pipeline with anomaly detection and explainable threat insights.",
      tech: "Python, ML, IoT, Threat Detection",
      github: ""
    },
    {
      title: "CropSense",
      desc: "Developed an AI-powered crop recommendation experience with data preprocessing, model evaluation, and a full-stack interface that brings predictions to users end-to-end.",
      tech: "Python, Scikit-learn, XGBoost, Full Stack",
      github: ""
    },
    {
      title: "AI Resume Screening & Ranking System",
      desc: "Engineered an NLP-based ranking pipeline with TF-IDF and cosine similarity to automate candidate matching and improve recruiter efficiency.",
      tech: "Python, NLP, Scikit-learn, MongoDB, Flask",
      github: ""
    },
    {
      title: "Smart Rainfall & Drought Prediction System",
      desc: "Integrated 10+ years of climate datasets, engineered features, and benchmarked machine learning models to predict drought patterns and support analytical forecasting.",
      tech: "Python, Scikit-learn, XGBoost, Pandas, NumPy",
      github: ""
    },
    {
      title: "LifeOS AI",
      desc: "Built a modern AI-assisted productivity experience with a polished frontend and practical user flows that showcase contemporary web development practices.",
      tech: "Next.js, TypeScript, React, UI/UX",
      github: ""
    },
    {
      title: "Sri Raksha Hospital Website",
      desc: "Created a practical full-stack website for a real-world healthcare use case with structured content, responsive design, and user-friendly navigation.",
      tech: "React, Full Stack, Web Development",
      github: ""
    }
  ];

  const otherProjects = [
    "Smart Expense Tracker",
    "Movie Recommendation System",
    "GitHub Profile Viewer",
    "Focus Timer",
    "NVRMND Studio",
    "Portfolio Website"
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="section-title fs-3 mb-4">Featured Projects</h2>
      <div className="row g-4">
        {featuredProjects.map((p, idx) => (
          <div className="col-md-6" key={idx} data-aos="zoom-in">
            <div className="p-4 card-glass rounded shadow-sm h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <h5 className="project-title mb-0">{p.title}</h5>
                {p.badge && <span className="badge bg-warning text-dark">{p.badge}</span>}
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">{p.tech}</div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info mt-3"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h3 className="section-title fs-4 mb-3">Other Projects</h3>
        <div className="row g-3">
          {otherProjects.map((item, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up">
              <div className="p-3 card-glass rounded shadow-sm h-100">
                <p className="mb-0">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const achievements = [
    "Solved 400+ problems on LeetCode covering DSA, dynamic programming, and graph algorithms",
    "Volunteered as event organizer for college cultural fest Ortus 2026, coordinating logistics for 1000+ attendees",
    "Salesforce Certified Platform Developer I — Mar 2026",
    "Oracle AI Foundations Associate — Oracle University, 2025",
    "Salesforce Agentforce Specialist — Salesforce, 2025"
  ];

  return (
    <section id="achievements" className="container py-5">
      <h2 className="section-title fs-3 mb-4">Achievements</h2>
      <div className="row">
        {achievements.map((item, idx) => (
          <div className="col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
            <div className="p-4 card-glass rounded shadow-sm mb-3">
              <p className="mb-0">• {item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="container py-5" >
      <h2 className="section-title fs-3 mb-4">Contact</h2>
      <div className="row g-4">
        <div className="col-lg-5" data-aos="fade-right">
          <div className="p-4 card-glass rounded h-100">
            <h5>Let's collaborate</h5>
            <p className="custom-text">
              I build web applications, APIs, and intelligent AI/ML products. I'm open to internships, freelance work, or software engineering roles. Send a message and let's talk about your next project.
            </p>
            <div className="d-flex flex-column gap-3 contact-card-links">
              <a className="contact-link text-decoration-none" href="mailto:yaramalasandeepreddy04@gmail.com"><FaEnvelope className="me-2" /> yaramalasandeepreddy04@gmail.com</a>
              <a className="contact-link text-decoration-none" href="tel:+916302550485"><FaEnvelope className="me-2" /> +91 6302550485</a>
              <a className="contact-link text-decoration-none" href="https://www.linkedin.com/in/sandeep-reddy-yaramala-96235831a/" target="_blank" rel="noreferrer"><FaLinkedin className="me-2" /> Linkedin</a>
              <a className="contact-link text-decoration-none" href="https://github.com/sandeepreddy0485" target="_blank" rel="noreferrer"><FaGithub className="me-2" /> Github</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-left">
          <div className="p-4 card-glass rounded h-100 contact-form-card">
            <form>
              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">Name</label>
                <input type="text" className="form-control form-control-dark" id="contactName" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="contactEmail" className="form-label">Email</label>
                <input type="email" className="form-control form-control-dark" id="contactEmail" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="contactMessage" className="form-label">Message</label>
                <textarea className="form-control form-control-dark" id="contactMessage" rows="5" placeholder="Tell me about your project"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="text-center py-3 mt-4">
      <div className="container">
        <div className="mb-2">Copyright © 2025 Sandeep Reddy Yaramala. All Rights Reserved</div>
        <div className="mb-1">yaramalasandeepreddy04@gmail.com | +91 6302550485</div>
        <div className="d-flex gap-3 justify-content-center">
          <a className="text-muted" href="https://www.linkedin.com/in/sandeep-reddy-yaramala-96235831a/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className="text-muted" href="https://github.com/sandeepreddy0485" aria-label="GitHub"><FaGithub /></a>
          <a className="text-muted" href="mailto:yaramalasandeepreddy@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}