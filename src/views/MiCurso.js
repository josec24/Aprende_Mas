import React,{Fragment,useState,useEffect} from 'react';
import Axios from 'axios'
import MiCurso_CSS from './MiCurso.css';

function MiCurso(){


    const [nombre,setNombre]=useState("");
    const [codigoCurso,setCodigoTema]=useState("");
    const [list,setList]=useState([]);
    // const [codigo,setCodigo]=useState("");

    let tema=''
    let tema2=''
    function obtener_localStorage(){
        let temai=JSON.parse(localStorage.getItem("tema"));
        tema=temai
        // console.log(curso)
        return tema.codigo
    }


    function obtener_localStoragea(){
        let temai2=JSON.parse(localStorage.getItem("tema"));
        tema2=temai2
        return tema2.nombre
    }

    useEffect(()=>{
        obtener_localStoragea()
        Axios.post('http://localhost:3001/postteoria',{
            codigo:obtener_localStorage(),
    }).then((response)=>{
        // console.log(response.data);
        setList(response.data)
    })
    
    })


    return(
        <div className="mi_curso_container">
            <div>
            {/* Se carga el fragmento header */}
                <div className= "header">
                    <div className="logo">
                        <h2>Aprende+</h2>
                    </div>
                    <div className="titulo">
                        <h2>{obtener_localStoragea()}</h2>
                    </div>
                        <div className="usuario">
                    </div>
                </div>
            </div>
            <div className="contenido">
                <div className="arriba">
                    <div className="text">

                        {list.map((val,key)=>{

                            return <div>
                            <p>{val.nombre}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="abajo">
                    {/* <div className="prueba"> */}
                        {/* <a>Ir a la prueba</a> */}
                    {/* </div> */}
                    {/* <div className="chat_bot"> */}
                    {/* </div> */}
                </div>
            </div>
        </div>

    );
}

export default MiCurso