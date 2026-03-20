export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <p className="label">REACH OUT</p>
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-layout">
          
          <div className="contact-info-panel">
            <h2>Ready to Start?</h2>
            <p>
              Your journey to a stronger, healthier version of yourself begins here. Contact us today!
            </p>
            
            <div className="info-cards">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p>+91 6280-761142</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>Sco 51-54 2nd Floor, Golden Green Market, Sector 124, Sunny Enclave, Kharar, Punjab 140301</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p>info@raptorgym.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.5898803158763!2d76.66274427503463!3d30.762348485293414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff159f9d0328b%3A0x4893f04fef1acad3!2sRaptor%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1710695027581!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              title="Raptor Gym Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
