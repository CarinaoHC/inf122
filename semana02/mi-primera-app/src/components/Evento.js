import React from "react";
import '../styles/Evento.css';

function Evento() {
    return (
        <div className="card-container">
            <img className="card-image" src={require("../images/imagen1.webp")} alt="Foto del evento"/>
            <div className="card-content">
                <h2 className="card-title">Py Pizza 03 - PyPuzzle</h2>
                <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="card-description">¡Hola Pythonista!
                    Participa en este Evento Presencial de la comunidad Python La Paz
                    ¿Cuánto conoces de Python?
                    Aprende a trabajar en equipo resolviendo increíbles acertijo
                    ¡Anímate a ser parte de esta actividad!</p>
                    <div className="redes">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></div>
                </div>
            </div>
    </div>
    );
}

export default Evento;