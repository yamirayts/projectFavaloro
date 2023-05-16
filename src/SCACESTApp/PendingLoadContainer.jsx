import React, { useState, useEffect } from "react";
import PedeingLoadCard from "./PedingLoadCard"
import db from "../API/APIFirebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const PendingLoadContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const querySnapshot = async () => {
      const dbSCA = collection(db, "SCA");
      const q = query(dbSCA, where("Evolution", "==", false));
      const querySnapshot = await getDocs(q);
      const localArray = []

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        localArray.push({id: doc.id, ...doc.data()})
        
      });
      setData(localArray);
    };
    
    querySnapshot();
  }, []);

  console.log(data);
  return (
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Cargas pendientes</h2>
          <p>
          Este es el listado de pacientes que falta cargar la evolucion, seleccione el numero de ORDEN que corresponde al paciente que desea completar. 
          </p>
        </div>

      
        <div className="row justify-content-center">
        {data.map(patient=>{
          return(
          <PedeingLoadCard patient={patient}/>
          
          )
        })}
        </div>
      </div>
    </section>
  );
};

export default PendingLoadContainer;
