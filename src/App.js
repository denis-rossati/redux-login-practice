import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import LoginEfetuado from './pages/LoginEfetuado';
import LoginNaoEfetuado from './pages/LoginNaoEfetuado';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Cadastro } />
            <Route path="/logged" component={ LoginEfetuado } />
            <Route path="/notlogged" component={ LoginNaoEfetuado } />
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
