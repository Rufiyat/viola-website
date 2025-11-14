// src/components/AboutSection.tsx

const imageBase = `${import.meta.env.BASE_URL}images/`;

const AboutSection = () => {
  return (
    <section className="section section-dark" id="about">
      <div className="section-inner two-column">
        <div className="section-text">
          <h2>About Viola</h2>
          <p>
            We’re a small accessories boutique located in Arrowhead Towne
            Center, Arizona.
          </p>
          <p>
            Discover a curated selection of handbags, jewelry, and more –
            affordable pieces that bring a touch of sparkle to your day.
          </p>
        </div>

        <div className="section-gallery">
          <div className="gallery-main">
            <img
              src={`${imageBase}store-main.jpg`}
              alt="Viola accessories kiosk in the mall"
            />
          </div>

          <div className="gallery-right">
            <div className="gallery-right-top">
              <img
                src={`${imageBase}store-kiosk.jpg`}
                alt="Display shelves with accessories"
              />
            </div>
            <div className="gallery-right-bottom">
              <img
                src={`${imageBase}necklaces.jpg`}
                alt="Necklaces and lockets on display"
              />
              <img
                src={`${imageBase}sunglasses.jpg`}
                alt="Sunglasses display"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
