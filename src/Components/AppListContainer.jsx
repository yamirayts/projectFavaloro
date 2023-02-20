import SCACard from "../SCACESTApp/SCACard";
import ObsCard from "../ObsHTApp/ObsCard";

const AppListContainer = () => {
  return (
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>UTInnova</h2>
          <p>
          En esta sección, podrá visualizar nuestros proyectos internos de la UTI, en desarrollo. 
          </p>
        </div>

        <div class="row">
          <SCACard />
          <ObsCard />
        </div>
      </div>
    </section>
  );
};

export default AppListContainer;
