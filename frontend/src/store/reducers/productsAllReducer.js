const defaultState = {
    title: "",
    products: []
}

const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALES = "ALL_SALES"; 

export const productsAllReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {title: "All products", products: [...action.payload]}
        case ALL_SALES:
            const filteredArray = action.payload.filter((item) => item.discont_price)
            return {title: "Discounted items", products: [...filteredArray]}
        default:
            return state
    }
}

export const productsAllAction = (payload) => ({type: ALL_PRODUCTS, payload});
export const allSalesAction = (payload) => ({type: ALL_SALES, payload});