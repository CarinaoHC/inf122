import React from "react"
import '../styles/Galeria.css';

function Galeria() {
    return (
        <div className="main">
            <div className="">
                <h1><img className="perfil" src={require("../images/login.png")} alt=""/>Karina</h1>
            </div>
            <div className="fotos">
            <img className="card-image" src={require("../images/compu.png")} alt=""/>
            <img className="card-image" src={require("../images/compu.png")} alt=""/>
            <img className="card-image" src={require("../images/compu.png")} alt=""/>
            <img className="card-image" src={require("../images/compu.png")} alt=""/>
            </div>
            
        </div>
    )
}

export default Galeria;