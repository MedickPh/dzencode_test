export const totalPriceCounter = (arr) => {
    const totalPrice = {}
    arr.forEach((product) => {
        product.price.forEach((priceObj) => {
            const currency = priceObj.symbol
            const price = priceObj.value
            totalPrice[currency] ? (totalPrice[currency] += price) : (totalPrice[currency] = price)
        })
    })
    return totalPrice
}
