const defaultState = {
    title: "",
    products: []
}

const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALES = "ALL_SALES"; 
const CATEGORY_PRODUCTS = 'CATEGORY_PRODUCTS';
const SALE_PRODUCT = "SALE_PRODUCT"; 
const CLEAR_DATA = "CLEAR_DATA";


export const productsAllReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {title: "All products", products: [...action.payload]}
        case ALL_SALES:
            const filteredArray = action.payload.filter((item) => item.discont_price)
            return {title: "Discounted items", products: [...filteredArray]}
        case CATEGORY_PRODUCTS:
            return {title: `${action.payload.category.title}`, products: [...action.payload.data]}
        case SALE_PRODUCT:
            const slicedArray = action.payload.filter((item) => item.discont_price).slice(0,4)
            return {title: "Sale", products: [...slicedArray]}
        case CLEAR_DATA:
            return defaultState; // Очищаем данные, вернув начальное состояние
        default:
            return state
    }
}

export const productsAllAction = (payload) => ({type: ALL_PRODUCTS, payload});
export const allSalesAction = (payload) => ({type: ALL_SALES, payload});
export const categoryProductAction = (payload) => ({type: CATEGORY_PRODUCTS, payload});
export const saleProductAction = (payload) => ({type: SALE_PRODUCT, payload});
export const clearDataAction = () => ({type: CLEAR_DATA})