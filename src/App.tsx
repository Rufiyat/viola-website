import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import VisitSection from "./components/VisitSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Hero />
      <main>
        <AboutSection />
        <VisitSection />
        <ContactSection />
      </main>
      <footer className="footer">
        <p>
          © <span id="year">{new Date().getFullYear()}</span> Viola Accessories.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
