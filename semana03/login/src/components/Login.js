import React from "react"
import '../styles/Login.css';
import Boton from "./Boton";

function Login() {
    const click = (texto) => {
        console.log(texto);
    }
    return (
        <div className="main">
            <div className="cuadros">
                <label>Usuario: </label>
                <input type="text" name="name" />

            </div>
            <div className="cuadros">
                <label>Contraseña: </label>
                <input type="text" name="name" />
            </div>
            <div className="botones">
                <Boton texto="Registrar" funcionClick={() => click("Registrar")} />
                <Boton texto="Ingresar" funcionClick={() => click("Ingresar")} />
            </div>
        </div>
    )
}

export default Login;