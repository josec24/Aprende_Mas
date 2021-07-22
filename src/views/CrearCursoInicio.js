import React from 'react';

import './CrearCursoInicioCss.css'
import {useHistory} from "react-router-dom"
import CardCrearCurso from '../components/cardCrearCurso'

function CrearCursoInicio(){
    let history=useHistory();

    function verificar(){
        history.push("/Profile");
    }
    function verificarMicurso(){
        history.push("/Micurso");
    }
    function inicio(){
        history.push("/Inicio");
    }
    function crearCurso(){
        history.push("/crearCurso");
    }

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
                    <button onClick={verificar}>Mi perfil</button>
                    <button onClick={verificarMicurso}>Mi Curso</button>
                    <button onClick={inicio}>Inicio</button>
                    <button onClick={crearCurso}>Crear Curso</button>
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