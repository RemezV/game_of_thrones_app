import React from 'react'
import ItemList from '../../itemList/itemList'
import ItemDetails, {Field} from '../../itemDetails/itemDetails'
import ErrorMessage from '../../errorMessage'
import Service from '../../../services/gotService'
import InfoBlock from '../../infoBlock/infoBlock'
import ElementsNav from '../../elementsNav/elementsNav'


export default class CharactersPage extends React.Component {
    state = {
        selectedId: null,
        error: false,
        selectedPage: 2,
        pagesQuantity: Math.ceil(2138 / 10)
    }
    service = new Service()

    onItemSelect = (id) => {
        this.setState({selectedId: id})
    }
    renderItems = (page) => {
        this.setState(() => {
            return {selectedPage: page <= this.state.pagesQuantity ? page : 'no such page', selectedId: null}
        })
        
    }
    render() {
        if (this.state.error) return <ErrorMessage/>
        const itemList = (
                <ItemList 
                    onItemSelect={this.onItemSelect} 
                    getData={this.service.getAllCharacters}
                    selectedPage={this.state.selectedPage}
                />
            )
        const charDetails = (
            <ItemDetails itemId={this.state.selectedId} page="characters">
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born"/>
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture"/>
            </ItemDetails>
        )
        return (
            <>
                <ElementsNav pages={this.state.pagesQuantity} renderItems={this.renderItems} selectedPage={this.state.selectedPage}/>
                <InfoBlock leftRow={itemList} rightRow={charDetails}/>
            </>
        )

    }
}