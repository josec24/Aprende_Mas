
import React,{ useState,useEffect} from "react";
import {useHistory} from "react-router-dom"
import Axios from "axios";
import'../components/cardProfile.css'
import './Profile.css';

function Profile(){
    const [userList,setUserList]=useState([])
    const [newProfile,setNewProfile]=useState([])
    const[newEmail,setNewEmail]=useState([])
    
    let history=useHistory();
    function verificarMicurso(){
        history.push("/Micurso");
    }
    function inicio(){
        history.push("/Inicio");
    }
    function crearCurso(){
        history.push("/crearCurso");
    }
    const updateUser =(id)=>{
            //Se obtiene el correo
            UserAuthenticated()
        Axios.put("http://localhost:3001/update",{
            id: id,
            newProfile: newProfile,
        });
    };
    const updateEmail =(id)=>{
        //Se obtiene el correo
        UserAuthenticated()
    Axios.put("http://localhost:3001/updateEmail",{
        id: id,
        newEmail: newEmail,
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
    const deleteUser =(id)=>{
        Axios.delete(`http://localhost:3001/delete/${id}`)
    };

    
    
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
                    
                    <button onClick={verificarMicurso}>Mi Curso</button>
                    <button onClick={inicio}>Inicio</button>
                    <button onClick={crearCurso}>Crear Curso</button>
                    </div>
                </div>
            </div>
                {userList.map((val, key)=>{
                    return(<div key={key}>
                        <div className="container" >
                        <div className="card ">
                            <div className="izq">
                        <h1>Modifica+</h1>
                        </div>
                            <div className="der">
                            <div className="ingresar">
                                <form>
                                <label>Usuario</label>
                                <h1 > {val.usuario}</h1>
                                <input type="text"
                                    placeholder="ingrese nuevo nickname"
                                    onChange={(event)=>{
                                    setNewProfile(event.target.value);
                                    }}
                                />
                                <label>Correo</label>
                                <h1 >{val.email}</h1>
                                <input type="text"
                                placeholder="nuevocorreo@gmail.com"
                                onChange={(event)=>{
                                    setNewEmail(event.target.value);
                                    }}
                                />
                                </form>
                            </div>
                                
                                
                                <div className="botones">
                                <button  onClick={()=>updateUser(val._id)} >Actualizar Nickname</button>
                                <button  onClick={()=>updateEmail(val._id)} >Actualizar Email</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    );
                })}
        </div>
    );
}

export default Profile