import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    products: []
}

const productsAll = createSlice ({
    name: "allProducts",
    initialState,
    reducers: {
        productsAllList(state, action) {
            return {title: "All products", products: [...action.payload]}
        },
        allSales(state, action) {
            const filteredArray = action.payload.filter((item) => item.discont_price)
            return {title: "Discounted items", products: [...filteredArray]}
        },
        categoryProduct(state, action) {
            return {title: `${action.payload.category.title}`, products: [...action.payload.data]}
        },
        saleProduct(state, action) {
            const slicedArray = action.payload.filter((item) => item.discont_price).slice(0,4)
            return {title: "Sale", products: [...slicedArray]}
        },
        clearData() {
            return initialState
        }
    }
})

export default productsAll.reducer
export const {productsAllList, allSales, categoryProduct, saleProduct, clearData} = productsAll.actions