import CrearCurso_CSS from './CrearCurso.css';
import CardCreador from '../components/cardCreador'

function CrearCurso(){
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