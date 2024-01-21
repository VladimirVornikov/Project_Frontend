import { asyncCategoriesListAction } from "../reducers/categoriesReducer"


export function fetchCategoriesList() {
    return function(dispatch) {
        fetch("http://localhost:3333/categories/all")
            .then(result => result.json())
            .then(data => dispatch(asyncCategoriesListAction(data)))
    }
}