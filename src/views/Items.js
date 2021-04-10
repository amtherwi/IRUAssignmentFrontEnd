import React from 'react'
import { connect } from 'react-redux'
import { setSearchField, requestItems } from '../store/actions/items.actions'
import SearchBox from '../components/SearchBox.component.js';
import Grid from '@material-ui/core/Grid';
import ItemDetails from './ItemDetails';
import ItemList from '../components/ItemsList.component';

const mapStateToProps = state => {
    return {
      searchFiled: state.searchItems.searchFiled,
      items: state.requestItems.items,
      isPending: state.requestItems.isPending,
      error: state.requestItems.error,
      item: state.requestItems.item,
      open: state.requestItems.open,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestItems: () => dispatch(requestItems()),
  
    }
  }
  class Items extends React.Component {
    
    componentDidMount(){
        this.props.onRequestItems();
       }

    render(){
        const { searchFiled, onSearchChange, items, isPending, item, open } = this.props;
        const filterItems = items.filter(item => {
          return item.name.toLowerCase().includes(searchFiled.toLowerCase())
        })
        return isPending ? 
        <h2>Looding... </h2> :
         (
        <div style={{alignContent:"center", alignItems: "center", marginTop:10}}>
        {/* <Paper > */}
        <Grid>
        <SearchBox searchChange={onSearchChange}/>
        </Grid>
        <Grid>
         <ItemList items={filterItems}/>
        
        </Grid>
        <ItemDetails item={item} open={open} />
        
          </div>    
          );
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Items)

