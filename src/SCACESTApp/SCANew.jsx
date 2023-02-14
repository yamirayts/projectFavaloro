import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../API/APIFirebase";
import { collection, addDoc } from "firebase/firestore";
import "./../style.css";

const SCANew = () => {
  const [buyer, setBuyer] = useState({ Interc: [] });
  const [controlSubmit, setControlSubmit] = useState(false);

  const inputControl = () => {
    let valor = 0;
    const List = [
      "cama",
      "FI",
      "Edad",
      "Sexo",
      "KKimbal",
      "FIG",
      "HsIG",
      "FECG",
      "HsECG",
      "FInfECG",
      "HsInfECG",
      "FITrom",
      "HsITrom",
      "FFTrom",
      "HsFTrom",
      "FECGCont",
      "HsECGCont",
      "FLabCPR",
      "HsLabCPR",
      "DolTor",
      "CRPECG",
      "LabCRP",
    ];
    for (let i = 0; buyer.hasOwnProperty(List[i]); i++) {
      valor = i;
      console.log(i);
    }
    return valor;
  };

  const handlerSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "SCA"), buyer);
      setControlSubmit(true)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handlerChange = (evt) => {
    if ("Interc" === evt.target.name) {
      if (buyer.Interc.indexOf(evt.target.value) === -1) {
        buyer.Interc.push(evt.target.value);
      } else {
        let value = buyer.Interc.filter((item) => item !== evt.target.value);
        setBuyer({
          ...buyer,
          Interc: value,
        });
      }
    } else {
      setBuyer({
        ...buyer,
        [evt.target.name]: evt.target.value,
      });
    }

    console.log(buyer);
  };
  console.log(buyer);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nueva Carga</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="/projectFavaloro/img/pexels.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {controlSubmit? 
          <div>
            <h3>Gracias por tu tiempo =) </h3>
            <Link to="/proyecto">
            <button type="button" class="btn btn-secondary btn-sm">Volver</button>
            </Link>
          </div>  
          :
          <form onChange={handlerChange} onSubmit={handlerSubmit}>
              <div className="fromSCA">
                <div class="row">
                  <div class="col-md-3">
                    <input
                      required
                      type="text"
                      class="form-control"
                      name="cama"
                      placeholder="N de cama Ej.: 06"
                    />
                  </div>
                  <div class="col-md-4">
                    <input
                      required
                      type="date"
                      class="form-control"
                      name="FI"
                      placeholder="Fecha de ingreso a la UTI"
                    />
                  </div>
                  <div class="col-md-2">
                    <input
                      required
                      type="text"
                      class="form-control"
                      name="Edad"
                      placeholder="Edad"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <select id="inputState" class="form-control" name="Sexo">
                      <option selected>Choose...</option>
                      <option>Femenino</option>
                      <option>Masculino</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-6 fromSCA justify-content-md-center ">
                  <i className="bi bi-chevron-right "></i>
                  <strong>Killip Kimball:</strong>
                </div>
                <select
                  class="custom-select fromSCA  col-md-3 col-6"
                  name="KKimbal"
                  id="inlineFormCustomSelectPref"
                >
                  <option selected>Choose...</option>
                  <option value="1">Uno</option>
                  <option value="2">Dos</option>
                  <option value="3">Tres</option>
                  <option value="4">Cuatro</option>
                </select>
                <hr />
                <div className="col-lg-6">
                  <div className="row justify-content-md-center ">
                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora de ingreso a Guardia:</strong>
                    </div>
                    <div className="col-md-5 col-6">
                      <input
                        required
                        className="form-control fromSCA"
                        type="date"
                        id="fecha"
                        name="FIG"
                      />
                    </div>
                    <div className="col-md-5 col-6">
                      <input
                        required
                        className="form-control fromSCA"
                        type="time"
                        id="fecha"
                        name="HsIG"
                      />
                    </div>

                    <div className="col-md-12 col-12 fromSCA ">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora de primer ECG:</strong>
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="date"
                        id="fecha"
                        name="FECG"
                      />
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="time"
                        id="fecha"
                        name="HsECG"
                      />
                    </div>

                    <div className="col-md-12 col-12 fromSCA ">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora Informe del primer ECG:</strong>
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="date"
                        id="fecha"
                        name="FInfECG"
                      />
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="time"
                        id="fecha"
                        name="HsInfECG"
                      />
                    </div>

                    <div className="col-md-12 col-12 fromSCA ">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora inicio de tromboliticos:</strong>
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="date"
                        id="fecha"
                        name="FITrom"
                      />
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="time"
                        id="fecha"
                        name="HsITrom"
                      />
                    </div>

                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora de finalizacion de tromboliticos:</strong>
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="date"
                        id="fecha"
                        name="FFTrom"
                      />
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="time"
                        id="fecha"
                        name="HsFTrom"
                      />
                    </div>

                    <div className="col-md-12 col-12 fromSCA ">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora ECG control de CRP:</strong>
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="date"
                        id="fecha"
                        name="FECGCont"
                      />
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="time"
                        id="fecha"
                        name="HsECGCont"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="row justify-content-md-center ">
                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Hora Lab CRP:</strong>
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="date"
                        id="fecha"
                        name="FLabCPR"
                      />
                    </div>
                    <div className="col-md-5 col-6 fromSCA">
                      <input
                        required
                        className="form-control"
                        type="time"
                        id="fecha"
                        name="HsLabCPR"
                      />
                    </div>

                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>CRP dolor toracico:</strong>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        required
                        type="radio"
                        id="customRadio"
                        value="True"
                        name="DolTor"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio1">
                        Si
                      </label>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        required
                        type="radio"
                        id="customRadio"
                        value="False"
                        name="DolTor"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio1">
                        No
                      </label>
                    </div>

                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>CRP ECG:</strong>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        required
                        type="radio"
                        id="customRadio2"
                        value="True"
                        name="CRPECG"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio2">
                        Si
                      </label>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        required
                        type="radio"
                        id="customRadio2"
                        value="False"
                        name="CRPECG"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio2">
                        No
                      </label>
                    </div>

                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>CRP Lab:</strong>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        required
                        type="radio"
                        id="customRadio1"
                        value="True"
                        name="LabCRP"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio3">
                        Si
                      </label>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        required
                        type="radio"
                        id="customRadio2"
                        value="False"
                        name="LabCRP"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio3">
                        No
                      </label>
                    </div>

                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Intercurrencias:</strong>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="checkbox"
                        name="Interc"
                        value="Hipertension"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        {" "}
                        Hipertension
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="checkbox"
                        name="Interc"
                        value="Hipotension"
                        class="custom-control-inpu col-md-6t"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        {" "}
                        Hipotension
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="checkbox"
                        name="Interc"
                        value="Arritmia Ventricular"
                        class="custom-control-input "
                        id="customCheck1"
                      />
                      <label class="custom-control-label " for="customCheck1">
                        {" "}
                        Arritmia Ventricular
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="checkbox"
                        name="Interc"
                        value="Sangrado"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        {" "}
                        Sangrado
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="checkbox"
                        name="Interc"
                        value="Shock"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        {" "}
                        Shock
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="checkbox"
                        name="Interc"
                        value="Muerte Subita"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        Muerte Subita
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {console.log(inputControl())}
              {inputControl() === 21 ? (
                <button
                  type="submit"
                  className=" btn btn-info btn-lg btn-block"
                >
                  Cargar
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className=" btn btn-outline-secondary btn-lg btn-block"
                  >
                    Cargar
                  </button>{" "}
                  <div class="alert alert-warning" role="alert">
                    {" "}
                    <i class="bi bi-x-octagon"></i> Quedan campos por completar
                  </div>
                </>
              )}
            </form>
          }
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCANew;
