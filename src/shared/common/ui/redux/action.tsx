import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { MasterData, type ProductInfoType } from "../../../data/apps/ecommerce/productsdata";

/* -------------------- Product Slice -------------------- */
const productSlice = createSlice({
    name: "products",
    initialState: {
        data: MasterData as ProductInfoType[],
    },
    reducers: {},
});

/* -------------------- Cart Slice -------------------- */
interface CartState {
    items: ProductInfoType[];
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    } as CartState,
    reducers: {
        addCart: (state, action: PayloadAction<ProductInfoType>) => {
            const exists = state.items.some(
                (product) => product.id === action.payload.id
            );

            if (!exists) {
                state.items.push({ ...action.payload, quantity: 1 });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Oops...",
                    text: "Item is already in Cart",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },

        removeCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        updateCart: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

/* -------------------- Wishlist Slice -------------------- */
interface WishListState {
    items: ProductInfoType[];
}

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        items: [],
    } as WishListState,
    reducers: {
        addToWishList: (state, action: PayloadAction<ProductInfoType>) => {
            const exists = state.items.some(
                (product) => product.id === action.payload.id
            );

            if (!exists) {
                state.items.push(action.payload);
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Oops...",
                    text: "Item is already in WishList",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },

        removeWishList: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (product) => product.id !== action.payload
            );
        },
    },
});

/* -------------------- Buy Now Slice -------------------- */
interface BuyNowState {
    buyNow: ProductInfoType[];
}

const buyNowSlice = createSlice({
    name: "buyNow",
    initialState: {
        buyNow: [],
    } as BuyNowState,
    reducers: {
        addToBuy: (state, action: PayloadAction<ProductInfoType>) => {
            const existingItem = state.buyNow.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.buyNow.push({ ...action.payload, quantity: 1 });
            }
        },

        removeBuy: (state, action: PayloadAction<number>) => {
            state.buyNow = state.buyNow.filter(
                (item) => item.id !== action.payload
            );
        },

        clearBuy: (state) => {
            state.buyNow = [];
        },
    },
});

/* -------------------- Buy Cart Slice -------------------- */
interface BuyCartState {
    buyCart: ProductInfoType[];
}

const buyCartSlice = createSlice({
    name: "buyCart",
    initialState: {
        buyCart: [],
    } as BuyCartState,
    reducers: {
        addToBuyCart: (state, action: PayloadAction<ProductInfoType>) => {
            const existingItem = state.buyCart.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity ?? 1;
            } else {
                state.buyCart.push({
                    ...action.payload,
                    quantity: action.payload.quantity ?? 1,
                });
            }
        },

        removeBuyCart: (state, action: PayloadAction<number>) => {
            state.buyCart = state.buyCart.filter(
                (item) => item.id !== action.payload
            );
        },

        clearBuyCart: (state) => {
            state.buyCart = [];
        },
    },
});

/* -------------------- Exports -------------------- */
// Actions
export const { addCart, removeCart, updateCart, clearCart } =
    cartSlice.actions;
export const { addToWishList, removeWishList } =
    wishListSlice.actions;
export const { addToBuy, removeBuy, clearBuy } =
    buyNowSlice.actions;
export const { addToBuyCart, removeBuyCart, clearBuyCart } =
    buyCartSlice.actions;

// Reducers
export const productReducer = productSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const wishListReducer = wishListSlice.reducer;
export const buyNowReducer = buyNowSlice.reducer;
export const buyCartReducer = buyCartSlice.reducer;
