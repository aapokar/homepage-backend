import React from 'react'
import {Header, Icon} from 'semantic-ui-react'

const Home = (props) => {
    return (
        <Header as="h1" icon textAlign='center'>
            <Icon name='home' />
            Tervetuloa kotisivuilleni!
        </Header>
    )
}

export default Home