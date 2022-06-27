export const incNumber = (num) => {
    return{
        type: "Increment",
        payload: num
    }
}

export const decNumber = (num) => {
    return {
        type: "Decrement",
        payload: num
    }
}