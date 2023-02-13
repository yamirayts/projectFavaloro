import { useState } from "react";
import db from "../API/APIFirebase";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import "./../style.css";

const ObsHTANew = () => {
  const handlerSubmit = async (evt) => {
    evt.preventDefault();
    console.log("lo subio el mierda");
  };

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
              src="/projectFavaloro/img/pexels-matilda-wormwood-7484772.jpg"
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
            <form onSubmit={handlerSubmit}>
              <div className="fromSCA">
                <div class="row">
                  <div class="col-md-3">
                    <input
                      type="text"
                      class="form-control"
                      name="cama"
                      placeholder="N de cama Ej.: 06"
                    />
                  </div>
                  <div class="col-md-4">
                    <input
                      type="date"
                      class="form-control"
                      name="FI"
                      placeholder="Fecha de ingreso a la UTI"
                    />
                  </div>
                  <div class="col-md-2">
                    <input
                      type="text"
                      class="form-control"
                      name="Edad"
                      placeholder="Edad"
                    />
                  </div>
                  <div class="form-group col-md-3"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-6 fromSCA justify-content-md-center ">
                  <i className="bi bi-chevron-right "></i>
                  <strong>Hora Primer Control en UTI:</strong>
                </div>
                <div className="col-md-5 col-6">
                  <input
                    className="form-control fromSCA"
                    type="time"
                    id="fecha"
                    name="HsIG"
                  />
                </div>

                <hr />
                <div className="col-lg-6">
                  <div className="row justify-content-md-center ">
                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>TAS:</strong>
                    </div>
                    <div className="col-md-5 col-8">
                      <input
                        maxlength="3"
                        minlength="3"
                        className="form-control fromSCA"
                        type=""
                        id="fecha"
                        name="FIG"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="row justify-content-md-center ">
                    <div className="col-md-12 col-12 fromSCA">
                      <i className="bi bi-chevron-right "></i>
                      <strong>TAD:</strong>
                    </div>
                    <div className="col-md-5 col-8 fromSCA">
                      <input
                        maxlength="3"
                        minlength="3"
                        className="form-control"
                        type=""
                        id="fecha"
                        name="FLabCPR"
                      />
                    </div>
                  </div>
                </div>

                <div className="row justify-content-md-center ">
                  <div className="col-md-7 col-12 fromSCA">
                    <i className="bi bi-chevron-right "></i>
                    <strong>Diuresis:</strong>
                  </div>
                  <div className="col-md-6 col-8 fromSCA">
                    <input
                      required
                      maxlength="5"
                      className="form-control fromSCA"
                      type=""
                      id="fecha"
                      name="HsIG"
                    />
                  </div>
                </div>
              </div>
              <br />

              <input type="submit" className=" btn btn-info btn-lg btn-block" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObsHTANew;
