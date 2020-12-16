import React from 'react'
import ItemList from '../../itemList/itemList'
import ItemDetails, {Field} from '../../itemDetails/itemDetails'
import ErrorMessage from '../../errorMessage'
import Service from '../../../services/gotService'
import InfoBlock from '../../infoBlock/infoBlock'
import ElementsNav from '../../elementsNav/elementsNav'


export default class HousesPage extends React.Component {
    state = {
        selectedId: null,
        error: false,
        selectedPage: 1,
        pagesQuantity: Math.ceil(444 / 10)
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
                    getData={this.service.getAllHouses}
                    selectedPage={this.state.selectedPage}
                />
            )
        const houseDetails = (
            <ItemDetails itemId={this.state.selectedId} page="houses">
                <Field field="region" label="Regions"/>
                <Field field="words" label="Words"/>
                <Field field="titles" label="Titles"/>
                <Field field="ancestralWeapons" label="Ancestral weapons"/>
            </ItemDetails>
        )
        return (
        <>
            <ElementsNav pages={this.state.pagesQuantity} renderItems={this.renderItems} selectedPage={this.state.selectedPage}/>
            <InfoBlock leftRow={itemList} rightRow={houseDetails}/>
        </>
       )

    }
}