import { useState } from "react"
import { Link } from 'react-router-dom';

const Nav = () => {
    const [stateBody, setStateBody] = useState(false);
     let bodyClass = () =>{
        if(stateBody == false){
            document.body.classList.add('mobile-nav-active')
            setStateBody(true)
        }else{
            document.body.classList.remove('mobile-nav-active')
            setStateBody(false)
        }
     }
    
    return(
        <>
        <i onClick={bodyClass} className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
        <li><Link to="/objetivo" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Objetivo</span></Link></li>
        <li><Link to="/proyecto" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Proyectos</span></Link></li>
        <li><Link to="/proyecto" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contacto</span></Link></li>
      </ul>
    </nav>
    </header>
    
</>
    
        )
}

export  default Nav

