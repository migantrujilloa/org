import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Button from "../Button"
import { useState } from "react"

const Formulario=(props)=>{

    const [nombre, actualizarNombre]=useState("")
    const [puesto, actualizarPuesto]=useState("")
    const [foto, actualizarFoto]=useState("")
    const [equipo, actualizarEquipo]=useState("")

    const [titulo, actualizarTitulo]=useState("")
    const [color, actualizarColor]=useState("")

    const {registrarColaborador, crearEquipo}=props

    const manejarEvento=(evento)=>{
        evento.preventDefault();

        let datosAEnviar={
            id:crypto.randomUUID(),
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo=(e)=>{
        e.preventDefault();
        crearEquipo({titulo,colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEvento} className="formulario__form">
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                value={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                value={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de la foto"
                required
                value={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                required
                value={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Button texto="Crear" name="crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo} className="formulario__form">
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Título"
                placeholder="Ingresar título"
                required
                value={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en hexadecimal"
                required
                value={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Button texto="Registrar equipo" name="crearequipo"/>
        </form>
    </section>
}

export default Formulario