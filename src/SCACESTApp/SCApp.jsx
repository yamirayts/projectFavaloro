import { Link } from "react-router-dom";
import "./../style.css";

const SCApp = () => {
  return (
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>SCACEST</h2>
          <p>
            Con esta App buscamos optimizar nuestra calidad a la hora de tratar
            a un paciente en el contexto de un SCACEST. Sabemos que en este caso
            el tiempo es sinónimo de resultados, sinónimo de miocardio salvado,
            es por eso tan importante que podamos medir nuestros tiempos, para
            poder optimizar los resultados y mejorar la morbimortalidad de
            nuestros pacientes.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <Link to="/proyecto/SCANuevoRegistro">
              <div class="count-box">
                <i class="bi bi-bookmark-plus"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Nueva Carga</p>
              </div>
            </Link>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <Link to="/proyecto/pendingLoadContainer">
              <div class="count-box">
                <i class="bi bi-clipboard-pulse"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Cargas pendientes de completar</p>
              </div>
            </Link>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
              <i class="bi bi-clipboard-data"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Estadistica</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
              <i class="bi bi-database-check"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Ultimas 3 cargas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SCApp;
