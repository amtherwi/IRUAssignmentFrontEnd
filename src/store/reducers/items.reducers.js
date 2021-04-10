import * as Types from '../constats'

const initialStateSearch = {
    searchFiled: ''
}

export const searchItems = 
        (state=initialStateSearch, action={}) =>  {
    switch(action.type) {
        case Types.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchFiled: action.payload})
        default:
            return state;
    }   

}

const initialStateItems = {
    isPending: false,
    items   : [],
    error    : '',
    item: null,
    open: false,
}

export const requestItems = 
        ( state=initialStateItems, action={}) => {
    switch(action.type) {
        case Types.REQUEST_ITEMS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case Types.REQUEST_ITMES_SUCCESS:
            return Object.assign({}, state, {items: action.payload, isPending:false})
        // case Types.REQUEST_ITEM_VALUES:
        //     return Object.assign({}, state, {itemValues: action.payload})
        case Types.REQUEST_ITEMS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false})
        case Types.OPEN_DAILOG:
            return Object.assign({}, state, {item: action.payload, open:true})
        case Types.CLOSE_DAILOG:
            return Object.assign({}, state, {item: null, open:false})
        default:
            return state
    }
}