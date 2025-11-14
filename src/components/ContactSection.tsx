// src/components/ContactSection.tsx

// Simple inline SVG icons (no extra files needed)
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    <path d="M13.5 21v-6h2.1l.4-3h-2.5V9.3c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.8 5 13.8 5c-2.5 0-4.1 1.5-4.1 4.2V12H7.8v3h1.9v6h3.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ContactSection = () => {
  return (
    <section className="section section-dark" id="contact">
      <div className="section-inner contact-inner">
        <div className="section-text">
          <h2>Contact Us</h2>
          <p>
            Have a question about a bag, a gift idea, or a special occasion?
            Send us a message or reach out on social – we’d love to help.
          </p>

          <div className="contact-details">
            {/* Replace with your real phone/email if you’d like */}
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> hello@shopviola.com
            </p>
          </div>

          <div className="contact-social">
            <p>
              <strong>Find us on social:</strong>
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/ViolaAccessoriesAZ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--facebook"
              >
                <span className="social-icon">
                  <FacebookIcon />
                </span>
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/viola_accessories_az/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--instagram"
              >
                <span className="social-icon">
                  <InstagramIcon />
                </span>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
