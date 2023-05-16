import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AppListContainer from "./Components/AppListContainer";
import SCApp from "./SCACESTApp/SCApp";
import SCANew from "./SCACESTApp/SCANew";
import ObsHTApp from "./ObsHTApp/ObsHTApp";
import ObsHTANew from "./ObsHTApp/ObsHTANew";
import PatientDetail from "./SCACESTApp/PatientDetail"
import About from "./Components/About";
import PendingLoadContainer from "./SCACESTApp/PendingLoadContainer";

function App() {
  return (
    <>
      
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/proyecto" element={<AppListContainer />} />

          <Route path="/proyecto/SCACESTA" element={<SCApp />} />

          <Route path="/proyecto/SCANuevoRegistro" element={<SCANew />} />

          <Route path="/proyecto/ObsHTA" element={<ObsHTApp />} />

          <Route path="/objetivo" element={<About />} />

          <Route path="/proyecto/pendingLoadContainer" element={<PendingLoadContainer />} />

          <Route exact path="/proyecto/pendingLoadContainer/patient/:patientId" element={ <PatientDetail/>}/>
              
              

          <Route
            path="/proyecto/ObsHTA/NuevoRegistro"
            element={<ObsHTANew />}
          />
        </Routes>
      
    </>
  );
}

export default App;
