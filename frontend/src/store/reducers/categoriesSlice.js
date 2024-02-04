import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice ({
    name: "categories",
    initialState,
    reducers: {
        asyncCategoriesList(state, action) {
            return [...action.payload];
        }
    }
})

export default categoriesSlice.reducer
export const {asyncCategoriesList} = categoriesSlice.actions
