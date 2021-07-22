import React,{Fragment,useState,useEffect} from 'react';
// import React,{} from "react"
import Axios from 'axios'
import {useHistory} from "react-router-dom"


import card_crear_curso from './cardCrearCurso.css';

function CardCrearCurso(){

    const [nombre,setNombre]=useState("");
    const [codigo,setCodigo]=useState("");

    let history=useHistory();

    function AddCurso(){
        Axios.post('http://localhost:3001/addcurso',{
            nombre:nombre,
            codigo:codigo,
        }).then((response)=>{
            console.log(response.data);
            if(response.data=="verdadero"){
                history.push("/Inicio");
                UserAuthenticated()
            }else{
            }
        })
    }
    
    function AddNotas(){
        Axios.post('http://localhost:3001/addnotas',{
            nombre:nombre,
            codigo:codigo,
            nota1:"" ,
            nota2:"" ,
            nota3:"" ,
        }).then((response)=>{
            console.log(response.data);
            if(response.data=="verdadero"){
                history.push("/MisNotas");
                UserAuthenticated()
            }else{
            }
        })
    } 

    const UserAuthenticated=()=>{
        Axios.get('http://localhost:3001/isUserAuth',{
            headers:{
                "x-access-token":localStorage.getItem("token"),
            },
        }).then((response)=>{
            console.log('gag')
            console.log(response.data);
        })
    }


    return(
        <Fragment>
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
                        onClick={AddCurso}
                        name="button_ingresar" value="Crear Curso"></input>
                </div>
        </Fragment>
    );
}

export default CardCrearCurso;
