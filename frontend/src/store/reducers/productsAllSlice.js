import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    products: []
}

function addIsShownProp(array) {
    return array.map(product => ({...product, isShown: true}))
}

const sortProducts = (products, order) => {
    return products.slice().sort((a, b) => {
        const priceA = a.discont_price || a.price;
        const priceB = b.discont_price || b.price;
        return order === 'high-low' ? priceB - priceA : priceA - priceB;
    });
};

const productsAll = createSlice ({
    name: "allProducts",
    initialState,
    reducers: {
        productsAllList(state, action) {
            return {title: "All products", products: addIsShownProp(action.payload)}
        },
        allSales(state, action) {
            const filteredArray = action.payload.filter((item) => item.discont_price)
            return {title: "Discounted items", products: addIsShownProp(filteredArray)}
        },
        categoryProduct(state, action) {
            return {title: `${action.payload.category.title}`, products: addIsShownProp(action.payload.data)}
        },
        saleProduct(state, action) {
            const slicedArray = action.payload.filter((item) => item.discont_price).slice(0,4)
            return {title: "Sale", products: addIsShownProp(slicedArray)}
        },
        clearData() {
            return initialState
        },
        filterBySale(state, action) {

            if (action.payload) {
                const updatedProducts = state.products.map(element => {
                    if (!element.discont_price) {
                        return { ...element, isShown: false };
                    }
                    return element;
                });

                return {
                    ...state,
                    products: updatedProducts,
                };
            } else {
                const updatedProducts = addIsShownProp(state.products);
                return {
                    ...state,
                    products: updatedProducts,
                };
            }
        },
        filterBySort(state, action) {
            switch (action.payload) {
                case "high-low":
                    return {
                        ...state,
                        products: sortProducts(state.products, 'high-low'),
                    };
                case "low-high":
                    return {
                        ...state,
                        products: sortProducts(state.products, 'low-high'),
                    };
                case "A-Z": 
                    return {
                        ...state,
                        products: state.products.slice().sort((a, b) =>  a.title.localeCompare(b.title)),
                    };
                case "Z-A": 
                    return {
                        ...state,
                        products: state.products.slice().sort((a, b) =>  b.title.localeCompare(a.title)),
                    };
                default:
                    return {
                        ...state,
                        products: addIsShownProp(state.products),
                    };
            }
        },
        filterByInput(state, action) {
            const refreshedArray = addIsShownProp(state.products)
            if (action.payload) {
                const updatedProducts = refreshedArray.map(product => {
                    const productPrice = product.discont_price || product.price;
                    if (productPrice < action.payload.priceFrom || productPrice > action.payload.priceTo) {
                        return { ...product, isShown: false };
                    }
                    return product;
                });
        
                return {
                    ...state,
                    products: updatedProducts,
                };
            }
        },

    }
})

export default productsAll.reducer
export const {productsAllList, allSales, categoryProduct, 
            saleProduct, clearData, filterBySale, filterBySort, 
            filterByInput, refreshList} = productsAll.actions