import React, { useState, useEffect } from "react";
import db from "../API/APIFirebase";
import { Link } from "react-router-dom";
import {
  collection,
  query,
  addDoc,
  getCountFromServer,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useParams } from "react-router";
import SCAEvolution from "./SCAEvolution";
const PatientDetail = () => {
  const { patientId } = useParams();
  console.log(patientId);
  const [data, setData] = useState([]);
  const [controlSubmit, setControlSubmit] = useState(false);

  useEffect(() => {
    const querySnapshot = async () => {
      const dbSCA = collection(db, "SCA");
      const q = query(dbSCA);
      const querySnapshot = await getDocs(q);
      const localArray = [];

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        localArray.push({ id: doc.id, ...doc.data() });
      });
      const found = localArray.find((element) => element.id == patientId);
      setData(found);
    };
    querySnapshot();
  }, []);
  console.log(data);

  const handlerSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const snapshot = await getCountFromServer(collection(db, "SCA"));
      console.log(snapshot.data().count);
      delete data.id;
      const docRef = await addDoc(collection(db, "SCA"), {
        ...data,
        Evolution: true,
      });
      const docDelet = doc(db, "SCA", patientId);
      setControlSubmit(true);
      deleteDoc(docDelet).then(() => {
        console.log("Entire Document has been deleted successfully.");
      });
    } catch {}
  };

  const handlerChange = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };
  console.log(data);

  return (
    <>
      {controlSubmit ? (
        <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur
            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <h3 class="col-lg-8 pt-4 pt-lg-0 content">05</h3>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
           
          <div className="fst-italic">
          <hr />
          <h3>Gracias por tu tiempo =) </h3>

          <Link to="/proyecto">
            <button type="button" class="btn btn-secondary btn-sm">
              Volver
            </button>
          </Link>
        </div>
            </div>
           
          </div>
          </div>
        
      ) : (
        <form
          onChange={handlerChange}
          onSubmit={handlerSubmit}
          id="about"
          class="about"
        >
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Paciente con carga pendiente</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <h3 class="col-lg-8 pt-4 pt-lg-0 content numberClass">{data.Orden}</h3>
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content">
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Cama:</strong> <span>{data.cama}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Fecha de Ingreso:</strong>{" "}
                        <span>{data.FI}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Edad:</strong> <span>{data.Edad}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Sexo:</strong> <span>{data.Sexo}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Killip Kimball::</strong>{" "}
                        <span>{data.KKimbal}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Inicio del dolor:</strong>{" "}
                        <span>
                          {data.FID} / {data.HsID}Hs
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Ingreso a Admision:</strong>{" "}
                        <span>
                          {data.FIGA} / {data.HsIGA}Hs
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Ingreso a Triage:</strong>{" "}
                        <span>
                          {data.FIGT} / {data.HsIGT}Hs
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Primer ECG:</strong>{" "}
                        <span>
                          {data.FECG} / {data.HsECG}Hs
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Atencion medica en Guardia:</strong>{" "}
                        <span>
                          {data.FIGM} / {data.HsIGM}Hs
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Informe del primer ECG:</strong>{" "}
                        <span>
                          {data.FInfECG} / {data.HsInfECG}Hs
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Trombolisis:</strong>{" "}
                        <span>
                          {data.FECG} / {data.HsECG}Hs
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <SCAEvolution />
                </p>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default PatientDetail;
