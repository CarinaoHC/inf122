import React from "react"
import '../styles/Registro.css';
import Boton from "./Boton";

function Registro() {
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
                <Boton texto="Registrar" funcionClick={() => click("Registrar")} />
            </div>
        </div>
    )
}

export default Registro;