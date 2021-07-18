import { construct } from 'harmony-reflect';
import robot from '../images/robot.svg';
import App_CSS from './Ingresar.css';
import React,{useState,useEffect} from "react"
import Axios from 'axios'
import {useHistory} from "react-router-dom"


function Ingresar(){
    const [usuario,setUsuario]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    let history=useHistory();

    const [usuarioLista,setUsuarioLista]=useState([])
    const [verificador,setVerificador]=useState([])

    function verificar(){
        Axios.post('http://localhost:3001/signin',{
            email:email,
            password:password,
        }).then((response)=>{
            // console.log(response.data)
            localStorage.setItem("token",response.data.token)
            setVerificador(response.data)
            console.log(response.data.auth);
            if(response.data.auth==true){
                userAuthenticated()
                history.push("/Inicio");
            }else{
            }
        })
    }

    const userAuthenticated=()=>{
        Axios.get('http://localhost:3001/isUserAuth',{
            
            headers:{
                "x-access-token":localStorage.getItem("token"),
            },
        }).then((response)=>{
            console.log(response);
        })
    }


    const addToList=()=>{
        // console.log(email+name+lastname)
        Axios.post('http://localhost:3001/signup',{
            usuario:usuario,
            email:email,
            password:password,
        })
    }

    const toggleForm=()=>{
        var container =document.querySelector('.container');
        container.classList.toggle('active')
    }


    return (<div className="container">
        <div className="card">
            <div className="izq">
                    <h1>APRENDE +</h1>
                    <img src={robot} alt='robot'></img>
            </div>
            <div className="der">
            <div className="forms">
                <div className="botones">
                    <div className="bot_ingresar">
                        <a href="#" onClick={()=>{toggleForm()}}>Ingresar</a>
                    </div>
                    <div className="bot_crear_cuenta">
                        <a href="#" onClick={()=>{toggleForm()}}>Crear Cuenta</a>
                    </div>
                </div>
                <div class="ingresar">
                    <form>
                        <label>Email</label>
                        <input type="email"
                        onChange={(event)=>{setEmail(event.target.value)}}
                        name="email" ></input>
                        <label>Contraseña</label>
                        <input type="password"
                        onChange={(event)=>{setPassword(event.target.value)}}
                        name="password" ></input>
                        <div onClick={verificar} class="button">
                            <p>Ingresar</p>
                        </div>
                        {/* <a class="button" onClick={verificar}>Ingresar</a> */}
                        <p className="redic_crear_cuenta">¿Aun sin cuenta?, Crea una cuenta aqui:  <a href="#" onClick={()=>{toggleForm()}}>Crear cuenta</a></p>
                    </form>
                </div>
                <div className="crear_cuenta">
                    {
                        <form>
                        <label>Email</label>
                        <input type="email" 
                        onChange={(event)=>{setEmail(event.target.value)}}
                        name="email"></input>
                        <label>Usuario</label>
                        <input type="text" 
                        onChange={(event)=>{setUsuario(event.target.value)}}
                        name="name" ></input>
                        <label>Contraseña</label>
                        <input type="password"
                        onChange={(event)=>{setPassword(event.target.value)}}
                        name="password" ></input>
                        <input type="submit"
                        onClick={addToList}
                        name="button_ingresar" value="Crear Cuenta"></input>
                        {/* <button onClick={addToList}>add tolist</button> */}
                        <p className="redic_crear_cuenta">¿Ya tienes una cuenta?, Ingresa aqui <a href="#" onClick={()=>{toggleForm()}}>Iniciar cesión</a></p>
                    </form>
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Ingresar