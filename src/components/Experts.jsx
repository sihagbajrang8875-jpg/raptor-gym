import expr1 from "../assets/exprtsize1.mp4";
import expr2 from "../assets/exprtsize2.mp4";
import expr3 from "../assets/exprtsize3.mp4";

const experts = [
  {
    name: 'John Doe',
    role: 'Strength & Conditioning Specialist',
    img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=400&h=500&fit=crop&q=80',
    video: expr1,
  },
  {
    name: 'Jane Smith',
    role: 'Yoga & Flexibility Expert',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&q=80',
    video: expr2,
  },
  {
    name: 'Mike Johnson',
    role: 'CrossFit Coach',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&q=80',
    video: expr3
  },
];

export default function Experts() {
  return (
    <section id="experts" className="experts-section">
      <div className="container">
        <div className="section-header">
          <p className="label">THE ELITE TEAM</p>
          <h2>Meet Our Experts</h2>
        </div>
        <div className="new-experts-grid">
          {experts.map(({ name, role, img, video }) => (
            <div className="premium-expert-card" key={name}>
              <div className="expert-media-wrapper">
                {video ? (
                  <video autoPlay loop muted playsInline preload="auto" className="expert-media">
                    <source src={video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={img} alt={name} className="expert-media" />
                )}
                <div className="expert-gradient-overlay"></div>
              </div>
              <div className="premium-expert-info">
                <h3>{name}</h3>
                <p className="expert-role">{role}</p>
                <div className="expert-socials">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
