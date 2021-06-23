import CrearCurso_CSS from './CrearCurso.css';
import Header from '../components/header1'
import CardCreador from '../components/cardCreador'

function CrearCurso(){
    return(
        <div className="crear_curso_container">
            <div className= "crear_header">
                {/* Se carga el fragmento header */}
                <Header/>
            </div>
            <div>
                {/* Se cargan los card para crear tareas etc */}
                <CardCreador/>
            </div>
        </div>

    );
}

export default CrearCurso