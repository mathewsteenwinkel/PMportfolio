import React from "react";
import "./About.css";
import FadeSlideIn from "./FadeIn";


const About = () => {
  return (
    <FadeSlideIn>
    <section className="about-me">
      <div className="about-me-content">
        <h2>About Me</h2>

        <div class="about-content">
          <p>I didn't take the traditional path into product management and that's exactly what makes me effective at it.</p>

          <p>Before becoming a Product Owner, I was an entrepreneur. I founded Abseil Clothing, building a brand from scratch for the climbing community, and later launched Sinomii, a web development company that helped small businesses double their sales. These experiences taught me something invaluable: <strong>products succeed when they solve real problems for real people.</strong></p>

          <p>I also spent time in the mountains. Based in Canmore, Alberta, I'm an avid climber who founded the MacEwan University Climbing Club and currently work at Arc'teryx's first North American mountain store, where I contributed to over $1M in sales within six weeks. This outdoor background taught me about risk assessment, adaptability, and the importance of reliable gear when stakes are high principles I apply to every product I build.</p>

          <p>Then I dove deep into the technical side. I completed an intensive full-stack web development program at Lighthouse Labs, building applications with React, Node.js, and PostgreSQL. This hands on coding experience means I can review pull requests, understand technical constraints, and have credible conversations with engineering teams about trade offs and timelines.</p>

          <p>Today, I bring all of this together as a Product Owner: the entrepreneurial mindset to see opportunities, the technical skills to understand what's possible, and the business acumen to prioritize what matters most. I thrive in fast-paced environments where I can roll up my sleeves, collaborate with cross-functional teams, and ship products that make a genuine impact.</p>

          <p>When I'm not building products, you'll find me on a climbing wall or exploring the Canadian Rockies—always looking for the next challenge to tackle.</p>
        </div>

      <div class="container">
        <h2>Core Strengths</h2>
        <div class="strengths-grid">
            <div class="strength-card">
                <div class="icon">🚀</div>
                <h3>Rapid MVP Development & Delivery</h3>
                <p>I excel at moving fast without breaking things. At Athlete Tech Group, I led the development of a streamlined MVP in just two months, converting a mobile app to responsive web and migrating an entire legacy database—all while maintaining a 100% data integrity rate and boosting user conversions by 10%.</p>
            </div>

            <div class="strength-card">
                <div class="icon">🔄</div>
                <h3>Process Optimization & Efficiency</h3>
                <p>I bring structure to chaos. At Carmella Marketing, I introduced AI-powered wireframe reviews and product management techniques that cut development cycles in half and achieved a 100% on-time delivery rate. The result? 50% faster client delivery and an 18% boost in company sales.</p>
            </div>

            <div class="strength-card">
                <div class="icon">💼</div>
                <h3>Full-Stack Product Mindset</h3>
                <p>I bridge the gap between technical and business. With hands-on experience in React, Node.js, and modern development tools, plus PSPO certification and a Business Management foundation, I speak both languages fluently—ensuring seamless communication between engineering teams and business stakeholders.</p>
            </div>
        </div>
    </div>
      </div>

    </section>
    </FadeSlideIn>
  );
};

export default About;
