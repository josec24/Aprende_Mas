import React,{Fragment} from 'react';

import cardcreadorcss from './cardProfile.css';

const cardProfile= ()=>{
    return(
        <Fragment>
            <div className="creador">
                <div className="arriba">
                    <form>
                        <label>Usuario</label>
                        <input type="text" name="name" ></input>
                        <label>Correo</label>
                        <input type="correo" name="correo" ></input>
                        <input type="submit" name="button_guardar" value="Guardar"></input>
                        
                    </form>
                    
                </div>
                
            </div>
        </Fragment>
    );
}

export default cardProfile;