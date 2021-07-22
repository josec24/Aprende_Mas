import React,{Fragment,useState,useEffect} from 'react';
import CrearCurso_CSS from './CrearCurso.css';
import CardCreador from '../components/cardCreador'
import {useHistory} from "react-router-dom"

function CrearTeoria(){

    let history=useHistory();
    let tema=''

    obtener_localStorage()


    function obtener_localStorage(){
        let temai=JSON.parse(localStorage.getItem("tema"));
        tema=temai
        console.log(tema)
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
                    <h2>{tema.nombre}</h2>
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

export default CrearTeoria