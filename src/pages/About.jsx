import "../styles/pages/About.css"
const About = () => {
  return (
    <div className="about-page">
      <section className="about-section who-we-are">
        <div className="section-content">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>TechCare Support</strong>, your trusted partner for reliable, fast, and friendly IT solutions. 
            Founded with a mission to simplify technology for everyone, we’re a team of certified IT professionals 
            passionate about helping individuals and businesses stay connected, secure, and productive.
          </p>
          <p>
            Whether you're a homeowner dealing with a slow Wi-Fi connection or a growing business needing network optimization, 
            we bring expertise, patience, and personalized service to every challenge. Our team combines years of industry 
            experience with a customer-first mindset. We believe technology should work <em>for</em> you—not the other way around.
          </p>
        </div>
        <div className="section-image who-we-are-img"></div>
      </section>

      <section className="about-section what-we-do">
        <div className="section-image what-we-do-img"></div>
        <div className="section-content">
          <h2>What We Do</h2>
          <p>We provide comprehensive IT support services tailored to your needs—whether at home or in the office.</p>
          <ul className="services-list">
            <li><strong>Software & System Support:</strong> Updates, virus removal, performance optimization.</li>
            <li><strong>Network Setup & Troubleshooting:</strong> Home Wi-Fi, business networks, speed fixes.</li>
            <li><strong>Hardware Assistance:</strong> Setup, configuration, and repair of devices.</li>
            <li><strong>Remote & On-Site Support:</strong> Flexible help, anytime, anywhere.</li>
            <li><strong>Business IT Solutions:</strong> Maintenance, backups, cybersecurity, and cloud services.</li>
          </ul>
        </div>
      </section>

      <section className="about-section why-choose-us">
        <div className="section-content">
          <h2>Why Choose TechCare Support?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Local & Responsive</h3>
              <p>Same-day or next-day service when you need it most.</p>
            </div>
            <div className="benefit-card">
              <h3>Certified Technicians</h3>
              <p>Trained, background-checked, and up-to-date with the latest tech.</p>
            </div>
            <div className="benefit-card">
              <h3>Transparent Pricing</h3>
              <p>No hidden fees. Honest quotes and no upselling.</p>
            </div>
            <div className="benefit-card">
              <h3>Satisfaction Guaranteed</h3>
              <p>If you’re not happy, we’ll make it right.</p>
            </div>
          </div>
          <p className="final-message">
            At TechCare Support, we don’t just fix problems—we build relationships. 
            Let us be your go-to tech partner for peace of mind.
          </p>
        </div>
        <div className="section-image why-choose-us-img"></div>
      </section>
    </div>
  );
};

export default About;