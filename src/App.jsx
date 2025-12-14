import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">JJ Data Solution</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Unlocking Value through <span className="highlight">Data Intelligence</span></h1>
          <p className="tagline">Providing advanced data analysis and modelling services since 2011.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </header>

      <section id="about" className="section light-bg">
        <div className="container">
          <h2>Who We Are</h2>
          <p className="lead-text">
            Established in 2011, JJ Data Solution has been at the forefront of data analytics.
            We transform complex data into actionable insights, helping our clients stay ahead in a data-driven world.
          </p>
        </div>
      </section>

      <section id="services" className="section dark-bg">
        <div className="container">
          <h2>Our Services</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Data Analysis</h3>
              <p>Comprehensive exploratory data analysis to uncover hidden trends.</p>
            </div>
            <div className="card">
              <h3>Predictive Modelling</h3>
              <p>State-of-the-art machine learning models to forecast future outcomes.</p>
            </div>
            <div className="card">
              <h3>Consulting</h3>
              <p>Strategic guidance on building data infrastructure and teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section light-bg">
        <div className="container">
          <h2>Our Leadership</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="avatar-placeholder">YW</div>
              <h3>Yizhong Wang</h3>
              <p className="role">Chief Executive Officer</p>
              <p className="bio">Leading our vision with over a decade of expertise in data strategy.</p>
            </div>
            <div className="team-member">
              <div className="avatar-placeholder">HL</div>
              <h3>Hong Liu</h3>
              <p className="role">Chief Financial Officer</p>
              <p className="bio">Ensuring financial integrity and sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Ready to transform your business?</p>
          <p className="email">info@jjdatasolution.com</p>
          <p className="copyright">&copy; {new Date().getFullYear()} JJ Data Solution. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
