import React, {Component} from 'react';
import './itemList.sass';
import Service from '../../services/gotService'
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {
    service = new Service()
    state = {
        charList: null
    }
    componentDidMount(){
        this.service.getAllCharacters()
            .then(charList => this.setState({charList}))
        
    }
    createItems = (charList) => {
        return charList.map((item, i) => {
            return (
                <li 
                    key={[...item.url.match(/[$\d]+/)]}
                    className="list-group-item" 
                    onClick={() => this.props.onItemSelect([...item.url.match(/[$\d]+/)])}
                >
                    {item.name}
                </li>
            )
        })
    }
    render() {
        const {charList} = this.state

        if (!charList) return <Spinner/>

        const items = this.createItems(charList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}