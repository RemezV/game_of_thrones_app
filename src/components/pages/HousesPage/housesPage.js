import React from 'react'
import ItemList from '../../itemList/itemList'
import ItemDetails, {Field} from '../../itemDetails/itemDetails'
import ErrorMessage from '../../errorMessage'
import Service from '../../../services/gotService'
import InfoBlock from '../../infoBlock/infoBlock'


export default class HousesPage extends React.Component {
    state = {
        selectedId: null,
        error: false,
    }
    service = new Service()

    onItemSelect = (id) => {
        this.setState({selectedId: id})
    }
    render() {
        if (this.state.error) return <ErrorMessage/>
        const itemList = (
                <ItemList 
                    onItemSelect={this.onItemSelect} 
                    getData={this.service.getAllHouses}
                />
            )
        const houseDetails = (
            <ItemDetails itemId={this.state.selectedId} page="houses">
                <Field field="region" label="Regions"/>
                <Field field="words" label="Words"/>
                <Field field="titles" label="Titles"/>
                <Field field="overlord" label="Overlord"/>
                <Field field="ancestralWeapons" label="Ancestral weapons"/>
            </ItemDetails>
        )
        return (<InfoBlock leftRow={itemList} rightRow={houseDetails}/>)

    }
}