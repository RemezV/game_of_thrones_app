import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header/header';
import ErrorMessage from '../errorMessage'
import CharactersPage from '../pages/characterPage/characterPage'
import RandomChar from '../randomChar/randomChar'
import Service from '../../services/gotService'
import BooksPage from '../pages/booksPage/booksPage'
import HousesPage from '../pages/HousesPage/housesPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
    state = {
        error: false,
        random: true,
    }
    service = new Service()
    componentDidCatch() {
        this.setState({error: true})
    }
    toggleRandom = () => {
        this.setState((state) => {return {random : !state.random}})
    }
    render() {
        const {random, error} = this.state
        const randomChar = random ? <RandomChar/> : null
        if (error) return <ErrorMessage/>
        
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <button 
                            className={this.state.random ? "random random_big" : "random"}
                            onClick={this.toggleRandom}
                        >Random character</button>
                        {randomChar}
                        <Route path="/characters" exact component={CharactersPage}/>
                        <Route path="/books" exact component={BooksPage}/>
                        <Route path="/houses" exact component={HousesPage}/>
                    </Container>
                </div>
            </Router>
        )
    }
}

export default App;