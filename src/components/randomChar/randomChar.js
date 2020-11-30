import React, {Component} from 'react';
import './randomChar.sass';
import Service from '../../services/gotService'
import Spinner from '../spinner/spinner'

export default class RandomChar extends Component {
    constructor() {
        super()
        this.updateCharacter()
    }
    gotService = new Service()
    state = {
        char: {},
        loading: true
    }
    onCharLoaded = (char) => {
        this.setState({char})
    }
    updateCharacter = () => {
        // max 2138
        const id = Math.floor(Math.random() * 2139)
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {
        const {char: {name, gender, born, died, culture}, loading} = this.state

        if (loading) {
            return <Spinner/>
        }

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                         <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
