import React from "react";

const About = () => {
  return (
    <section id="about" class="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Objetivos</h2>
          <p>
            Somos el equipo de la terapia intensiva del hospital Dr. Rene
            Favaloro, nuestra misión es trabajar con los pacientes críticos de
            nuestra institución tomados de la mano la empatía, la calidad y la
            innovación, seguir reforzando nuestros conocimientos,
            actualizándonos e implementar medidas innovadoras es nuestro mayor
            impulso. Es por esto que creamos este espacio, para plasmar nuestras
            ideas, protocolos y desarrollo de nuestros proyectos internos.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="/projectFavaloro/img/favagroup.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Aspiramos a:</h3>
            
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Innovar en el tiempo.</strong>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Fortalecer conocimientos y actualizaciones medicas</strong> 
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Desarrollar proyectos, inteligencia artificial aplicados a la salud y beneficios para nuestros pacientes y staff</strong> 
                  </li>
                 
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Generar estadísticas internas, auditorias internas y evaluar nuestra eficacia y nuestra eficiencia.</strong> 
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Crear y fomentar protocolos internos</strong> 
                  </li>
                
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
