import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Arjun Chauhan</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <img
          src="/profile.jpg"
          alt="Arjun Chauhan"
        />

        <h1>Arjun Chauhan</h1>

        <h2>Software Implementation Manager</h2>

        <p className="subtitle">
          Techno-Functional Consultant • Business Analyst • Product Owner
        </p>

        <p className="summary">
          Helping organizations transform business requirements into scalable
          enterprise solutions through MES, WMS, ERP integrations and Agile
          delivery.
        </p>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>9+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <p>Customer Feedback</p>
        </div>

        <div className="stat-card">
          <h3>Enterprise</h3>
          <p>Implementations</p>
        </div>

        <div className="stat-card">
          <h3>Global</h3>
          <p>Deployment Exposure</p>
        </div>
      </section>

      <section id="about" className="section">
        <h2>Executive Snapshot</h2>

        <div className="snapshot-grid">
          <div className="card">Business Analysis</div>
          <div className="card">Functional Consulting</div>
          <div className="card">Product Ownership</div>
          <div className="card">Stakeholder Management</div>
          <div className="card">MES & WMS Solutions</div>
          <div className="card">ERP Integrations</div>
          <div className="card">Agile Delivery</div>
          <div className="card">Enterprise Implementations</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Enterprise Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>Warehouse Automation Platform</h3>

            <p>
              <strong>Role:</strong> Software Implementation Manager
            </p>

            <p>
              WMS, SAP, Robotics, PTL, ASRS and Warehouse Automation.
            </p>
          </div>

          <div className="card">
            <h3>Industry 4.0 MES</h3>

            <p>
              <strong>Role:</strong> Senior Engineer
            </p>

            <p>
              MES, ERP Integration, Machine Connectivity and Traceability.
            </p>
          </div>

          <div className="card">
            <h3>IoT Monitoring Platform</h3>

            <p>
              <strong>Role:</strong> MES Engineer
            </p>

            <p>
              OEE Tracking, Factory Simulation and Real-Time Monitoring.
            </p>
          </div>
        </div>
      </section>

      <section id="journey" className="section">
        <h2>Career Journey</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>2024 - Present</h3>
            <p>Software Implementation Manager</p>
            <p>Addverb Technology</p>
          </div>

          <div className="timeline-item">
            <h3>2022 - 2024</h3>
            <p>Senior Engineer</p>
            <p>Motherson Technology Services</p>
          </div>

          <div className="timeline-item">
            <h3>2021 - 2022</h3>
            <p>MES Engineer</p>
            <p>Samvardhana Motherson</p>
          </div>

          <div className="timeline-item">
            <h3>2017 - 2021</h3>
            <p>Junior Engineer → Engineer</p>
            <p>Motherson Group</p>
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <h2>Achievements</h2>

        <div className="projects">
          <div className="card">🏆 Rising Star Award</div>
          <div className="card">🏆 Star Performer</div>
          <div className="card">🏆 Guru Recognition</div>
          <div className="card">🏆 CEO Club Member</div>
          <div className="card">🏆 Chairman Club Member</div>
          <div className="card">🏆 100% Customer Feedback</div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Let's Connect</h2>

        <p>
          Interested in discussing Business Analysis, Product Ownership,
          Functional Consulting, Enterprise Implementations and Leadership
          Opportunities.
        </p>

        <br />

        <p>Email: arjundelhi1100@gmail.com</p>
      </section>
    </div>
  );
}

export default App;