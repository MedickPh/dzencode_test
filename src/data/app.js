//Немного добавил продуктов, и изменил метод получения продуктов в заказе что бы было понятно как выводить
export const orders = [
    {
        id: 1,
        title: 'Order 1',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products.filter((product) => product.order === this.id)
        }
    },
    {
        id: 2,
        title: 'Order 2',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products.filter((product) => product.order === this.id)
        }
    },
    {
        id: 3,
        title: 'Order 3',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products.filter((product) => product.order === this.id)
        }
    }
]

export const products = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: '/monitor.jpg',
        title: 'Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 2,
        serialNumber: 12345,
        isNew: 1,
        photo: '/monitor.jpg',
        title: 'Product 2',
        type: 'Monitors old',
        specification: 'Specification 2',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 3,
        serialNumber: 123456,
        isNew: 1,
        photo: '/monitor.jpg',
        title: 'Product 3',
        type: 'Monitors',
        specification: 'Specification 3',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 4,
        serialNumber: 1234567,
        isNew: 1,
        photo: '/monitor.jpg',
        title: 'Product 4',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 5,
        serialNumber: 12345678,
        isNew: 1,
        photo: '/monitor.jpg',
        title: 'Product 5',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 3,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 6,
        serialNumber: 123456789,
        isNew: 1,
        photo: '/monitor.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 3,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 7,
        serialNumber: 12346,
        isNew: 0,
        photo: '/monitor.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2018-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    }
]
