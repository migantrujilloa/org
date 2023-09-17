import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador =(props)=>{
    const {nombre, puesto, foto, equipo, id, favorito}=props.datos;
    const {colorPrimario, eliminarColaborador, likeColaborador}=props

    

    return <div className="equipo__card">
                <AiFillCloseCircle className="eliminar" onClick={()=>{eliminarColaborador(id)}}/>
                <div className="equipo__card-cabecera" style={{backgroundColor:colorPrimario}}>
                    <img className="equipo__card-img" src={foto} alt={nombre}/>
                </div>
                <div className="equipo__card-cuerpo">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                    {favorito ? <AiFillHeart color="red" onClick={()=>likeColaborador(id)}/>:<AiOutlineHeart onClick={()=>likeColaborador(id)}/>}
                </div>
            </div>
}

export default Colaborador