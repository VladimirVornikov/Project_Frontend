const defaultState = {
    title: "",
    products: []
}

const CATEGORY_PRODUCTS = 'CATEGORY_PRODUCTS'

export const categoryProduct = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case CATEGORY_PRODUCTS:
            return {title: `${action.payload.category.title}`, products: [...action.payload.data]}
        default:
            return state
    }
}

export const categoryProductAction = (payload) => ({type: CATEGORY_PRODUCTS, payload})