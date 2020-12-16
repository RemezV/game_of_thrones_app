import React, {Component} from 'react'
import './itemList.sass'
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {
    state = {
        itemList: null,
        selectedPage: 1
    }

    createItems = (itemList) => {
        if (itemList) {
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
        } else {
            return <h1>test</h1>
        }
    }
    createItemList = () => {
        const id = this.props.selectedPage
        if (this.state.selectedPage !== id || !this.state.itemList) {
            this.props.getData(id)
            .then(items => this.setState({itemList: items, selectedPage: id}))
        }
        
    }
    render() {
        if (this.props.selectedPage === 'no such page') {
            return (
                <ul className="item-list list-group">
                    <li className="list-group-item list-group-item_explain" ><h2>No such page</h2></li>
                </ul>
            )
        }
        this.createItemList()
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