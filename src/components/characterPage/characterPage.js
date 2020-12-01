import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage'

export default class CharactersPage extends React.Component {
    state = {
        selectedId: null,
        random: true,
        error: false,
    }
    toggleRandom = () => {
        this.setState((state) => {return {random : !state.random}})
    }
    onItemSelect = (id) => {
        console.log(id)
        this.setState({selectedId: id})
    }
    render() {
        const {random, error} = this.state
        const randomChar = random ? <RandomChar/> : null
        if (error) return <ErrorMessage/>
        
        return(
            <>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    <button 
                        className="random"
                        onClick={this.toggleRandom}
                    >Random character</button>
                        {randomChar}
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onItemSelect={this.onItemSelect} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedId}/>
                    </Col>
                </Row>            
            </>
        )
    }
}