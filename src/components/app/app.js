import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import ErrorMessage from '../errorMessage'
import CharactersPage from '../characterPage/characterPage'

class App extends React.Component {
    state = {
        error: false,
    }
    componentDidCatch() {
        this.setState({error: true})
    }
    render() {

        if (this.state.error) return <ErrorMessage/>
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <CharactersPage/>
                </Container>
            </>
        )
    }
}

export default App;