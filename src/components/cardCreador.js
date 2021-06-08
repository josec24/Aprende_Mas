import React,{Fragment} from 'react';

import cardcreadorcss from './cardCreadorCss.css';

const cardCreador= ()=>{
    return(
        <Fragment>
            <div className="creador">
                <div className="arriba">
                    <div className="text">
                        <input type="Text" placeholder="Aqui va el texto"></input>
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
                        <a href="#">+</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default cardCreador;