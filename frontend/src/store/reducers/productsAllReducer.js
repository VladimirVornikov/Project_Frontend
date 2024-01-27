const defaultState = {
    title: "",
    products: []
}

const ALL_PRODUCTS = "ALL_PRODUCTS";

export const productsAllReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {title: "All products", products: [...action.payload]}
        default:
            return state
    }
}

export const productsAllAction = (payload) => ({type: ALL_PRODUCTS, payload});