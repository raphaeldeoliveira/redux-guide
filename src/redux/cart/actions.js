import CartActionsType from "./action-types"

export const addProductToCart = (payload) => ({
    type: CartActionsType.ADD_PRODUCT,
    payload,
})