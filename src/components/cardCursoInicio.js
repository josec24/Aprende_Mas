import React,{Fragment,useState,useEffect} from 'react';
// import React,{} from "react"
import Axios from 'axios'
import {useHistory} from "react-router-dom"


import cardcursoIniciocss from './cardCursoInicioCss.css';

function CardCursoInicio(){

    const [nombre,setNombre]=useState("");
    const [codigo,setCodigo]=useState("");

    const [list,setList]=useState([]);
    var a=0;

    let history=useHistory();
    useEffect(()=>{
        Axios.get('http://localhost:3001/getcurso',{

    }).then((response)=>{
        console.log(response.data);
        setList(response.data)
    })
    })

    function cursoObj(){
        history.push("/Curso")
    }
    

    return(
        <Fragment>
                <div className="cards_curso_inicio">
                    {list.map((val,key)=>{
                        return <div className="card_curso">
                            <div className="nada_color">
                                
                            </div>
                            <div className="curso_name">
                            <a onClick={cursoObj}>{val.nombre}</a>
                        </div>
                        {/* <h1>{val.nombre}</h1> */}
                        </div>
                    })}
                </div>
        </Fragment>
    );
}

export default CardCursoInicio;