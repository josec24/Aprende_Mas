import CrearCurso_CSS from './CrearCurso.css';
import React,{ useState,useEffect} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom"

function Profile(){
    const [userList,setUserList]=useState([])
    const [newProfile,setNewProfile]=useState([])

    const updateUser =(id)=>{
            //Se obtiene el correo
            UserAuthenticated()
        Axios.put("http://localhost:3001/update",{
            id: id,
            newProfile: newProfile,
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response)=>{
            setUserList(response.data)
        });
    }, []);

    //Llama al correo actual
    const UserAuthenticated=()=>{
        Axios.get('http://localhost:3001/isUserAuth',{
            
            headers:{
                "x-access-token":localStorage.getItem("token"),
            },
        }).then((response)=>{
            console.log(response.data);
        })
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
                        <h2>Mi perfil</h2>
                    </div>
                    <div className="usuario">
                    </div>
                </div>
            </div>
                {userList.map((val, key)=>{
                    return(<div className="container">
                            <div className=" ">
                            <label>Usuario</label>
                                <h1 > {val.usuario}</h1>
                            <label>Correo</label>
                                <h1 >{val.email}</h1>
                            <input type="text"
                                    placeholder="ingrese nuevo nickname"
                                onChange={(event)=>{
                                    setNewProfile(event.target.value);
                                }}
                            />
                            <input type="text"
                                    placeholder="ingrese nuevo correo"

                            />
                            <button onClick={()=>updateUser(val._id)} >Actualizar</button>
                            <button> Delete</button>
                            </div>
                        </div>
                    );
                })}
                </div>
    );
}

export default Profile