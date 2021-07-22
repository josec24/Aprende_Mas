import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Ingresar from './views/Ingresar.js'
import Curso from './views/Curso.js'
import MiCurso from './views/MiCurso.js'
import CrearTeoria from './views/CrearTeoria.js'
import CrearTema from './views/crearTema.js'
import Inicio from './views/Inicio.js'
import CrearCursoInicio from './views/CrearCursoInicio'
import Profile from './views/Profile.js'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Ingresar}></Route>
                <Route exact path="/Inicio" component={Inicio}></Route>
                <Route exact path="/CrearCursoInicio" component={CrearCursoInicio}></Route>
                <Route exact path="/Curso" component={Curso}></Route>
                <Route exact path="/MiCurso" component={MiCurso}></Route>
                <Route exact path="/crearTeoria" component={CrearTeoria}></Route>
                <Route exact path="/crearTema" component={CrearTema}></Route>
                <Route exact path="/Profile" component={Profile} ></Route>
            </Switch>
        </Router>
    )
}
