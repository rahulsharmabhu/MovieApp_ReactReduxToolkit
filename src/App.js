import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movie/:imdbID" component={MovieDetail}/>
        <Route exact component={PageNotFound}/>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
