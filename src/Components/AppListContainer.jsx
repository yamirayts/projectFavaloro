import SCACard from "../SCACESTApp/SCACard";
import ObsCard from "../ObsHTApp/ObsCard";

const AppListContainer = () => {
  return (
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
