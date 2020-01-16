import React, {useEffect} from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Container} from 'semantic-ui-react'
import { connect } from 'react-redux'

import { initializeProjects } from './reducers/projectsReducer'
import {setJoke} from './reducers/jokeReducer'
import projectsList, {selector} from './data/projects'

import TopMenu from './components/TopMenu'
import Kuka from './components/Kuka'
import Projektit from './components/Projektit'
import Project from './components/Project'
import Home from './components/Home'
import About from './components/About'
import Joke from './components/Joke'

import Ennustin from './data/projectComponents/Ennustin'


function App(props) {

  useEffect(() => {
    props.initializeProjects(projectsList)
  }, [])

  useEffect(() => {
    props.setJoke()
  }, [])

  const projectById = (id) => {
    // return props.projects.find(a => a.id===id)
    return selector(id)
  }


  return (
    // <div>
      <Router>
        <Container>
          <TopMenu />
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/kuka">
            <Kuka />
          </Route>
          <Route path="/joke">
            <Joke />
          </Route>
          <Route path="/projektit">
            <h1>Menneitä projekteja vuosien varrelta</h1>
            <Projektit />
          </Route>
          <Route exact path="/projects/:id" render={({ match }) =>
             <div>{projectById(match.params.id)}</div>
          } />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </Container>
      </Router>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

const mapDispatchToProps = {
  initializeProjects,
  setJoke
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedApp;

