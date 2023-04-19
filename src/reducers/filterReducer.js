export const filterReducer = (state , action) => {

const {type , payload} = action;


    switch(type){
        
        case "PRODUCT_LIST" : 
        return 

        case "SORT_BY":
           return 
           
        case "RATINGS":
            return 
            
        case "BEST_SELLER_ONLY":
            return 

        case "ONLY IN STOCK" :
            return

        case "CLEAR FILTER":
            return

        default :
            throw new Error("No case Found")                
    }



}
