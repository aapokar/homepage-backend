import React from 'react'
import { connect } from 'react-redux'
import {setJoke} from '../reducers/jokeReducer'
import { Button, Icon, Segment } from 'semantic-ui-react'




const Joke = (props) => {
    const handleClick = (e) => {
        props.setJoke()
    }
    return (
        <Segment textAlign='center'>
            <Button icon onClick={handleClick}>
            Paina tästä ja lisää viihtymistäsi!<br/>
            <Icon name='random' loading  />
            </Button>
            <p>{props.joke}</p>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
      joke: state.joke,
    }
  }

  const mapDispatchToProps = {
    setJoke
  }

const connectedJoke = connect(mapStateToProps, mapDispatchToProps)(Joke)

export default connectedJoke