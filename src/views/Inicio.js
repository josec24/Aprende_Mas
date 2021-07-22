import React,{useState,useEffect} from "react"
import Axios from 'axios'
import Curso_CSS from './Curso.css';
import CardCursoInicio from '../components/cardCursoInicio'
import {useHistory} from "react-router-dom"

function CursoInicio(){

    let history=useHistory();
    let email=''
    useEffect(() => {
        UserAuthenticated()
    }, [])

    function redictCrear(){
        console.log('redirect')
        history.push("/CrearCursoInicio")
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
        var container =document.querySelector('.crearCursoInput');
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
                <div className="usuario">
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