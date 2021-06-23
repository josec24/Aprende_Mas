import React from 'react';

import Curso_CSS from './Curso.css';
import CardCurso from '../components/cardCurso'
import Header from '../components/header1'

function Curso(){
    return(
        <div className="curso_container">
            <div className= "headerd">
            {/* Se carga el fragmento header */}
                <Header/>
            </div>
            <div className="cards_cursos">
            {/* Se cargan los cards que representan los curso */}
                <CardCurso/>
            </div>
        </div>

    );
}

export default Curso