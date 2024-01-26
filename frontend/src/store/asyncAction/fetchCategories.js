import { ROOT_URL } from "../.."
import { asyncCategoriesListAction } from "../reducers/categoriesReducer"
import { categoryProductAction } from "../reducers/categoryByIdReducer"



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