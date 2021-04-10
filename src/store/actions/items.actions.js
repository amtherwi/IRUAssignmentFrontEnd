import * as Type from '../constats'
import ItemsService from "../../services/items.service";

export const setSearchField = (text) => ({
    type: Type.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestItems = () => (dispach) =>{
    dispach({
        type: Type.REQUEST_ITEMS_PENDING
    });
    ItemsService.getItemsByColorCode()
    .then(response => {
        //console.log("res:",response.data);
        dispach({
            type: Type.REQUEST_ITMES_SUCCESS,
            payload: response.data
        })
        //response.json()     
    })
    .catch(error => dispach({
        type: Type.REQUEST_ITEMS_FAILED,
        payload: error
    }))
}
// export const getItemDetails = (ColorCode) => (dispach) =>{
//     ItemsService.getItemDetails(ColorCode)    
//     .then(response => response.json())
//     .then(data => dispach({
//         type: Type.REQUEST_ITEM_VALUES,
//         payload: data.data
//     }))
//     .catch(error => dispach({
//         type: Type.REQUEST_ITEMS_FAILED,
//         payload: error
//     }))
// }
export function openDialog(item) {
    console.log("item in actions",item);
    return {
        type: Type.OPEN_DAILOG,
        payload: item
    }
}

export function closeDialog() {
    return {
        type: Type.CLOSE_DAILOG
    }
}

