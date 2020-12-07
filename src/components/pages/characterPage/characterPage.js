import React from 'react'
import ItemList from '../../itemList/itemList'
import ItemDetails, {Field} from '../../itemDetails/itemDetails'
import ErrorMessage from '../../errorMessage'
import Service from '../../../services/gotService'
import InfoBlock from '../../infoBlock/infoBlock'


export default class CharactersPage extends React.Component {
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
                    getData={this.service.getAllCharacters}
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
        return (<InfoBlock leftRow={itemList} rightRow={charDetails}/>)

    }
}