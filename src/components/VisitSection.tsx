// src/components/VisitSection.tsx

const imageBase = `${import.meta.env.BASE_URL}images/`;

const VisitSection = () => {
  return (
    <section className="section section-mid" id="visit">
      <div className="section-inner two-column visit-two-column">
        {/* Left side: photo + map stacked */}
        <div className="visit-left">
          <div className="card visit-photo">
            <img
              src={`${imageBase}store-kiosk.jpg`}
              alt="Front view of Viola accessories store"
            />
          </div>

          <div className="card visit-map">
            {/* Your actual Google Maps embed URL */}
            <iframe
              title="Viola Accessories Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.568079170157!2d-112.22465!3d33.6424395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b69600986a33b%3A0xaa2e25d6c9ec17de!2sViola!5e0!3m2!1sen!2sca!4v1763091266624!5m2!1sen!2sca"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right side: text */}
        <div className="visit-text-block section-text">
          <h2>Visit Us</h2>
          <p className="visit-address">
            7700 W Arrowhead Towne Center,
            <br />
            Glendale, AZ, United States
          </p>

          <div className="visit-hours">
            <h3>Opening Hours</h3>
            <p>Mon – Sat: 10am – 9pm</p>
            <p>Sun: 11am – 6pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
