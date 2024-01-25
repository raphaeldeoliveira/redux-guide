import CartActionsType from "./action-types"

export const addProductToCart = (payload) => ({
    type: CartActionsType.ADD_PRODUCT,
    payload,
})

export const removeProduct = (payload) => ({
    type: CartActionsType.REMOVE_PRODUCT,
    payload,
})

export const incrementProduct = (payload) => ({
    type: CartActionsType.INCREMENT_PRODUCT,
    payload,
})

export const decrementProduct = (payload) => ({
    type: CartActionsType.DECREMENT_PRODUCT,
    payload,
})