import React from "react";
import Header from "../components/common/header";
import Newsletter from "../components/common/newsletter";

const Webinars = () => {
  return (
    <div>
      <Header />
      <section className="hero webinars-hero">
        <div className="container">
          <h1>Explore Our Webinars on Internal Controls, SOX & Risk Culture</h1>
          <p>
            From cultural change in SOX to practical implementation of internal controls,
            our webinars bring you real-world strategies, thought leadership, and conversations
            that matter to CFOs, auditors, and compliance professionals.
          </p>
          <a href="#upcoming" className="btn btn-primary">
            🔵 Register for Upcoming Webinars
          </a>
        </div>
      </section>

      <section id="upcoming" className="container webinars-section">
        <h2>Upcoming Live Webinars</h2>
        <div className="webinar-card">
          <h3>Building a Strong SOX Culture: Practical Tips for 2025</h3>
          <p><strong>Date & Time:</strong> June 20, 2025 | 3:00 PM GMT</p>
          <p>
            Learn how companies are reshaping internal control environments and making
            SOX a driver of transparency and efficiency.
          </p>
          <a href="#" className="btn btn-secondary">Register Now</a>
        </div>
      </section>

      <section className="container webinars-section">
        <h2>Why Join Our Webinars?</h2>
        <ul>
          <li>Gain actionable insights on governance, internal audit, SOX, ESG</li>
          <li>Sessions led by experts with global & local experience</li>
          <li>Designed for CFOs, Audit Leads, Risk Managers, and Policy Teams</li>
          <li>Access to replays & summaries for easy reference</li>
        </ul>
      </section>

      <section className="container webinars-section">
        <h2>Subscribe for Updates</h2>
        <p>
          Subscribe to receive notifications about upcoming webinars on internal
          controls, SOX compliance, and more.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>

      <Newsletter newsletter={true} setOpen={() => {}} industryPage={false} />
    </div>
  );
};

export default Webinars;
