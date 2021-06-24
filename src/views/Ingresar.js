import { construct } from 'harmony-reflect';
import robot from '../images/robot.svg';
import App_CSS from './Ingresar.css';
import React,{useState,useEffect} from "react"
import Axios from 'axios'

function Ingresar(){
    const [usuario,setUsuario]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const [usuarioLista,setUsuarioLista]=useState([])
    const [verificador,setVerificador]=useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/read').then((response)=>{
            // console.log(response)
            setUsuarioLista(response.data)
        })
    })

    // const verificar=()=>{
    //     console.log(usuarioLista[1])
    // }

    async function verificar1(){
        verificar1()
        
        
    }

    function verificar(){
        // console.log(email+name+lastname)

        Axios.post('http://localhost:3001/verificar',{
            email:email,
            password:password,
        }).then((response)=>{
            // console.log(response.data)
            setVerificador(response.data)
            console.log(response.data);
            if(response.data=="verdadero"){
                location.href ="/CrearCurso";
            }else{
            }
        })

        // setTimeout(function(){
        //     // console.log(response.data);
        //     if(verificador=="verdadero"){
        //         location.href ="/CrearCurso";
        //     }else{
        //     }
        // },50);
        
        // console.log(verificador)
        // if(verificador=="verdadero"){
        //     location.href ="/CrearCurso";
        // }else{
        // }

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