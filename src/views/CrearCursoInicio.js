import React from 'react';

import CrearCursoInicioCss from './CrearCursoInicioCss.css'

import Header from '../components/header1'
import CardCrearCurso from '../components/cardCrearCurso'

function CrearCursoInicio(){
    return(
        <div className="crear_curso_container">
            <div className= "headerd">
            {/* Se carga el fragmento header */}
                
            <div className= "header">
                <div className="logo">
                    <h2>Aprende+</h2>
                </div>
                <div className="titulo">
                    <h2>Crear Curso</h2>
                </div>
                <div className="usuario">
                </div>
            </div>
            </div>
            <div className="crear_cards_cursos">
            {/* Se cargan los cards que representan los curso */}
                <CardCrearCurso/>
            </div>
        </div>

    );
}

export default CrearCursoInicio