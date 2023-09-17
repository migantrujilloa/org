import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo=(props)=>{

    //destructuracion

    const {colorPrimario, colorSecundario, titulo, id}=props.datos
    const {colaboradores, eliminarColaborador,actualizarColor, likeColaborador}=props

    const obj={
        backgroundColor:hexToRgba(colorPrimario,0.3)
    }

    const estiloTitulo={
        borderBottomColor:colorPrimario
    }

    return <>
        {
            colaboradores.length>0 &&
            <section className="equipo" style={obj}>
            <input
                className="equipo__input-color"
                type="color"
                value={colorPrimario}
                onChange={(evento)=>{actualizarColor(evento.target.value, id)}}
            />
            <h3 style={{estiloTitulo}}>{titulo}</h3>
            <div className="equipo__colaboradores">
                {
                    colaboradores.map((colaborador, index)=>{
                        return <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            likeColaborador={likeColaborador}
                            />
                    })
                }
            </div>
        </section>
        }
    </>
}

export default Equipo