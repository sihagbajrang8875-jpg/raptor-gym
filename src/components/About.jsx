import { useState, useRef } from "react";
import aboutVid from "../assets/aboutvdo.mov";

export default function About() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-video-container">
            <div className="video-glow-effect"></div>
            <video
              ref={videoRef}
              src={aboutVid}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="premium-video"
            />
            <button
              className="premium-mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}></i>
            </button>
            <div className="accent-element"></div>
          </div>
          <div className="about-text-content">
            <p className="label">THE RAPTOR ETHOS</p>
            <h2>Meet Raptor Gym</h2>
            <p className="lead-text">
              Fitness is not just a routine; it&apos;s a way of life. At Raptor Gym,
              we foster a community where every member is empowered to push their
              limits and achieve extraordinary results.
            </p>
            <div className="divider"></div>
            <p>
              Our state-of-the-art facilities, expert trainers, and supportive
              environment create the perfect setting for your fitness journey.
              Whether you&apos;re a beginner or an elite athlete, we provide the tools
              and motivation you need to succeed.
            </p>
            <p>
              Join us and discover the power of consistent effort, proper
              nutrition, and unwavering dedication in transforming your body and
              mind.
            </p>
            <a href="#contact" className="cta-link">Join Our Community <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
