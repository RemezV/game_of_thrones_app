import React, {Component} from 'react'
import './itemList.sass'
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {
    state = {
        itemList: null
    }
    componentDidMount(){
        const {getData} = this.props
        getData()
            .then(itemList => this.setState({itemList}))
        
    }
    createItems = (itemList) => {
        return itemList.map((item) => {
            return (
                <li 
                    key={item.id}
                    className="list-group-item" 
                    onClick={() => this.props.onItemSelect(item.id)}
                >
                    {item.name}
                </li>
            )
        })
    }
    render() {
        const {itemList} = this.state

        if (!itemList) return <Spinner/>

        const items = this.createItems(itemList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}