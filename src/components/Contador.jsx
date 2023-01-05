import React from "react";
import './Contador.css'

export const Contador = ({ numClick }) => {
    return (
        <div className="contador">
            {numClick}
        </div>
    )
}