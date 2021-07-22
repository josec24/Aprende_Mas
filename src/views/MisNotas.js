import React from 'react';
import MisNotas_CSS from './MisNotas.css';

import CardTablaNotas from '../components/cardTablaNotas'
import {useHistory} from "react-router-dom"

function MisNotas(){

    let history=useHistory();

    return(
        <div className="mis_notas_container">
            <div>
            {/* Se carga el fragmento header */}
                <div className= "header">
                    <div className="logo">
                        <h2>Aprende+</h2>
                    </div>
                    <div className="titulo">
                        <h2>Mis Notas</h2>
                    </div>
                        <div className="usuario">
                    </div>
                </div>
            </div>
            <div className="contenido">
                <div className="arriba">
                    <table class="default">
                        <thead>
                        <tr>
                            <th colspan="2">Nombre del curso</th>
                        </tr>
                        </thead>

                        <tr>
                            <th>pc</th>
                            <th>Nota</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nota 1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nota 2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nota 3</td>                            </tr>
                    </table>
                </div>
                <div className="crear_cards_tablas">
                {/* Se cargan los cards que representan las notas */}
                    <CardTablaNotas/>
                </div>


                <div className="abajo">
                    <div className="chat_bot">
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MisNotas
