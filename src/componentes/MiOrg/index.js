import { useState } from "react";
import "./MiOrg.css"

const  MiOrg=(props)=>{

    //Estados conocidos en react como hooks
    //uno de ellos se llama useState
    //

    console.log(props.cambiarMostrar);

    //como destructurar un arreglo
    //const [nombreVariable, funcionNombre]=useState(valorInicial);
    //el nombr ede la variable es al que se le asignara el valor del estado mediante la función
   /*  const [nombre, actualziarNobre] = useState("Miguel");

    const [mostrar, actualizarMostrar]=useState(true);

    const manejarClick =()=>{
        actualizarMostrar(!mostrar);
    } */

    return <section className="org-section">
        <h3 className="org-section__title">Mi organización</h3>
        <img className="org-section__img" src="/img/add.png" onClick={props.cambiarMostrar} alt="add"/>
    </section>
}

export default MiOrg