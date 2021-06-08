import React,{Fragment} from 'react';

import cardcursocss from './cardCursoCss.css';

const cardCurso= ()=>{
    return(
        <Fragment>
                <div className="curso">
                    <div className="titulo">
                        <h2>Machine Learning</h2>
                    </div>
                    <div className="card_contain">
                        <div className="teoria">
                            <a href="#">Teoría</a>
                        </div>
                        <div className="practica">
                            <a href="#">Práctica</a>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default cardCurso;