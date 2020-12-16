import React from 'react'
import './elementsNav.sass'
export default class ElementsNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }
    createListItems = (startPoint, endPoint, arr) => {
        const {selectedPage, renderItems} = this.props
        for (let i = startPoint; i <=  endPoint; i++) {
            arr.push(
                <li 
                    key={i}
                    id={i}
                    className={i === selectedPage ? "data__nav-item selected" : "data__nav-item"}
                    onClick={() => renderItems(i)}
                >{i}</li>
            )
        }
    }
    createButtons = () => {
        let buttons = []
        const {pages = 1, selectedPage} = this.props
        if ((selectedPage < 3 || selectedPage === 'no such page') && (selectedPage <= pages || isNaN(selectedPage))) {

            this.createListItems(1, (pages < 5 ? pages : 5), buttons)
        } else if (selectedPage < pages - 2 && selectedPage <= pages) {
            buttons = []
            this.createListItems(selectedPage - 2, selectedPage + 2, buttons)
        } else {
            buttons = []
            this.createListItems(pages - 4, pages, buttons)
        }

        return buttons
    }
    render() {
        const {pages = 1, renderItems,selectedPage} = this.props
        return (
        <div className="nav-container">
    
            <ul className="data__nav">
                <li className="data__nav-item">
                    <div
                        key='prevBtn'
                        className="nav-btn"
                        onClick={() => renderItems(selectedPage > 1 ? selectedPage - 1: pages)}
                    >Prev</div>
                </li>
                {this.createButtons()} 
                <li className="data__nav-item">
                    <div
                        key='prevBtn'
                        className="nav-btn"
                        onClick={() => renderItems(selectedPage < pages ? selectedPage + 1: 1)}
                    >Next</div>
                </li>
            </ul>
            <form className="search-form" onSubmit={(e) => {
                e.preventDefault()
                renderItems(+this.state.searchValue)
                this.setState({searchValue: ''})
            }}>
                <input 
                    type="text"
                    name="item-search"
                    id="item-search" 
                    placeholder="number of page"
                    onChange={(e) => this.setState({searchValue: e.target.value})}
                    value={this.state.searchValue}/>
                <button type="submit" className="nav-btn">search</button>
            </form>
        </div>
        )
    }
}
