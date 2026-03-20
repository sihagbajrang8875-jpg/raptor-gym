const services = [
  {
    icon: 'fas fa-dumbbell',
    title: 'Functional Training',
    desc: 'Build practical strength and mobility with exercises that mimic real-life movements and improve overall functionality.',
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Cardio Core',
    desc: 'Enhance cardiovascular health and endurance with our variety of cardio equipment and high-intensity workouts.',
  },
  {
    icon: 'fas fa-weight-hanging',
    title: 'Musculation',
    desc: 'Develop muscle mass and strength through targeted weight training programs designed for all fitness levels.',
  },
  {
    icon: 'fas fa-user-friends',
    title: 'Personal Training',
    desc: 'Receive personalized guidance from certified trainers who tailor workouts to your specific goals and needs.',
  },
  {
    icon: 'fas fa-fire',
    title: 'CrossFit Elite',
    desc: 'Join our high-intensity CrossFit classes that combine strength, cardio, and functional movements for ultimate fitness.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Sports Nutrition',
    desc: 'Optimize your performance with expert nutritional guidance and meal planning to fuel your body effectively.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <p className="label">OUR SERVICE</p>
          <h2>Programs & Services</h2>
        </div>
        
        <div className="new-services-grid">
          {services.map(({ icon, title, desc }) => (
            <div className="new-service-card" key={title}>
              <div className="glass-icon">
                <i className={icon}></i>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
