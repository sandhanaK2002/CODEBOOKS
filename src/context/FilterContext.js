import {createContext , useContext} from "react"
import {filterReducer} from "../reducers"
import {useReducer} from "react"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children})=>{

    const [state , dispatch] = useReducer(filterReducer , filterInitialState)

    function intialProductList(products){
        dispatch({
            type : "PRODUCT_LIST",   
            payload: {
                products : products
            }
        })
    }

    const value = {
        products : state.productList,
        intialProductList
    }

  return (  
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
  )
}

export const useFilter=()=>{
    return useContext(FilterContext)
}