import { useState } from 'react';

import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario,  actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores]=useState([
    {
      id:crypto.randomUUID(),
      equipo: "Programación",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:true
    },
    {
      id:crypto.randomUUID(),
      equipo:"Front End",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:false
    },
    {
      id:crypto.randomUUID(),
      equipo:"Data Science",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:false
    },
    {
      id:crypto.randomUUID(),
      equipo:"Devops",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:false
    },
    {
      id:crypto.randomUUID(),
      equipo:"UX y Diseño",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:false
    },
    {
      id:crypto.randomUUID(),
      equipo:"Móvil",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:false
    },
    {
      id:crypto.randomUUID(),
      equipo:"Innovación y Gestión",
      foto: "https://github.com/migantrujilloa.png",
      nombre: "Miguel Trujillo",
      puesto:"Ingeniero",
      favorito:false
    }
  ]);

  const [equipos, actualizarEquipos]=useState([
      {
        id: crypto.randomUUID(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9"
      },
      {
        id: crypto.randomUUID(),
        titulo:"Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF"
      },
      {
        id: crypto.randomUUID(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2"
      },
      {
        id: crypto.randomUUID(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"FDE7E8"
      },
      {
        id: crypto.randomUUID(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5"
      },
      {
        id: crypto.randomUUID(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9"
      },
      {
        id: crypto.randomUUID(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF"
      }  
  ])

  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador=(colaborador)=>{
    console.log("Nuevo colaborador", colaborador);

    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Eliminar colaborador

  const eliminarColaborador=(id)=>{
    console.log("Eliminar colaborador",id);
    const nuevosColaboradores= colaboradores.filter((colaborador)=>colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipos
  const actualizarColor=(color,id)=>{
    console.log("Actualzar: ",color, id);
    const equiposActualizado=equipos.map((equipo)=>{
      if(equipo.id===id){
          equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizado);
  }


  //Crear equipo
const crearEquipo=(nuevoEquipo)=>{
  console.log(nuevoEquipo);
  actualizarEquipos([...equipos,{...nuevoEquipo, id:crypto.randomUUID()}])
}

//me guta colaborador

const likeColaborador=(id)=>{
  console.log("like ",id)
  const colaboradoresActualizados=colaboradores.map((colaborador)=>{
    if(colaborador.id===id){
      colaborador.favorito = !colaborador.favorito
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      {/* /maneras de llamar nuestros compenentes 
      {Header()}
      <Header></Header>
      <Header/> */}

      <Header/>
      {/* ternario --> condicion ? seMuestra : noSeMuestra */}

      {/* mostrarFormulario === true ? <Formulario /> :<></> */}

      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo)=>{
          return <Equipo 
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            likeColaborador={likeColaborador}
            />
        })
      }

      <Footer/>
    </div>
  );
}

export default App;
