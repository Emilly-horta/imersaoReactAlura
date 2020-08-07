import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div><h1>Pagina 404</h1></div>);

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" component={Home} exact />
  <Route path="/cadastro/Video" component={CadastroVideo}/>
  <Route path="/cadastro/categoria" component={CadastroCategoria}/>
  <Route component={Pagina404}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



