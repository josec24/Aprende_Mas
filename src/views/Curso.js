import React,{useState,useEffect} from "react"
import Axios from 'axios'
import Curso_CSS from './Curso.css';
import CardCurso from '../components/cardCurso'
import {useHistory} from "react-router-dom"

function Curso(){

    let email=''
    let history=useHistory();
    let curso=''
    obtener_localStorage()
    function obtener_localStorage(){
        let cursoi=JSON.parse(localStorage.getItem("curso"));
        curso=cursoi
        // console.log(curso)
    }

    useEffect(() => {
        UserAuthenticated()
    }, [])

function redCrear(){
    history.push("/crearTema")
}

const UserAuthenticated=()=>{
    Axios.get('http://localhost:3001/isUserAuth',{
        headers:{
            "x-access-token":localStorage.getItem("token"),
        },
    }).then((response)=>{
        
        email=response.data

        if(email=='profesor@gmail.com'){
            
            // console.log('das')
        }else{
            toggleForm()
        }
    })
}


const toggleForm=()=>{
    var container =document.querySelector('.bot');
    container.style.display='none';
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
                    <h2>{curso.nombre}</h2>
                </div>
                <div className="bot">
                    <button onClick={redCrear}>Crear Tema</button>
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