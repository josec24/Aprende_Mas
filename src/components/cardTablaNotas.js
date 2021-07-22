import React,{Fragment,useState,useEffect} from 'react';
// import React,{} from "react"
import Axios from 'axios'
import {useHistory} from "react-router-dom"


import cardTablaNotasCss from './cardTablaNotasCss.css';

function CardTablaNotas(){

    const [nombre,setNombre]=useState("");
    const [codigo,setCodigo]=useState("");

    const [list,setList]=useState([]);
    var a=0;

    let history=useHistory();
    useEffect(()=>{
        Axios.get('http://localhost:3001/getnotas',{

    }).then((response)=>{
        console.log(response.data);
        setList(response.data)
    })
    })


    return(
        <Fragment>
                <div className="cards_tabla_notas">
                    {list.map((val,key)=>{
                        return <div className="card_notas">
                            <table class="default">
                                <thead>
                                <tr>
                                    <th colspan="2">Nombre del curso</th>
                                </tr>
                                </thead>

                                <tr>
                                    <th>pc</th>
                                    <th>Nota</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td> </td>                            </tr>
                            </table>
                            
                        {/* <h1>{val.nombre}</h1> */}
                        </div>
                    })}
                </div>
        </Fragment>
    );
}

export default CardTablaNotas;
