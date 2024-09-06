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
        name: 'Eternal Spring',
        description: 'Uma explosão de cores vibrantes, com flores em plena floração, simbolizando a eterna renovação da vida e a alegria da primavera. Perfeito para espaços que precisam de um toque de cor e vivacidade.',
        price: 89.90,
        stock: 15,
        imageUrl: require('../assets/images/eternal-spring.webp'),
        category: 'Abstrato'
    },
    {
        id: 2,
        name: 'Silent Storm',
        description: 'Nuvens tempestuosas e ondas revoltas, capturando a força e a beleza de uma tempestade em alto-mar. Excelente para adicionar um elemento de drama e intensidade a qualquer ambiente.',
        price: 99.90,
        stock: 12,
        imageUrl: require('../assets/images/silent-storm.webp'),
        category: 'Paisagem'
    },
    {
        id: 3,
        name: 'Whispering Woods',
        description: 'Um retrato sereno de uma floresta ao amanhecer, onde a névoa dança entre as árvores. Perfeito para trazer um toque de natureza e mistério ao ambiente.',
        price: 85.90,
        stock: 20,
        imageUrl: require('../assets/images/whispering-woods.webp'),
        category: 'Paisagem'
    },
    {
        id: 4,
        name: 'Urban Symphony',
        description: 'Uma representação vibrante e abstrata de uma cidade em movimento, com linhas e formas que evocam a energia e a dinâmica da vida urbana. Excelente para ambientes modernos e cheios de vida.',
        price: 79.90,
        stock: 10,
        imageUrl: require('../assets/images/urban-symphony.webp'),
        category: 'Abstrato'
    },
    {
        id: 5,
        name: 'Golden Serenity',
        description: 'Um pôr-do-sol dourado refletido em águas calmas, transmitindo paz e relaxamento. Ideal para criar um ponto de serenidade em qualquer espaço.',
        price: 90.90,
        stock: 8,
        imageUrl: require('../assets/images/golden-serenity.webp'),
        category: 'Paisagem'
    },
    {
        id: 6,
        name: 'Mystic Mountains',
        description: 'Montanhas majestosas envoltas em nuvens, capturando a grandiosidade e o mistério da natureza selvagem. Perfeito para aqueles que amam a aventura e a exploração.',
        price: 95.90,
        stock: 7,
        imageUrl: require('../assets/images/mystic-mountains.webp'),
        category: 'Paisagem'
    },
    {
        id: 7,
        name: 'Blooming Dreams',
        description: 'Um quadro delicado de flores desabrochando em um campo aberto, simbolizando novos começos e crescimento. Ideal para adicionar um toque de cor e vida a qualquer ambiente.',
        price: 85.90,
        stock: 10,
        imageUrl: require('../assets/images/blooming-dreams.webp'),
        category: 'Abstrato'
    },
    {
        id: 8,
        name: 'Celestial Visions',
        description: 'Uma obra abstrata inspirada nas estrelas e nas galáxias, com tons de azul e prata que evocam a imensidão do universo. Perfeito para aqueles que buscam inspiração e contemplação.',
        price: 92.90,
        stock: 9,
        imageUrl: require('../assets/images/celestial-visions.webp'),
        category: 'Abstrato'
    },
    {
        id: 9,
        name: 'Abstract Reflections',
        description: 'Um jogo de formas e cores que cria uma composição abstrata, deixando a interpretação livre para o observador. Ideal para espaços que valorizam a arte contemporânea.',
        price: 88.90,
        stock: 11,
        imageUrl: require('../assets/images/abstract-reflections.webp'),
        category: 'Abstrato'
    },
    {
        id: 10,
        name: 'Vintage Vibes',
        description: 'Uma peça que evoca o charme do passado, com cores suaves e detalhes retrô, trazendo um toque nostálgico para qualquer ambiente.',
        price: 79.90,
        stock: 10,
        imageUrl: require('../assets/images/vintage-vibes.webp'),
        category: 'Abstrato'
    },
    {
        id: 11,
        name: 'Oceanic Depths',
        description: 'Um mergulho nas profundezas do oceano, com tons de azul e verde que capturam a serenidade e o mistério do mundo subaquático. Perfeito para criar uma atmosfera relaxante e envolvente.',
        price: 75.90,
        stock: 50,
        imageUrl: require('../assets/images/oceanic-depths.webp'),
        category: 'Paisagem'
    }
]
