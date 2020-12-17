import React from 'react';
import './header.sass'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
    state = {
        selected: null,
        menuItems: ['Characters', 'Houses', 'Books']
    }
    createNavList = () => {
        const {selected, menuItems} = this.state
        return menuItems.map((item, i) => {
            return (
                <li className={i === selected ? "header__list-item selected" : "header__list-item"} key={i} onClick={() => this.setState({selected: i})}>
                    <Link to={`/${item.toLowerCase()}/`} className="random">{item}</Link>
                </li>
            )
        })
    }
    render() {

        return (
            <div className="header__block">
                <h3 className="header__title">
                    <Link to="/" onClick={() => this.setState({selected: null})}>
                    Game of Thrones DB
                    </Link>
                </h3>
                <ul className="header__list">
                    {this.createNavList()}
                </ul>
            </div>
        )
    }

}
