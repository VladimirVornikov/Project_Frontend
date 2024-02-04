import { asyncCategoriesListAction } from "../reducers/categoriesReducer"
import { ROOT_URL } from "../.."
import { allSales, categoryProduct, productsAllList, saleProduct } from "../reducers/productsAllSlice"
import { product } from "../reducers/productSlice"



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
            .then(data => dispatch(categoryProduct(data)))
    }
}

export function fetchAllProducts() {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => dispatch(productsAllList(data)))
    }
}

export function fetchAllSales() {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => dispatch(allSales(data)))
    }
}

export function fetchSale() {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => dispatch(saleProduct(data)))
    }
}

export function fetchProduct(id) {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/" + id)
            .then(result => result.json())
            .then(data => dispatch(product(data)))
    }
}

