import React from "react"
import './Boton.css'

export const Boton = ({texto, esBotonClick, manejarClick}) => {
    return (
        <>
            <button
                className={esBotonClick ? "boton-aumentar" : "boton-reiniciar"}
                onClick={manejarClick}
            >{texto}</button>
        </>
    )
}