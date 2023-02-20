import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>UTI Hosp. Dr Rene Favaloro</h1>
        <p>
          Nosotros somos{" "}
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Profesionales")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Empaticos")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Innovacion")
                  .start();
              }}
            />
          </span>
        </p>
        <div className="social-links">
          <a className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
