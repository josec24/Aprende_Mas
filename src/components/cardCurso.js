import React,{Fragment,useState,useEffect} from 'react';
import Axios from 'axios'
import {useHistory} from "react-router-dom"

import cardcursocss from './cardCursoCss.css';

function CardCurso(){

    const [list,setList]=useState([]);
    let history=useHistory();

    let email=''

    let curso=''
    // obtener_localStorage()
    function obtener_localStorage(){
        let cursoi=JSON.parse(localStorage.getItem("curso"));
        curso=cursoi
        // console.log(curso)
        return curso.codigo
    }

    useEffect(()=>{
        Axios.post('http://localhost:3001/posttema',{
            codigo:obtener_localStorage(),
    }).then((response)=>{
        // console.log(response.data);
        setList(response.data)
    })
    })

    function temaObj(nombre,codigo){
        let tema={
            nombre:nombre,
            codigo:codigo
        };

        console.log(tema)

        localStorage.setItem("tema",JSON.stringify(tema))
        UserAuthenticated()
    }


    const UserAuthenticated=()=>{
        Axios.get('http://localhost:3001/isUserAuth',{
            headers:{
                "x-access-token":localStorage.getItem("token"),
            },
        }).then((response)=>{
            
            email=response.data
    
            if(email=='profesor@gmail.com'){
                
                history.push("/crearTeoria")
            }else{
                history.push("/MiCurso")
            }
        })
    }


    return(
        <Fragment>
            <div className="cards_temas">
                {list.map((val,key)=>{
                    return <div className="curso">
                        <div className="titulo">
                            <a onClick={temaObj.bind(this,val.nombre,val.codigo)}>{val.nombre}</a>
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
                })}
            </div>
        </Fragment>
    );
}

export default CardCurso;