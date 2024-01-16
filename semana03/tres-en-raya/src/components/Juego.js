import React from 'react';
import Tablero from './Tablero';
import { useState } from 'react';
function Juego() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        if (jugador === "X") {
            setJugador("O");
        } else {
            setJugador("X");
        }
    }
} 

export default Juego;