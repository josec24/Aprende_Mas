import './CrearCurso.css';
import CardCreador from '../components/cardCreador'
import {useHistory} from "react-router-dom"
function CrearCurso(){
    let history=useHistory();
    function verificarMicurso(){
        history.push("/Micurso");
    }
    function inicio(){
        history.push("/Inicio");
    }
    function miPerfil(){
        history.push("/Profile");
    }


    return(
        <div className="crear_curso_container">
            <div className= "crear_header">
                {/* Se carga el fragmento header */}
                <div className= "header">
                <div className="logo">
                    <h2>Aprende+</h2>
                </div>
                <div className="titulo">
                    <h2>Inteligencia Artificial</h2>
                </div>
                <div className="usuario">
                <button onClick={verificarMicurso}>Mi Curso</button>
                    <button onClick={inicio}>Inicio</button>
                    <button onClick={miPerfil}>Mi perfil</button>
                </div>
            </div>
            </div>
            <div>
                {/* Se cargan los card para crear tareas etc */}
                <CardCreador/>
            </div>
        </div>

    );
}

export default CrearCurso