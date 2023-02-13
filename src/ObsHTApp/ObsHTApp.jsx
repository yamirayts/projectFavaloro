import { Link } from "react-router-dom";

const ObsHTApp = () => {
  return (
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Obs HTA</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            <Link to="/proyecto/ObsHTA/NuevoRegistro">
              <div class="count-box">
                <i class="bi bi-bookmark-plus"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Generar Primera carga</p>
              </div>
            </Link>
          </div>

          <div class="col-lg-6 col-md-6 mt-3 mt-md-0">
            <div class="count-box">
              <i class="bi bi-clipboard-data"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Cargas pendientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ObsHTApp;
