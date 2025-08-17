import React, { useState } from "react";
import "../styles/components/TestimonialCard.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      review:
        "The team here at TechCare were extremely helpful and patient with my PC situation. They identified what I needed, then talked me through exactly what I needed to do in order for my PC to run as new! Actually better than new! They also were clear in letting me know potential downfalls in case it didn’t work. I appreciated their honesty in advance and decided to take their recommendations anyway. They did not let me down.",
      name: "Jenny",
      location: "Burbank, California",
    },
    {
      id: 2,
      rating: 5,
      review:
        "When resolving issues the technicians here are knowledgeable, courteous and resourceful. Resolution is quick and they usually increase customer knowledge. I've been with TechCare for almost 1 year now and would highly recommend them to anyone having problems.",
      name: "Donald",
      location: "Carteret, NJ",
    },
    {
      id: 3,
      rating: 5,
      review:
        "Everyone we deal with at TechCare is knowledgeable, efficient, and solutions-driven. We run several businesses from our home office location (two offices and several computer units and devices). We have relied on this group for some time now, and they always come-through with the right service and solution. Highly recommend!",
      name: "Rick",
      location: "Blue Bell, PA",
    },
    {
      id: 4,
      rating: 5,
      review:
        "TechCare has been an invaluable resource for our small business. Their technicians are always prompt, professional, and provide comprehensive solutions. Whether it's hardware repairs or software troubleshooting, they go above and beyond to ensure everything runs smoothly. Highly recommended!",
      name: "Sarah",
      location: "Austin, Texas",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section">
      <h2>Actual Customer Reviews</h2>
      <p className="subtitle">Don’t take our word for it – read what our customers say!</p>
      <div className="testimonials-container">
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="review">"TechCare transformed our business operations. Their support team is responsive and knowledgeable. Highly recommended!"</p>
          <div className="customer-info">
            <strong>John Okafor</strong> - Lagos
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="review">"Outstanding service! They helped me set up my home network and provided training for my family. Very professional."</p>
          <div className="customer-info">
            <strong>Sarah Adeyemi</strong> - Abuja
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="review">"The business plan saved us thousands in IT costs. Their cybersecurity solutions are top-notch and affordable."</p>
          <div className="customer-info">
            <strong>Michael Johnson</strong> - Port Harcourt
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;