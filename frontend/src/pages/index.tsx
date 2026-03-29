import React from 'react';

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-top">
        <div className="logo">LOGO</div>

        <nav className="nav-tabs">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Trips</a>
          <a href="#">Updates</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className="hero-content">
        <h1>Peaks and Professors</h1>
        <p>Adventure, community, and exploration.</p>
        <button>Join Us</button>
      </div>

      <div className="hero-image-placeholder">
        <p>Slideshow Image Goes Here</p>
      </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>Welcome to Peaks and Professors</h2>
          <p>
            We bring together adventure, learning, and community through
            unforgettable outdoor experiences.
          </p>
          <button>Learn More</button>
        </div>

        <div className="about-visual">
          <p>Image / Quote / Highlight goes here</p>
        </div>
      </section>

      <section className="cool">
        <h2>Why Join Us?</h2>

        <div className="cool-cards">
          <div className="cool-card">
            <h3>Community</h3>
            <p>Meet people who love exploring, learning, and making memories.</p>
          </div>

          <div className="cool-card">
            <h3>Adventure</h3>
            <p>Discover new trails, places, and experiences beyond the classroom.</p>
          </div>

          <div className="cool-card">
            <h3>Learning</h3>
            <p>Connect with professors and students in a unique outdoor setting.</p>
          </div>
        </div>
      </section>

      <section className="events">
        <div className="events-text">
          <h2>Upcoming Trips</h2>
          <p>
            Stay updated with our upcoming hikes, outdoor adventures, and group
            events. Check the calendar to see what’s coming next.
          </p>
          <button>View All Trips</button>
        </div>

        <div className="events-calendar">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=peaksandprofessors%40ucsd.edu&ctz=America%2FLos_Angeles"
            style={{ border: 0 }}
            width="100%"
            height="400"
            loading="lazy"
            title="Peaks and Professors Calendar"
          ></iframe>
        </div>
      </section>

      <section className="updates">
        <div className="updates-news">
          <h2>Recent Updates</h2>
          <ul>
            <p> New trips coming soon! </p>
            <p> Stay Tuned  </p>
          </ul>
        </div>

        <div className="updates-explore">
          <h2>Explore</h2>
          <ul>
            <li><a href="#">Photo Gallery</a></li>
            <li><a href="#">Past Trip Highlights</a></li>
            <li><a href="#">Student Spotlights</a></li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <h3>Peaks & Professors</h3>
          <p>© 2026 All Rights Reserved</p>
        </div>

        <div className="footer-center">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#events">Trips</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-right">
          <p>Social:</p>
          <div className="social-icons">
            <span>FB</span>
            <span>IG</span>
            <span>DI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}