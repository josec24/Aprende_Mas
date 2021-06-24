import CrearCurso_CSS from './CrearCurso.css';
import Header from '../components/headerpro'
import CardCreador from '../components/cardProfile'

function Profile(){
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

export default Profile