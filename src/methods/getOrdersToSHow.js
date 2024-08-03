import { totalPriceCounter } from '../methods/totalPriceCounter.js'

export const getOrdersToShow = (orders) => {
    const ordersToShow = []
    orders.forEach((order) => {
        const productsCount = order.products.length
        const productsPrice = totalPriceCounter(order.products)
        const orderToShow = {
            id: order.id,
            title: order.title,
            date: order.date,
            productsCount,
            productsPrice
        }
        ordersToShow.push(orderToShow)
    })
    return ordersToShow
}
