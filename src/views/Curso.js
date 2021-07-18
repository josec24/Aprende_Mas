import React from 'react';

import Curso_CSS from './Curso.css';
import CardCurso from '../components/cardCurso'

function Curso(){
    return(
        <div className="curso_container">
            <div className= "headerd">
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
            <div className="cards_cursos">
            {/* Se cargan los cards que representan los curso */}
                <CardCurso/>
            </div>
        </div>

    );
}

export default Curso