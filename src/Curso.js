import React from 'react';

import Curso_CSS from './Curso.css';

export function Curso(){
    return(
        <div className="curso_container">
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
            <div className="cards_cursos">
                <div className="curso">
                    <div className="titulo">
                        <h2>Machine Learning</h2>
                    </div>
                    <div className="card_contain">
                        <div className="teoria">
                            <a href="#">Teoría</a>
                        </div>
                        <div className="practica">
                            <a href="#">Práctica</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}