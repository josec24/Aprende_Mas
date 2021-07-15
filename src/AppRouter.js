import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Ingresar from './views/Ingresar.js'
import Curso from './views/Curso.js'
import MiCurso from './views/MiCurso.js'
import CrearCurso from './views/CrearCurso.js'
import Profile from './views/Profile.js'
export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Ingresar}></Route>
                <Route exact path="/Curso" component={Curso}></Route>
                <Route exact path="/MiCurso" component={MiCurso}></Route>
                <Route exact path="/crearCurso" component={CrearCurso}></Route>
                <Route exact path="/Profile" component={Profile} ></Route>
            </Switch>
        </Router>
    )
}
