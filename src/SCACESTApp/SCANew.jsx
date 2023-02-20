import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../API/APIFirebase";
import { collection, addDoc, getCountFromServer } from "firebase/firestore";
import "./../style.css";

const SCANew = () => {
 
  const [buyer, setBuyer] = useState({ Interc: [] });
  const [controlSubmit, setControlSubmit] = useState(false);
  const [trombolitico, setTrombolitico] = useState(false);
  const [OrdenId, setOrdenId] = useState();
  const [ccg, setCcg] = useState(false);
  console.log(ccg);





  const handlerSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const snapshot = await getCountFromServer(collection(db, "SCA"));
      console.log(snapshot.data().count);
      const docRef = await addDoc(collection(db, "SCA"), {
        ...buyer,
        Orden: snapshot.data().count + 1,
      });
      const nextOrdenId = snapshot.data().count;
      setControlSubmit(true);
      setOrdenId(nextOrdenId + 1);
      console.log("Document written with ID: ", nextOrdenId + 1);
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
            Dirigido a pacientes con SCACEST, por favor completar todos los
            reglones correspondientes, con horarios exactos e información veraz.
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
            <p className="fst-italic">
              *SCACEST: síndrome coronario agudo con elevación de segmento ST
            </p>
            <p className="fst-italic">*ECG: Electrocardiograma</p>
            <p className="fst-italic">*CRP: Criterios de reperfusión</p>
            {controlSubmit ? (
              <div className="fst-italic">
                <hr />
                <h3>Gracias por tu tiempo =) </h3>
                <h4>Su numero de orden es: {OrdenId} </h4>

                <Link to="/proyecto">
                  <button type="button" class="btn btn-secondary btn-sm">
                    Volver
                  </button>
                </Link>
              </div>
            ) : (
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
                        <strong>Hora de inicio del dolor:</strong>
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="date"
                          id="fecha"
                          name="FID"
                        />
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="time"
                          id="fecha"
                          name="HsID"
                        />
                      </div>

                      <div className="col-md-12 col-12 fromSCA">
                        <i className="bi bi-chevron-right "></i>
                        <strong>Hora de ingreso a Guardia (Admision):</strong>
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="date"
                          id="fecha"
                          name="FIGA"
                        />
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="time"
                          id="fecha"
                          name="HsIGA"
                        />
                      </div>

                      <div className="col-md-12 col-12 fromSCA">
                        <i className="bi bi-chevron-right "></i>
                        <strong>Hora de ingreso a Triage:</strong>
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="date"
                          id="fecha"
                          name="FIGT"
                        />
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="time"
                          id="fecha"
                          name="HsIGT"
                        />
                      </div>

                      <div className="col-md-12 col-12 fromSCA">
                        <i className="bi bi-chevron-right "></i>
                        <strong>Hora de atencion medica en Guardia:</strong>
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="date"
                          id="fecha"
                          name="FIGM"
                        />
                      </div>
                      <div className="col-md-5 col-6">
                        <input
                          required
                          className="form-control fromSCA"
                          type="time"
                          id="fecha"
                          name="HsIGM"
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
                      <div className="col-md-12 col-12 fromSCA">
                        <i className="bi bi-chevron-right "></i>
                        <strong>Trombolisis:</strong>
                      </div>
                      <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                        <input
                          onChange={(event) =>
                            setTrombolitico(event.target.value)
                          }
                          required
                          type="radio"
                          id="customRadio"
                          value="true"
                          name="Trombolisis"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="customRadio0">
                          Si
                        </label>
                      </div>
                      <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                        <input
                          onChange={(event) =>
                            setTrombolitico(event.target.value)
                          }
                          required
                          type="radio"
                          id="customRadio"
                          value="false"
                          name="Trombolisis"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="customRadio0">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  {trombolitico == "true" ? (
                    <div className="col-lg-6 ">
                      <div className="row justify-content-md-center ">
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
                          <strong>
                            Hora de finalizacion de tromboliticos:
                          </strong>
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
                          <label
                            class="custom-control-label"
                            for="customRadio1"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customRadio1"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customRadio2"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customRadio2"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customRadio3"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customRadio3"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
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
                          <label
                            class="custom-control-label "
                            for="customCheck1"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
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
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            Muerte Subita
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="checkbox"
                            name="Interc"
                            value="Ninguna"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            Ninguna
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="col-md-12 col-12 fromSCA">
                        <i className="bi bi-chevron-right "></i>
                        <strong>Motivo:</strong>
                      </div>
                      <div class="custom-control custom-checkbox fromSCA col-md-6">
                        <input
                          type="radio"
                          name="NoTrom"
                          value="Contraindicacion"
                          class="custom-control-input"
                          id="customCheck2"
                        />
                        <label class="custom-control-label" for="customCheck2">
                          {" "}
                          Contraindicacion
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox fromSCA col-md-6">
                        <input
                          type="radio"
                          name="NoTrom"
                          value="Tiempo de evolucion"
                          class="custom-control-inpu col-md-6t"
                          id="customCheck2"
                        />
                        <label class="custom-control-label" for="customCheck2">
                          {" "}
                          Tiempo de evolucion
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox fromSCA col-md-6">
                        <input
                          type="radio"
                          name="NoTrom"
                          value="Negativa del paciente"
                          class="custom-control-input "
                          id="customCheck2"
                        />
                        <label class="custom-control-label " for="customCheck2">
                          {" "}
                          Negativa del paciente
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox fromSCA col-md-6">
                        <input
                          type="radio"
                          name="NoTrom"
                          value="Faltante de medicamento"
                          class="custom-control-input"
                          id="customCheck2"
                        />
                        <label class="custom-control-label" for="customCheck2">
                          {" "}
                          Faltante de medicamento
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox fromSCA col-md-6">
                        <input
                          type="radio"
                          name="NoTrom"
                          value="Hemodinamia"
                          class="custom-control-input"
                          id="customCheck2"
                        />
                        <label class="custom-control-label" for="customCheck2">
                          {" "}
                          Hemodinamia
                        </label>
                      </div>
                      <div class="custom-control custom-checkbox fromSCA col-md-6">
                        <input
                          type="radio"
                          name="NoTrom"
                          value="Otros"
                          class="custom-control-input"
                          id="customCheck2"
                        />
                        <label class="custom-control-label" for="customCheck2">
                          Otros
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <hr />

                <div className="fromSCA">
                  <div class="row">
                    <h3>Evolucion</h3>
                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>CCG:</strong>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        onChange={(event) => setCcg(event.target.value)}
                        required
                        type="radio"
                        id="customRadio11"
                        value="true"
                        name="CCG"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio110">
                        Si
                      </label>
                    </div>
                    <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                      <input
                        onChange={(event) => setCcg(event.target.value)}
                        required
                        type="radio"
                        id="customRadio11"
                        value="false"
                        name="CCG"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadio120">
                        No
                      </label>
                    </div>
                    {ccg == "true" ? (
                      <>
                        <div className="col-md-12 col-12 fromSCA">
                          <i className="bi bi-chevron-right "></i>
                          <strong>Angioplastia:</strong>
                        </div>
                        <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                          <input
                            required
                            type="radio"
                            id="customRadio13"
                            value="true"
                            name="Angio"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio130"
                          >
                            Si
                          </label>
                        </div>
                        <div class="custom-control custom-radio col-md-5 col-6 fromSCA">
                          <input
                            required
                            type="radio"
                            id="customRadio13"
                            value="false"
                            name="Angio"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio131"
                          >
                            No
                          </label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-12 col-12 fromSCA">
                          <i className="bi bi-chevron-right "></i>
                          <strong>Motivo:</strong>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="radio"
                            name="NoCCG"
                            value="Inestabilidad"
                            class="custom-control-input"
                            id="customCheck14"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck140"
                          >
                            {" "}
                            Inestabilidad
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="radio"
                            name="NoCCG"
                            value="Dreivacion"
                            class="custom-control-inpu col-md-6t"
                            id="customCheck14"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck141"
                          >
                            {" "}
                            Derivacion
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="radio"
                            name="NoCCG"
                            value="Negativa"
                            class="custom-control-input "
                            id="customCheck14"
                          />
                          <label
                            class="custom-control-label "
                            for="customCheck142"
                          >
                            {" "}
                            Negativa
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="radio"
                            name="NoCCG"
                            value="Contraindicacion"
                            class="custom-control-input"
                            id="customCheck14"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck143"
                          >
                            {" "}
                            Contraindicacion
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="radio"
                            name="NoCCG"
                            value="Derivacion Fallida"
                            class="custom-control-input"
                            id="customCheck14"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck144"
                          >
                            {" "}
                            Derivacion Fallida
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                            type="radio"
                            name="NoCCG"
                            value="Otros"
                            class="custom-control-input"
                            id="customCheck14"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck145"
                          >
                            Otros
                          </label>
                        </div>
                      </>
                    )}
                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Egreso:</strong>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="radio"
                        name="Egreso"
                        value="Alta"
                        class="custom-control-input"
                        id="customCheck15"
                      />
                      <label class="custom-control-label" for="customCheck150">
                        {" "}
                        Alta medica
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="radio"
                        name="Egreso"
                        value="Derivacion"
                        class="custom-control-inpu col-md-6t"
                        id="customCheck15"
                      />
                      <label class="custom-control-label" for="customCheck151">
                        {" "}
                        Derivacion
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="radio"
                        name="Egreso"
                        value="Obito"
                        class="custom-control-input "
                        id="customCheck15"
                      />
                      <label class="custom-control-label " for="customCheck152">
                        {" "}
                        Obito
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox fromSCA col-md-6">
                      <input
                        type="radio"
                        name="Egreso"
                        value="AVoluntaria"
                        class="custom-control-input"
                        id="customCheck15"
                      />
                      <label class="custom-control-label" for="customCheck153">
                        {" "}
                        Alta Voluntaria
                      </label>
                    </div>

                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>Fecha de egreso:</strong>
                    </div>
                    <div className="col-md-5 col-6">
                      <strong>UTI:</strong>
                      <input
                        className="form-control fromSCA"
                        type="date"
                        id="fecha"
                        name="EgrUti"
                      />
                    </div>
                    <div className="col-md-5 col-6">
                      <strong>Institucional:</strong>
                      <input
                        className="form-control fromSCA"
                        type="date"
                        id="fecha"
                        name="EgrInst"
                      />
                    </div>
                  </div>
                </div>
               
                
                  <button
                    type="submit"
                    className=" btn btn-info btn-lg btn-block"
                  >
                    Cargar
                  </button>
           
                
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCANew;
