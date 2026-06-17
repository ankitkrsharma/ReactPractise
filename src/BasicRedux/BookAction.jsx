export const purchase_book = () => {
    return {
        type: 'BUY_BOOK',
        payload: 10
    }
}

export const add_book = (value) => {
    return {
        type: 'ADD_BOOK',
        payload: Number(value)
    }
}