import { construct } from 'harmony-reflect';
import robot from '../images/robot.svg';
import App_CSS from './Ingresar.css';
import React,{useState} from "react"
import Axios from 'axios'

function Ingresar(){
    const [name,setName]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState(0);
    const [days,setDays]=useState(0);
    
    const addToList=()=>{
        // console.log(email+name+lastname)
        Axios.post('http://localhost:3001/signup',{
            name:name,
            lastname:lastname,
            email:email,
            phone:phone,
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
                        <label>Usuario</label>
                        <input type="text" name="name" ></input>
                        <label>Contraseña</label>
                        <input type="password" name="password" ></input>
                        <input type="submit" name="button_ingresar" value="Ingresar"></input>
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
                        onChange={(event)=>{setName(event.target.value)}}
                        name="name" ></input>
                        <label>Contraseña</label>
                        <input type="password"
                        onChange={(event)=>{setLastname(event.target.value)}}
                        name="password" ></input>
                    {/* 
                        <input type="submit" 
                        onClick={addToList}
                        name="button_ingresar" value="Crear Cuenta"></input>
                         */}
                        <button onClick={addToList}>add tolist</button>
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