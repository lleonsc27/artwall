export interface ItemData {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
}

export const items: ItemData[] = [
    {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do Produto 1',
        price: 79.90,
        stock: 10,
        imageUrl: require('../assets/images/urban-symphony.webp'),
    },
    {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do Produto 2',
        price: 89.90,
        stock: 15,
        imageUrl: require('../assets/images/abstract-reflections.webp'),
    }
]