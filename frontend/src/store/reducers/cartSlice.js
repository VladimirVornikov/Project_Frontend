import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalSum: 0,
    countItem: 0,
    discountFactor: 1,
};

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            const productExists = state.items.findIndex(product => product.id === action.payload.id);
            if (productExists !== -1) {
                state.items[productExists].quantity += action.payload.quantity;
                if (state.items[productExists].quantity > 100) {
                    state.items[productExists].quantity = 100
                }
            } else {
                state.items.push({ ...action.payload });
            }
        },
        incrCart(state, action) {
            return {
                ...state,
                items: state.items.map(product =>
                    product.id === action.payload
                        ? { ...product, quantity: (product.quantity >= 1 && product.quantity < 100 ? product.quantity + 1 : product.quantity) }
                        : product
                ),
            };
        },
        decrCart(state, action) {
            return {
                ...state,
                items: state.items.map(product =>
                    product.id === action.payload
                        ? { ...product, quantity: (product.quantity > 1 && product.quantity <= 100 ? product.quantity - 1 : product.quantity) }
                        : product
                )
            };
        },
        setCart(state, action) {
            return {
                ...state,
                items: state.items.map(product =>
                    (product.id === action.payload.id
                        ? { ...product, quantity: (action.payload.quantity >= 1 && action.payload.quantity <= 100 ? action.payload.quantity : product.quantity) }
                        : product
                    )
                )
            };
        },
        deleteProduct(state, action) {
            return {
                ...state,
                items: state.items.filter(product => product.id !== action.payload)
            };
        },
        updateTotalSumAndCountItem(state) {
            state.totalSum = state.items.reduce((accumulator, currentItem) =>
            accumulator + currentItem.quantity * (currentItem.discont_price ? currentItem.discont_price : currentItem.price), 0).toFixed(2);
            

            state.countItem = state.items.reduce((accumulator, currentItem) =>
                accumulator + currentItem.quantity, 0);
        },

        getDiscount(state) {
            return {
                ...state,
                discountFactor : 0.95
            }
        },
        sendingGoodsToServer(state) {
            return initialState
        }
    },
});

export default cart.reducer;
export const { addProduct, incrCart, decrCart, setCart, deleteProduct, updateTotalSumAndCountItem, getDiscount, sendingGoodsToServer } = cart.actions;

