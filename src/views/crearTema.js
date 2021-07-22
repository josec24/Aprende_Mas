import React,{Fragment,useState,useEffect} from 'react';
import Axios from 'axios'
import CrearCursoInicioCss from './CrearCursoInicioCss.css'
import {useHistory} from "react-router-dom"
import CardCrearCurso from '../components/cardCrearCurso'

function CrearTema(){
    let history=useHistory();
    const [nombre,setNombre]=useState("");
    const [codigoCurso,setCodigoCurso]=useState("");
    const [codigo,setCodigo]=useState("");


    let curso=''
    obtener_localStorage()
    function obtener_localStorage(){
        let cursoi=JSON.parse(localStorage.getItem("curso"));
        curso=cursoi
        // console.log('dasd: '+curso.codigo)
    }

    function verificar(){
        history.push("/Profile");
    }

    function AddTema(){
        // obtener_localStorage()
        // va=curso.codigoCurso
        console.log(curso.codigoCurso)
        Axios.post('http://localhost:3001/addtema',{
            nombre:nombre,
            codigoCurso:curso.codigo,
            codigo:codigo,
        }).then((response)=>{
            console.log(response.data);
            if(response.data=="verdadero"){
                history.push("/Curso");
            }else{
            }
        })
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
                    <h2>Crear Tema</h2>
                </div>
                <div className="usuario" onClick={verificar}>
                </div>
            </div>
            </div>
            <div className="crear_cards_cursos">
            {/* Se cargan los cards que representan los curso */}
                <div className="card_crear_curso">
                        <label>Nombre</label>
                        <input type="text"
                        onChange={(event)=>{setNombre(event.target.value)}}
                        name="nombre" ></input>
                        <label>Codigo</label>
                        <input type="text"
                        onChange={(event)=>{setCodigo(event.target.value)}}
                        name="codigo" ></input>
                        <input type="submit" class="button_crear_curso"
                        onClick={AddTema}
                        name="button_ingresar" value="Crear Tema"></input>
                </div>
            </div>
        </div>

    );
}

export default CrearTema