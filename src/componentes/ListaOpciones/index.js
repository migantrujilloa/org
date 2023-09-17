import "./ListaOpciones.css" 
const ListaOpciones=(props)=>{

    const manejarCambio=(e)=>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="select-equipo">
        <label className="select-equipo__label">Equipos</label>
        <select className="select-equipo__select" value={props.value} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciones equipo</option>
            {
                props.equipos.map((equipo,index)=>{
                    return <option className="select-equipo__option" key={index} id={index} value={equipo}>{equipo}</option>
                })
            }
        </select>
    </div>
}

export default ListaOpciones