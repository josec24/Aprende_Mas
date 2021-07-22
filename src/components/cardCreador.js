import React,{Fragment,useState,useEffect} from 'react';
import Axios from 'axios'

import cardcreadorcss from './cardCreadorCss.css';

const CardCreador= ()=>{

    const [nombre,setNombre]=useState("");
    const [codigoCurso,setCodigoTema]=useState("");
    const [list,setList]=useState([]);
    // const [codigo,setCodigo]=useState("");

    let tema=''


    function obtener_localStorage(){
        let temai=JSON.parse(localStorage.getItem("tema"));
        tema=temai
        // console.log(curso)
        return tema.codigo
    }

    useEffect(()=>{
        Axios.post('http://localhost:3001/postteoria',{
            codigo:obtener_localStorage(),
    }).then((response)=>{
        // console.log(response.data);
        setList(response.data)
    })
    })

    function AddTeoria(){
        // obtener_localStorage()
        // va=curso.codigoCurso
        console.log(tema.codigoTema)
        Axios.post('http://localhost:3001/addteoria',{
            nombre:nombre,
            codigoTema:obtener_localStorage(),
        })
    }



    return(
        <Fragment>
            <div >
            <div className="creador">
                        <div className="arriba">
                            <div className="text">
                                <input type="Text"
                                onChange={(event)=>{setNombre(event.target.value)}}
                                placeholder="Aqui va el texto"></input>
                            </div>
                            <div className="check"></div>
                            <div className="tacho"></div>
                        </div>
                        <div className="abajo">
                            <div className="imagen">
                                <a>Imagen</a>
                            </div>
                            <div className="video">
                                <a>Video</a>
                            </div>
                            <div className="mas">
                                <a onClick={AddTeoria}>+</a>
                            </div>
                        </div>
                    </div>
                {list.map((val,key)=>{
                    return <div className="creador">
                        <div className="arriba">
                            <div className="text">
                                <input type="Text"
                                onChange={(event)=>{setNombre(event.target.value)}}
                                placeholder="Aqui va el texto" value={val.nombre}></input>
                            </div>
                            <div className="check"></div>
                            <div className="tacho"></div>
                        </div>
                        <div className="abajo">
                            <div className="imagen">
                                <a>Imagen</a>
                            </div>
                            <div className="video">
                                <a>Video</a>
                            </div>
                            <div className="mas">
                                <a onClick={AddTeoria}>+</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </Fragment>
    );
}

export default CardCreador;