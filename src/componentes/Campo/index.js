import { useState } from "react";
import "./Campo.css"

/*props permite usar las propiedades de lso componentes*/
const Campo=(props)=>{

    const manejarCambio=(e)=>{
        props.actualizarValor(e.target.value);
    }
    //Desctructuracion
    const {type="text"}=props

    //los props los almnacenamos en una constante para añadirle los tres puntos
    const placeholderModificador=`${props.placeholder}...`;

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input className="campo-texto__input" 
            placeholder={placeholderModificador}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo