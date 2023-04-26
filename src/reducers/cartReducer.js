export const cartReducer = (state, action)=>{
    const {type , payload}  = action;

    switch (type){
        case "ADD_TO_cart":
            return 

        case "REMOVE_FROM_CART":
            return 
        
        case "CLEAR_CART":
            return     

        case "UDATE_PRICE":
            return       
            
        default :
            throw new Error ("No case Found!")
    }

}