import React from "react"
import '../styles/Perfil.css';
import Boton from "./Boton";

function Perfil() {
    const click = (texto) => {
        console.log(texto);
    }
    return (
        <div className="main">
            <div className="cuadros">
                <label>Nombre: </label>
                <input type="text" name="name" />

            </div>
            <div className="cuadros">
                <label>Apellido: </label>
                <input type="text" name="name" />
            </div>
            <div className="cuadros">
                <label>Contraseña: </label>
                <input type="text" name="name" />
            </div>
            <div className="botones">
                <Boton texto="Editar" funcionClick={() => click("Editar")} />
            </div>
        </div>
    )
}

export default Perfil;