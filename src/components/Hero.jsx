export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-crown"></i> 
          <span>PREMIUM FITNESS EXPERIENCE</span>
        </div>
        <h1>
          <span className="highlight">FORGE</span> STRENGTH,<br />
          <span className="highlight">SCULPT</span> WELLNESS,<br />
          <span className="highlight">ELEVATE</span> MIND
        </h1>
        <p>
          Transform your body, unleash your potential, and join the elite
          fitness community that never settles for ordinary.
        </p>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500<span>+</span></span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat">
            <span className="stat-number">15<span>+</span></span>
            <span className="stat-label">Expert Trainers</span>
          </div>
          <div className="stat">
            <span className="stat-number">24<span>/7</span></span>
            <span className="stat-label">Access</span>
          </div>
        </div>
        
        <div className="hero-buttons">
          <a href="#contact" className="cta-button primary">
            START YOUR JOURNEY <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#services" className="cta-button secondary">
            EXPLORE SERVICES
          </a>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
