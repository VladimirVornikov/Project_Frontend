import { allSalesAction, categoryProductAction, productsAllAction, saleProductAction } from "../reducers/productsAllReducer"
import { asyncCategoriesListAction } from "../reducers/categoriesReducer"
import { productAction } from "../reducers/productReducer"
import { ROOT_URL } from "../.."



export function fetchCategoriesList() {
    return function(dispatch) {
        fetch(ROOT_URL + "/categories/all")
            .then(result => result.json())
            .then(data => dispatch(asyncCategoriesListAction(data)))
    }
}

export function fetchCategory(id) {
    return function(dispatch) {
        fetch(ROOT_URL + '/categories/' + id)
            .then(result => result.json())
            .then(data => dispatch(categoryProductAction(data)))
    }
}

export function fetchAllProducts() {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => dispatch(productsAllAction(data)))
    }
}

export function fetchAllSales() {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => dispatch(allSalesAction(data)))
    }
}

export function fetchSale() {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => dispatch(saleProductAction(data)))
    }
}

export function fetchProduct(id) {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/" + id)
            .then(result => result.json())
            .then(data => dispatch(productAction(data)))
    }
}

