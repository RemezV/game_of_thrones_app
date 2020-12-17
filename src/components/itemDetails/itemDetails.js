import React, {Component} from 'react';
import './itemDetails.sass';
import Service from '../../services/gotService'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage'

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span className="term-value">{item[field]}</span>
        </li>
    )
}

export {Field}

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: true,
        error: false
    }
    componentDidCatch() {

    }
    componentDidMount() {
        this.updateItem()
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) this.updateItem()
    }
    updateItem = () => {
        const {itemId, page} = this.props
        if (itemId === null) {
            this.setState({item: null})
            return
        }
        const service = new Service()
        if (page === 'books') {
            service.getBook(itemId)
            .then(item => this.setState({item, loading: false}))
        } else if (page === 'characters') {
            service.getCharacter(itemId)
            .then(item => this.setState({item, loading: false}))
        } else {
            service.getHouse(itemId)
            .then(item => this.setState({item, loading: false}))
        }

    }
    render() {
        const {item, loading, error} = this.state
        if (error) return (
            <div className="char-details">
                <ErrorMessage/>
            </div>
        )
        if (item === null) return (
            <div className="char-details">
                <span className="unselected">Not selected</span>
            </div>
        )
        const {name} = item

        return (loading) ? 
        (
        <div className="char-details">
            <Spinner/>'
        </div>) :
        (
            <div className="char-details">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })}
                </ul>
            </div>
        )
    }
}
