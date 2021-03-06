import React from 'react';

import Curso_CSS from './Curso.css';
import CardCursoInicio from '../components/cardCursoInicio'
import {useHistory} from "react-router-dom"

function CursoInicio(){

    let history=useHistory();

    function redictCrear(){
        console.log('redirect')
        history.push("/CrearCursoInicio")
    }

    return(
        <div className="curso_container">
            <div className= "headerd">
            {/* Se carga el fragmento header */}
            <div className= "header">
                <div className="logo">
                    <h2>Aprende+</h2>
                </div>
                <div className="titulo">
                    <h2>Mis Cursos</h2>
                </div>
                <div className="crearCursoInput">
                {/* <input type="submit"
                    onClick={history.push("/CrearCursoInicio")}
                name="crearcursos"></input> */}
                <button onClick={redictCrear}>
                    Crear un nuevo curso
                </button>
                </div>
            </div>
            </div>
            <div className="cards_cursos">
            {/* Se cargan los cards que representan los curso */}
                <CardCursoInicio/>
            </div>
        </div>

    );
}

export default CursoInicio