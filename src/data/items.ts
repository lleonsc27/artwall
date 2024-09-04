export interface ItemData {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
    category: string;
}

export const items: ItemData[] = [
    {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do Produto 1',
        price: 79.90,
        stock: 10,
        imageUrl: require('../assets/images/urban-symphony.webp'),
        category: 'Paisagem'
    },
    {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do Produto 1',
        price: 75.90,
        stock: 10,
        imageUrl: require('../assets/images/blooming-dreams.webp'),
        category: 'Abstrato'
    },
    {
        id: 3,
        name: 'Produto 3',
        description: 'Descrição do Produto 1',
        price: 75.90,
        stock: 50,
        imageUrl: require('../assets/images/oceanic-depths.webp'),
        category: 'Paisagem'
    },
]