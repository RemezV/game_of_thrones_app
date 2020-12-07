import React from 'react'
import ItemList from '../../itemList/itemList'
import ItemDetails, {Field} from '../../itemDetails/itemDetails'
import ErrorMessage from '../../errorMessage'
import Service from '../../../services/gotService'
import InfoBlock from '../../infoBlock/infoBlock'


export default class BooksPage extends React.Component {
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
                    getData={this.service.getAllBooks}
                />
            )
        const bookDetails = (
            <ItemDetails itemId={this.state.selectedId} page="books">
                <Field field="numberOfPages" label="Number of pages"/>
                <Field field="publiser" label="Publiser"/>
                <Field field="released" label="Released"/>
            </ItemDetails>
        )
        return (<InfoBlock leftRow={itemList} rightRow={bookDetails}/>)

    }
}