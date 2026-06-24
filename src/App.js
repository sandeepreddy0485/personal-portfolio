import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowUp } from "react-icons/fa";
import profilePic from "./profile.jpg";

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
              <a className="btn btn-primary btn-sm d-flex align-items-center" href="/resume.pdf" download>
                <FaDownload className="me-2" /> Resume
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
  "Analytical Data & ML Engineer 📊",
  "Finance Research Analyst Aspirant 📈",
  "AI Resume Screening, Stock Forecasting, and Predictive Analytics",
  "Python, ML, NLP, and Data Visualization Enthusiast",
  "400+ Problems Solved 🚀",
  "Open to Research, Internship, and Full-Time Opportunities"
],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <a className="btn hero-btn btn-outline-light btn-sm" href="#projects">See Projects</a>
            <a className="btn hero-btn btn-primary btn-sm d-flex align-items-center" href="/resume.pdf" download>
              <FaDownload className="me-2" /> Download Resume
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
  Analytical Computer Science undergraduate with strong skills in data collection, interpretation, and visualization.
  Experienced in building data-driven systems using Python and machine learning.
  Seeking a Finance Research Analyst role to apply critical thinking, problem solving, and data analysis skills to
  track portfolio performance, interpret financial data, and support investment research and decision-making.
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

/* ---------- SKILLS ---------- */
function Skills() {
  const skills = [
  "Python",
  "Java",
  "JavaScript",
  "React",
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
  "yfinance",
  "Financial Analysis",
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
    {
      role: "Data Research Intern",
      company: "Remote Projects",
      period: "2023",
      details: "Delivered analytics-backed models and visualizations focused on predictive insights and decision support."
    }
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
  const certificates = [ 
  {
    title: "Virtual Internship Program - ServiceNow",
    issuer: "SmartBridge",
    year: "2025",
    link: "/certificates/p1.pdf"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "IBM",
    year: "2025",
    link: "/certificates/p2.pdf"
  },
  {
    title: "TCS iON Career Edge Young Professional",
    issuer: "TCS",
    year: "2025",
    link: "/certificates/p3.pdf"
  },
  {
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    link: "/certificates/p4.pdf"
  },
  {
    title: "Salesforce Agentforce Specialist",
    issuer: "Salesforce",
    year: "2025",
    link: "/certificates/Salesforce_Agent.pdf"
  },
  {
    title: "Salesforce Platform Developer I",
    issuer: "Salesforce",
    year: "2026",
    link: "/certificates/Salesforces_PDA1.pdf"
  },
  {
    title: "Infosys Java Foundation Certification",
    issuer: "Infosys",
    year: "2025",
    link: "/certificates/infosis_cert.pdf"
  }
];
return (
    <section id="certificates" className="container py-5">
      <h2 className="section-title fs-3 mb-4 text-center">Certificates</h2>

      <div className="row g-4">
        {certificates.map((c, idx) => (
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
    </section>
  );
}
/* ---------- PROJECTS ---------- */
function Projects() {
  const projects = [
  {
    title: "Stock Market Trend Analysis & Investment Signal System",
    desc: "Collected 5+ years of stock data with yfinance, applied SMA/EMA/RSI/MACD indicators, and built visualizations to support investment research.",
    tech: "Python, Pandas, NumPy, Matplotlib, Seaborn, yfinance, Scikit-learn",
    github: "https://github.com/sandeepreddy0485"
  },
  {
    title: "Smart Rainfall & Drought Prediction System",
    desc: "Integrated 10+ years of climate datasets, engineered features, and benchmarked Random Forest and XGBoost models to predict drought patterns.",
    tech: "Python, Scikit-learn, XGBoost, Random Forest, Pandas, NumPy, Matplotlib, Seaborn",
    github: "https://github.com/sandeepreddy0485/rainfall-ai-project"
  },
  {
    title: "AI-Driven Resume Screening System",
    desc: "Engineered an ML ranking pipeline with TF-IDF and cosine similarity to automate candidate matching and improve recruiter efficiency.",
    tech: "Python, Scikit-learn, TF-IDF, Cosine Similarity, MongoDB, Flask",
    github: "https://github.com/sandeepreddy0485/ai-resume-screening-system"
  },
  {
    title: "Portfolio Website",
    desc: "Developed a modern React portfolio site to showcase projects, certifications, and skills with animated UI interactions.",
    tech: "React, Bootstrap, AOS",
    github: "https://github.com/sandeepreddy0485"
  }
];

  return (
    <section id="projects" className="container py-5">
      <h2 className="section-title fs-3 mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map((p, idx) => (
          <div className="col-md-6" key={idx} data-aos="zoom-in">
            <div className="p-4 card-glass rounded shadow-sm h-100">
              <h5 className="project-title mb-2">{p.title}</h5>
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
              I'm open to internships, freelance work, or software engineering roles. Send a message and let's talk about your next project.
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