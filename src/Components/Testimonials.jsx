import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Mathew has an exceptional ability to bridge the gap between technical teams and business stakeholders. His clear communication and strategic thinking helped us deliver our most successful product launch to date.",
      author: "Sarah Chen",
      role: "Engineering Lead",
      company: "TechCorp"
    },
    {
      quote: "Working with Mathew was a game-changer for our product roadmap. He brought data-driven insights and user-centric thinking that transformed how we approach product development.",
      author: "Michael Rodriguez",
      role: "Head of Product",
      company: "FinanceNow"
    },
    {
      quote: "Mathew's ability to prioritize ruthlessly while keeping the team motivated is remarkable. He turned our backlog chaos into a well-oiled machine, and our velocity increased by 40%.",
      author: "Jennifer Park",
      role: "Scrum Master",
      company: "DataFlow Inc"
    }
  ];

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What People Say</h2>
          <p className="testimonials-subtitle">
            Feedback from colleagues and stakeholders I've had the pleasure of working with
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon-wrapper">
                <Quote className="quote-icon" />
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}