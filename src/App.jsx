import { useState } from "react";
import "./App.css";

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>
      {/* =========================
          NAVIGATION
      ========================== */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Arjun Chauhan
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>

          <a
            href="https://manufacturing--thoughts.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="blog-link"
          >
            Blog ↗
          </a>
        </div>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>
      </nav>

      {/* =========================
          HERO
      ========================== */}
      <main>
        <section id="home" className="hero">
          <div className="hero-image">
            <div className="image-glow"></div>

            <img
              src={`${BASE_URL}profile.jpg`}
              alt="Arjun Chauhan"
              className="profile-image"
            />
          </div>

          <div className="hero-content">
            <div className="eyebrow">
              ENTERPRISE TECHNOLOGY &amp; DELIVERY
            </div>

            <h1>
              Arjun
              <span>Chauhan</span>
            </h1>

            <h2>Software Implementation Manager</h2>

            <p className="hero-roles">
              Business Analyst <span>•</span> Functional Consultant{" "}
              <span>•</span> Product Owner <span>•</span> Delivery Leadership
            </p>

            <p className="summary">
              Bridging business strategy, technology and enterprise
              operations through MES, WMS, ERP integrations, warehouse
              automation and Agile delivery.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let&apos;s Connect
              </a>

              <a
                href={`${BASE_URL}resume.pdf`}
                className="btn btn-secondary"
                download
              >
                Download Resume
              </a>
            </div>

            <div className="hero-proof">
              <div>
                <strong>9+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Engineers Led</span>
              </div>

              <div>
                <strong>Global</strong>
                <span>Deployment Exposure</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            EXECUTIVE SNAPSHOT
        ========================== */}
        <section id="about" className="section">
          <div className="section-heading">
            <span>EXECUTIVE SNAPSHOT</span>
            <h2>Business, Technology &amp; Delivery</h2>
            <p>
              A techno-functional professional combining business analysis,
              enterprise implementation, product ownership and delivery
              leadership.
            </p>
          </div>

          <div className="snapshot-grid">
            <div className="snapshot-card">
              <div className="card-number">01</div>
              <h3>Business Analysis</h3>
              <p>
                Translating business needs into structured requirements,
                processes and scalable technology solutions.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">02</div>
              <h3>Functional Consulting</h3>
              <p>
                Bridging business stakeholders, technical teams and enterprise
                platforms throughout solution delivery.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">03</div>
              <h3>Product Ownership</h3>
              <p>
                Requirement prioritization, backlog management, stakeholder
                alignment and Agile product delivery.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">04</div>
              <h3>Stakeholder Management</h3>
              <p>
                Coordinating customers, business teams, engineering teams and
                leadership across implementation programs.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">05</div>
              <h3>MES &amp; WMS</h3>
              <p>
                Manufacturing Execution Systems, Warehouse Management Systems,
                traceability and operational workflows.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">06</div>
              <h3>ERP Integrations</h3>
              <p>
                Experience working with SAP, Oracle and enterprise integration
                requirements.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">07</div>
              <h3>Agile Delivery</h3>
              <p>
                Sprint planning, Azure DevOps backlogs, task management,
                burndown monitoring and delivery tracking.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="card-number">08</div>
              <h3>Enterprise Implementation</h3>
              <p>
                Roadmaps, resource planning, site readiness, deployment
                coordination and implementation leadership.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            LEADERSHIP
        ========================== */}
        <section id="leadership" className="section leadership-section">
          <div className="section-heading">
            <span>DELIVERY LEADERSHIP</span>
            <h2>Leading People. Driving Delivery.</h2>
            <p>
              Hands-on leadership across implementation teams, Agile delivery,
              planning and enterprise deployment activities.
            </p>
          </div>

          <div className="leadership-grid">
            <div className="leadership-card">
              <div className="leadership-number">01</div>
              <h3>Engineering Leadership</h3>
              <p>
                Led teams of more than 10 engineers for core implementation
                activities and coordinated teams involving QA and
                implementation engineers.
              </p>
            </div>

            <div className="leadership-card">
              <div className="leadership-number">02</div>
              <h3>Agile Delivery Management</h3>
              <p>
                Managed delivery activities using Azure DevOps including
                backlogs, tasks, sprint planning, sprint tracking and burndown
                monitoring.
              </p>
            </div>

            <div className="leadership-card">
              <div className="leadership-number">03</div>
              <h3>Resource Planning</h3>
              <p>
                Worked on resource alignment, planning and bandwidth
                utilization to ensure teams were aligned with implementation
                priorities.
              </p>
            </div>

            <div className="leadership-card">
              <div className="leadership-number">04</div>
              <h3>Implementation Planning</h3>
              <p>
                Developed implementation roadmaps, coordinated site readiness
                activities and supported planning for enterprise deployments.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            IMPLEMENTATION MANAGEMENT
        ========================== */}
        <section id="expertise" className="section">
          <div className="section-heading">
            <span>IMPLEMENTATION MANAGEMENT</span>
            <h2>From Discovery to Go-Live</h2>
            <p>
              A structured approach to enterprise implementation and delivery.
            </p>
          </div>

          <div className="implementation-flow">
            <div className="flow-card">
              <span>01</span>
              <h3>Discovery</h3>
              <p>
                Business requirements, stakeholder discussions, current-state
                understanding and solution discovery.
              </p>
            </div>

            <div className="flow-card">
              <span>02</span>
              <h3>Planning</h3>
              <p>
                Implementation roadmap, resource alignment, dependencies,
                milestones and delivery planning.
              </p>
            </div>

            <div className="flow-card">
              <span>03</span>
              <h3>Site Readiness</h3>
              <p>
                Site readiness checklists, infrastructure dependencies,
                process validation and deployment preparation.
              </p>
            </div>

            <div className="flow-card">
              <span>04</span>
              <h3>Implementation</h3>
              <p>
                Cross-functional coordination, configuration, testing,
                integration and issue resolution.
              </p>
            </div>

            <div className="flow-card">
              <span>05</span>
              <h3>Go-Live</h3>
              <p>
                Deployment coordination, stabilization, stakeholder alignment
                and transition into operations.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================== */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span>ENTERPRISE PROJECT PORTFOLIO</span>
            <h2>Solutions Delivered</h2>
            <p>
              Selected enterprise technology and implementation initiatives
              across manufacturing, warehouse automation and digital operations.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card project-featured">
              <div className="project-top">
                <span className="project-tag">01 / WAREHOUSE AUTOMATION</span>
                <span className="project-arrow">↗</span>
              </div>

              <h3>Warehouse Automation Platform</h3>

              <p className="project-role">
                Software Implementation Manager
              </p>

              <p>
                Enterprise warehouse automation implementation involving WMS,
                SAP integration, ASRS, PTL, robotics and conveyor automation.
              </p>

              <div className="project-skills">
                <span>WMS</span>
                <span>SAP</span>
                <span>ASRS</span>
                <span>PTL</span>
                <span>Robotics</span>
                <span>Automation</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span className="project-tag">02 / INDUSTRY 4.0</span>
                <span className="project-arrow">↗</span>
              </div>

              <h3>Industry 4.0 MES Platform</h3>

              <p className="project-role">Senior Engineer</p>

              <p>
                Manufacturing execution solution covering MES, ERP
                integration, production traceability, machine connectivity and
                operational workflows.
              </p>

              <div className="project-skills">
                <span>MES</span>
                <span>ERP</span>
                <span>Traceability</span>
                <span>Machine Integration</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span className="project-tag">03 / INDUSTRIAL IOT</span>
                <span className="project-arrow">↗</span>
              </div>

              <h3>IoT Monitoring Platform</h3>

              <p className="project-role">MES Engineer</p>

              <p>
                Digital manufacturing monitoring platform focused on OEE
                tracking, factory simulation, real-time dashboards and
                operational analytics.
              </p>

              <div className="project-skills">
                <span>IoT</span>
                <span>OEE</span>
                <span>Dashboards</span>
                <span>Analytics</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span className="project-tag">04 / TRACEABILITY</span>
                <span className="project-arrow">↗</span>
              </div>

              <h3>Enterprise Traceability Solutions</h3>

              <p className="project-role">Enterprise Implementation</p>

              <p>
                Traceability and supply chain visibility solutions involving
                warehouse processes, Oracle ERP integration and inventory
                management.
              </p>

              <div className="project-skills">
                <span>Oracle</span>
                <span>Traceability</span>
                <span>Inventory</span>
                <span>Supply Chain</span>
              </div>
            </article>
          </div>
        </section>

        {/* =========================
            CAREER JOURNEY
        ========================== */}
        <section id="journey" className="section">
          <div className="section-heading">
            <span>CAREER PROGRESSION</span>
            <h2>Career Journey</h2>
            <p>
              Progression from engineering and manufacturing technology into
              enterprise implementation leadership.
            </p>
          </div>

          <div className="career-timeline">
            <div className="career-item">
              <span className="career-year">2017 — 2021</span>

              <div className="career-card">
                <div className="career-dot"></div>

                <h3>Junior Engineer → Engineer</h3>
                <h4>Motherson Group</h4>

                <p>
                  Built a strong engineering foundation with exposure to
                  manufacturing processes, enterprise technology and industrial
                  systems.
                </p>
              </div>
            </div>

            <div className="career-item">
              <span className="career-year">2021 — 2022</span>

              <div className="career-card">
                <div className="career-dot"></div>

                <h3>MES Engineer</h3>
                <h4>Samvardhana Motherson</h4>

                <p>
                  Worked on MES implementation, production systems,
                  traceability and machine connectivity in manufacturing
                  environments.
                </p>
              </div>
            </div>

            <div className="career-item">
              <span className="career-year">2022 — 2024</span>

              <div className="career-card">
                <div className="career-dot"></div>

                <h3>Senior Engineer</h3>
                <h4>Motherson Technology Services</h4>

                <p>
                  Progressed into enterprise solution delivery, stakeholder
                  coordination, ERP integration and functional consulting.
                </p>
              </div>
            </div>

            <div className="career-item active">
              <span className="career-year">2024 — Present</span>

              <div className="career-card">
                <div className="career-dot"></div>

                <h3>Software Implementation Manager</h3>
                <h4>Addverb Technology</h4>

                <p>
                  Leading enterprise implementation activities covering
                  delivery planning, resource alignment, stakeholder
                  management, team leadership and warehouse automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SKILLS
        ========================== */}
        <section className="section">
          <div className="section-heading">
            <span>CORE TECHNOLOGY &amp; DELIVERY SKILLS</span>
            <h2>Professional Toolkit</h2>
          </div>

          <div className="skills-cloud">
            <span>Business Analysis</span>
            <span>Functional Consulting</span>
            <span>Product Ownership</span>
            <span>Requirement Management</span>
            <span>Stakeholder Management</span>
            <span>MES</span>
            <span>WMS</span>
            <span>SAP</span>
            <span>Oracle</span>
            <span>SQL</span>
            <span>Azure DevOps</span>
            <span>Agile Delivery</span>
            <span>Jira</span>
            <span>Warehouse Automation</span>
            <span>ERP Integration</span>
            <span>Resource Planning</span>
            <span>Site Readiness</span>
            <span>Implementation Roadmaps</span>
            <span>Team Leadership</span>
          </div>
        </section>

        {/* =========================
            ACHIEVEMENTS
        ========================== */}
        <section id="achievements" className="section">
          <div className="section-heading">
            <span>PROFESSIONAL RECOGNITION</span>
            <h2>Achievements</h2>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>Rising Star</h3>
              <p>Professional recognition for contribution and performance.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>Star Performer</h3>
              <p>Recognition for delivery and professional performance.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>Guru Recognition</h3>
              <p>Recognition for expertise, knowledge and contribution.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>CEO Club</h3>
              <p>Professional recognition through CEO Club membership.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>Chairman Club</h3>
              <p>Recognition through Chairman Club membership.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>Customer Excellence</h3>
              <p>100% customer feedback rating and strong customer focus.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">★</div>
              <h3>International Deployment</h3>
              <p>
                Exposure to international implementation and deployment
                activities.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            CERTIFICATIONS
        ========================== */}
        <section id="certifications" className="section">
          <div className="section-heading">
            <span>PROFESSIONAL DEVELOPMENT</span>
            <h2>Certifications</h2>
          </div>

          <div className="certifications-grid">
            <div className="certification-card">
              <span>01</span>
              <h3>ISTQB CTFL</h3>
              <p>Foundation Level Software Testing</p>
            </div>

            <div className="certification-card">
              <span>02</span>
              <h3>Scrum Foundation</h3>
              <p>Professional Certificate</p>
            </div>

            <div className="certification-card">
              <span>03</span>
              <h3>Business Intelligence</h3>
              <p>Foundation Certification</p>
            </div>

            <div className="certification-card">
              <span>04</span>
              <h3>Project Management</h3>
              <p>Foundation Certification</p>
            </div>

            <div className="certification-card">
              <span>05</span>
              <h3>RabbitMQ</h3>
              <p>Certification</p>
            </div>

            <div className="certification-card">
              <span>06</span>
              <h3>Introduction to IoT</h3>
              <p>Professional Learning</p>
            </div>

            <div className="certification-card">
              <span>07</span>
              <h3>Google Analytics</h3>
              <p>Professional Certification</p>
            </div>
          </div>
        </section>

        {/* =========================
            BLOG
        ========================== */}
        <section className="section blog-section">
          <div className="blog-card">
            <div className="blog-content">
              <span className="section-label">THOUGHT LEADERSHIP</span>

              <h2>Manufacturing Thoughts</h2>

              <p>
                Exploring manufacturing technology, MES, Industry 4.0,
                enterprise systems, implementation challenges and digital
                transformation.
              </p>

              <a
                href="https://manufacturing--thoughts.blogspot.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Manufacturing Thoughts ↗
              </a>
            </div>

            <div className="blog-mark">
              MT
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================== */}
        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <span className="section-label">LET&apos;S CONNECT</span>

            <h2>
              Let&apos;s build better
              <span> enterprise solutions.</span>
            </h2>

            <p>
              Interested in Business Analysis, Product Ownership, Functional
              Consulting, Software Implementation, Enterprise Delivery and
              Leadership opportunities.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:arjundelhi1100@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">@</span>
                <span>
                  <small>Email</small>
                  arjundelhi1100@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/arjun-chauhan-0487061b0/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">in</span>
                <span>
                  <small>LinkedIn</small>
                  Professional Profile ↗
                </span>
              </a>

              <a
                href="https://manufacturing--thoughts.blogspot.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">MT</span>
                <span>
                  <small>Blog</small>
                  Manufacturing Thoughts ↗
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div>
          <strong>Arjun Chauhan</strong>
          <span>
            Software Implementation Manager
          </span>
        </div>

        <p>
          © {new Date().getFullYear()} Arjun Chauhan. Built with React &amp;
          Vite.
        </p>

        <a
          href="https://manufacturing--thoughts.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          Manufacturing Thoughts ↗
        </a>
      </footer>
    </div>
  );
}

export default App;