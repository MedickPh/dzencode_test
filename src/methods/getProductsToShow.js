export const getProductsToShow = (products, orders) => {
    const newData = []
    products.forEach((product) => {
        const newProductFormat = { ...product }
        const orderOfElement = orders.filter((order) => {
            if (order.id === product.order) {
                return order
            }
            return null
        })
        newProductFormat.order = orderOfElement[0]
        newData.push(newProductFormat)
    })

    return newData
}
