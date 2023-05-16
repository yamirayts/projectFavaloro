import React from 'react'
import { useState } from "react";

const SCAEvolution = () => {
    const [ccg, setCcg] = useState(false);

 

  return (
    <>
    <div  className="fromSCA">
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
                          required
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
                          required
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
                            Derivacion a otro centro
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox fromSCA col-md-6">
                          <input
                          required
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
                          required
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
                          required
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
                          required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
                        className="form-control fromSCA"
                        type="date"
                        id="fecha"
                        name="EgrUti"
                      />
                    </div>
                    <div className="col-md-5 col-6">
                      <strong>Institucional:</strong>
                      <input
                      required
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
    </>
  )
}
export default SCAEvolution
