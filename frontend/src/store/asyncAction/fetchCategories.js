import { ROOT_URL } from "../.."
import { asyncCategoriesList } from "../reducers/categoriesSlice"
import { allSales, categoryProduct, productsAllList, saleProduct } from "../reducers/productsAllSlice"
import { product } from "../reducers/productSlice"

export function fetchCategoriesList() {
    return function(dispatch) {
        fetch(ROOT_URL + "/categories/all")
            .then(result => result.json())
            .then(data => dispatch(asyncCategoriesList(data)))
    }
}

export function fetchCategory(id) {
    return function(dispatch) {
        fetch(ROOT_URL + '/categories/' + id)
            .then(result => result.json())
            .then(data => dispatch(categoryProduct(data)))
    }
}

export function fetchProduct(id) {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/" + id)
            .then(result => result.json())
            .then(data => dispatch(product(data)))
    }
}
export function fetchData(type) {
    return function(dispatch) {
        fetch(ROOT_URL + "/products/all")
            .then(result => result.json())
            .then(data => {
                switch (type) {
                    case "productsAllList":
                        return dispatch(productsAllList(data))
                    case "allSales":
                        return dispatch(allSales(data))
                    case "saleProduct":
                        return dispatch(saleProduct(data))
                }
            })
        
    }
}
