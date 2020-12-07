import React, {Component} from 'react';
import './itemDetails.sass';
import Service from '../../services/gotService'
import Spinner from '../spinner/spinner'

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: true
    }
    componentDidMount() {
        this.updateItem()
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) this.updateItem()
    }
    updateItem = () => {
        const {itemId, page} = this.props
        if (!itemId) return
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
        const {item, loading} = this.state
        if (!item) return (
            <div className="char-details rounded">
                <span className="unselected">Not selected</span>
            </div>
        )
        const {name} = item

        return (loading) ? 
        (
        <div className="char-details rounded">
            <Spinner/>'
        </div>) :
        (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })}
                </ul>
            </div>
        );
    }
}
// const Field = ({char, field, label}) => {
//     return (
//         <li className="list-group-item d-flex justify-content-between">
//             <span className="term">{label}</span>
//             <span>{char[field]}</span>
//         </li>
//     )
// }

// export {Field}

// export default class CharDetails extends Component {
//     state = {
//         char: null,
//         loading: true
//     }
//     componentDidMount() {
//         this.updateChar()
//     }
//     componentDidUpdate(prevProps) {
//         if (this.props.charId !== prevProps.charId) this.updateChar()
//     }
//     updateChar = () => {
//         const {charId} = this.props
//         if (!charId) return
//         const service = new Service()
//         service.getCharacter(charId)
//             .then(char => this.setState({char, loading: false}))
//     }
//     render() {
//         const {char, loading} = this.state
//         if (!char) return (
//             <div className="char-details rounded">
//                 <span className="unselected">Character wasn't selected</span>
//             </div>
//         )
//         const {name} = char

//         return (loading) ? 
//         (
//         <div className="char-details rounded">
//             <Spinner/>'
//         </div>) :
//         (
//             <div className="char-details rounded">
//                 <h4>{name}</h4>
//                 <ul className="list-group list-group-flush">
//                     {React.Children.map(this.props.children, (child) => {
//                         return React.cloneElement(child, {char})
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }