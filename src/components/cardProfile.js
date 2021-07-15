import React,{UseState,useEffect,Fragment} from "react"
import cardcreadorcss from './cardProfile.css';
import Axios from 'axios'
//import userList from '../views/Profile';


const cardProfile= ()=>{
    
    
    return(
        <Fragment>
            <div className="creador">
                
                <div className="arriba">
                    {((val,key)=>{
                        return(
                            <form>
                                <label>Usuario</label>
                                <h1 > {val.usuario}</h1>
                                <label>Correo</label>
                                <h1 >{val.email}</h1>
                                
                                <input type="submit" name="button_guardar" value="Actualizar"></input>
                                
                            </form>
                        
                        );
                    })}
                </div>
                
            </div>
        </Fragment>
    );
}

export default cardProfile;