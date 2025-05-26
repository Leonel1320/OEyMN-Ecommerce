export interface Product {
    id: string;
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
    price: string;
    condition: 'new' | 'reacondicionado';
    oldPrice?: string;
    features: string[];
    relatedProductIds?: string[];
}



export const allHardwareProducts: Product[] = [ // Agregué el tipo explícito aquí
    {
        id: '1',
        imageUrl: '/img/products/producto1.webp',
        altText: 'Procesador Intel Core i7',
        name: 'Procesador Intel Core i7',
        description: 'Potente procesador de 8 núcleos para un rendimiento excepcional.',
        price: '$450.00',
        condition: 'new',
        oldPrice: '$550.00',
        features: [
            '8 Núcleos, 16 Hilos',
            'Frecuencia Base: 3.8 GHz',
            'Frecuencia Turbo Max: 5.0 GHz',
            'Caché Intel Smart Cache: 16 MB',
            'Gráficos integrados: Intel Iris Xe',
            'Compatible con Socket LGA 1200',
        ],
        relatedProductIds: ['3', '5', '7', '11'], // 4 IDs
    },
    {
        id: '2',
        imageUrl: '/img/products/producto2.webp',
        altText: 'Tarjeta Gráfica NVIDIA RTX 3060',
        name: 'Tarjeta Gráfica NVIDIA RTX 3060',
        description: 'Rendimiento gráfico de alta gama para juegos y creación de contenido.',
        price: '$400.00',
        condition: 'reacondicionado',
        features: [
            '12GB GDDR6',
            'Ray Tracing en tiempo real',
            'Boost Clock: 1777 MHz',
            'PCI Express 4.0',
            'HDMI 2.1 y DisplayPort 1.4a',
        ],
        relatedProductIds: ['1', '3', '8', '9'], // 4 IDs
    },
    {
        id: '3',
        imageUrl: '/img/products/producto3.webp',
        altText: 'Memoria RAM Corsair Vengeance',
        name: 'Memoria RAM Corsair Vengeance 16GB',
        description: 'Módulo de memoria DDR4 de alta velocidad para gaming y multitarea.',
        price: '$80.00',
        condition: 'new',
        oldPrice: '$100.00',
        features: [
            '16GB (2x8GB) DDR4',
            'Velocidad: 3200MHz',
            'Latencia CL16',
            'Voltaje: 1.35V',
            'Compatible con Intel y AMD',
        ],
        relatedProductIds: ['1', '2', '13', '7'], // 4 IDs
    },
    {
        id: '4',
        imageUrl: '/img/products/producto4.webp',
        altText: 'Procesador Intel Core i5',
        name: 'Procesador Intel Core i5',
        description: 'Potente procesador de 4 núcleos para un rendimiento excepcional.',
        price: '$350.00',
        condition: 'reacondicionado',
        features: [
            '4 Núcleos, 8 Hilos',
            'Frecuencia Base: 2.9 GHz',
            'Frecuencia Turbo Max: 4.1 GHz',
            'Caché Intel Smart Cache: 8 MB',
            'Compatible con Socket LGA 1200',
        ],
        relatedProductIds: ['3', '13', '27', '11'], // 4 IDs
    },
    {
        id: '5',
        imageUrl: '/img/products/producto5.webp',
        altText: 'Tarjeta Gráfica NVIDIA GTX 1660 Ti',
        name: 'Tarjeta Gráfica NVIDIA GTX 1660 Ti',
        description: 'Excelente rendimiento para gaming en 1080p y tareas multimedia.',
        price: '$250.00',
        condition: 'new',
        oldPrice: '$300.00',
        features: [
            '6GB GDDR6',
            'Boost Clock: 1770 MHz',
            'PCI Express 3.0',
            'HDMI 2.0b y DisplayPort 1.4a',
            'DirectX 12',
        ],
        relatedProductIds: ['1', '3', '7', '12'], // 4 IDs
    },
    {
        id: '6',
        imageUrl: '/img/products/producto6.webp',
        altText: 'Portátil Dell XPS 13 (Reacondicionado)',
        name: 'Portátil Dell XPS 13 (Reacondicionado)',
        description: 'Potente y ligero portátil reacondicionado, ideal para trabajo o estudio.',
        price: '$700.00',
        condition: 'reacondicionado',
        features: [
            'Pantalla 13.3" Full HD',
            'Procesador Intel Core i7',
            '16GB RAM DDR4',
            'SSD 512GB',
            'Batería de larga duración',
        ],
        relatedProductIds: ['10', '14', '25', '31'], // 4 IDs
    },
    {
        id: '7',
        imageUrl: '/img/products/producto7.webp',
        altText: 'Procesador AMD Ryzen 5',
        name: 'Procesador AMD Ryzen 5',
        description: 'Procesador de seis núcleos ideal para gaming y productividad.',
        price: '$220.00',
        condition: 'new',
        features: [
            '6 Núcleos, 12 Hilos',
            'Frecuencia Base: 3.6 GHz',
            'Frecuencia Turbo Max: 4.2 GHz',
            'Caché L3: 32 MB',
            'Compatible con Socket AM4',
        ],
        relatedProductIds: ['3', '8', '13', '1'], // 4 IDs
    },
    {
        id: '8',
        imageUrl: '/img/products/producto8.webp',
        altText: 'Tarjeta Gráfica AMD Radeon RX 6600',
        name: 'Tarjeta Gráfica AMD Radeon RX 6600',
        description: 'Excelente rendimiento para juegos en 1080p.',
        price: '$320.00',
        condition: 'new',
        features: [
            '8GB GDDR6',
            'Boost Clock: 2491 MHz',
            'PCI Express 4.0',
            'HDMI 2.1 y DisplayPort 1.4',
            'DirectX 12 Ultimate',
        ],
        relatedProductIds: ['7', '3', '32', '2'], // 4 IDs
    },
    {
        id: '9',
        imageUrl: '/img/products/producto9.webp',
        altText: 'Memoria RAM Kingston Fury 16GB',
        name: 'Memoria RAM Kingston Fury 16GB',
        description: 'Memoria DDR4 de alto rendimiento para equipos exigentes.',
        price: '$75.00',
        condition: 'reacondicionado',
        oldPrice: '$90.00',
        features: [
            '16GB DDR4',
            'Velocidad: 3200MHz',
            'Latencia CL16',
            'Voltaje: 1.35V',
            'Diseño de bajo perfil',
        ],
        relatedProductIds: ['1', '2', '13', '26'], // 4 IDs
    },
    {
        id: '10',
        imageUrl: '/img/products/producto10.webp',
        altText: 'Disco SSD Samsung 1TB (Reacondicionado)',
        name: 'Disco SSD Samsung 1TB (Reacondicionado)',
        description: 'Almacenamiento rápido y confiable, reacondicionado y garantizado.',
        price: '$90.00',
        condition: 'new', // Mantengo 'new' como lo tenías, aunque la descripción diga "reacondicionado"
        features: [
            'Capacidad: 1TB',
            'Interfaz: SATA III',
            'Velocidad de lectura: 550 MB/s',
            'Velocidad de escritura: 520 MB/s',
            'Tecnología V-NAND',
        ],
        relatedProductIds: ['6', '25', '31', '17'], // 4 IDs
    },
    {
        id: '11',
        imageUrl: '/img/products/producto11.webp',
        altText: 'Placa Base ASUS Prime (Reacondicionada)',
        name: 'Placa Base ASUS Prime (Reacondicionada)',
        description: 'Placa base reacondicionada compatible con procesadores Intel.',
        price: '$110.00',
        condition: 'reacondicionado',
        features: [
            'Socket LGA 1200',
            'Soporte DDR4 hasta 128GB',
            'PCIe 4.0',
            'M.2 NVMe',
            'USB 3.2 Gen 2',
        ],
        relatedProductIds: ['1', '3', '4', '19'], // 4 IDs
    },
    {
        id: '12',
        imageUrl: '/img/products/producto12.webp',
        altText: 'Fuente de Poder Corsair 650W (Reacondicionada)',
        name: 'Fuente de Poder Corsair 650W (Reacondicionada)',
        description: 'Fuente de poder eficiente y segura, reacondicionada.',
        price: '$60.00',
        condition: 'reacondicionado',
        features: [
            'Potencia: 650W',
            'Certificación 80 PLUS Bronze',
            'Ventilador silencioso',
            'Cableado semimodular',
            'Protecciones eléctricas integradas',
        ],
        relatedProductIds: ['5', '28', '16', '23'], // 4 IDs
    },
    {
        id: '13',
        imageUrl: '/img/products/producto13.webp',
        altText: 'Placa Base MSI B450M',
        name: 'Placa Base MSI B450M',
        description: 'Placa base micro ATX para procesadores AMD Ryzen, ideal para equipos de gama media.',
        price: '$85.00',
        condition: 'new',
        features: [
            'Socket AM4',
            'Soporte DDR4 hasta 64GB',
            'PCIe 3.0',
            'M.2 NVMe',
            'Audio HD integrado',
        ],
        relatedProductIds: ['7', '3', '26', '30'], // 4 IDs
    },
    {
        id: '14',
        imageUrl: '/img/products/producto14.webp',
        altText: 'Memoria RAM Crucial 8GB',
        name: 'Memoria RAM Crucial 8GB',
        description: 'Módulo DDR4 de 8GB, perfecto para tareas básicas y equipos de oficina.',
        price: '$35.00',
        condition: 'new',
        features: [
            '8GB DDR4',
            'Velocidad: 2666MHz',
            'Latencia CL19',
            'Voltaje: 1.2V',
            'Compatible con Intel y AMD',
        ],
        relatedProductIds: ['6', '20', '24', '19'], // 4 IDs
    },
    {
        id: '15',
        imageUrl: '/img/products/producto15.webp',
        altText: 'Tarjeta Gráfica GTX 1050 Ti',
        name: 'Tarjeta Gráfica GTX 1050 Ti',
        description: 'Tarjeta gráfica de gama baja, ideal para juegos ligeros y multimedia.',
        price: '$120.00',
        condition: 'reacondicionado',
        features: [
            '4GB GDDR5',
            'Boost Clock: 1392 MHz',
            'PCI Express 3.0',
            'HDMI 2.0b y DisplayPort 1.4',
            'DirectX 12',
        ],
        relatedProductIds: ['14', '20', '21', '2'], // 4 IDs
    },
    {
        id: '16',
        imageUrl: '/img/products/producto16.webp',
        altText: 'Fuente de Poder EVGA 500W',
        name: 'Fuente de Poder EVGA 500W',
        description: 'Fuente de poder económica y confiable para PCs de entrada.',
        price: '$40.00',
        condition: 'new',
        features: [
            'Potencia: 500W',
            'Certificación 80 PLUS White',
            'Ventilador silencioso',
            'Protecciones eléctricas',
            'Cableado fijo',
        ],
        relatedProductIds: ['12', '23', '28', '18'], // 4 IDs
    },
    {
        id: '17',
        imageUrl: '/img/products/producto17.webp',
        altText: 'Disco Duro Seagate 1TB',
        name: 'Disco Duro Seagate 1TB',
        description: 'Almacenamiento mecánico de 1TB, ideal para guardar archivos y documentos.',
        price: '$38.00',
        condition: 'reacondicionado',
        features: [
            'Capacidad: 1TB',
            'Interfaz: SATA III',
            'Velocidad: 7200 RPM',
            'Caché: 64MB',
            'Formato: 3.5"',
        ],
        relatedProductIds: ['10', '22', '31', '25'], // 4 IDs
    },
    {
        id: '18',
        imageUrl: '/img/products/producto18.webp',
        altText: 'Gabinete Aerocool Bolt Mini',
        name: 'Gabinete Aerocool Bolt Mini',
        description: 'Gabinete compacto y económico para equipos de gama baja o media.',
        price: '$32.00',
        condition: 'new',
        features: [
            'Formato: Micro ATX',
            'Panel lateral acrílico',
            'Soporte para hasta 3 ventiladores',
            'Diseño compacto',
            'Frontal con iluminación LED',
        ],
        relatedProductIds: ['16', '24', '29', '12'], // 4 IDs
    },
    {
        id: '19',
        imageUrl: '/img/products/producto19.webp',
        altText: 'Procesador Intel Pentium Gold G6400',
        name: 'Procesador Intel Pentium Gold G6400',
        description: 'Procesador de 2 núcleos, ideal para tareas básicas y oficina.',
        price: '$55.00',
        condition: 'new',
        features: [
            '2 Núcleos, 4 Hilos',
            'Frecuencia Base: 4.0 GHz',
            'Caché Intel Smart Cache: 4 MB',
            'Gráficos integrados UHD 610',
            'Compatible con Socket LGA 1200',
        ],
        relatedProductIds: ['14', '20', '27', '11'], // 4 IDs
    },
    {
        id: '20',
        imageUrl: '/img/products/producto20.webp',
        altText: 'Memoria RAM Patriot Signature 4GB',
        name: 'Memoria RAM Patriot Signature 4GB',
        description: 'Módulo DDR4 de 4GB, perfecto para PCs de bajo presupuesto.',
        price: '$18.00',
        condition: 'new',
        features: [
            '4GB DDR4',
            'Velocidad: 2400MHz',
            'Latencia CL17',
            'Voltaje: 1.2V',
            'Compatible con Intel y AMD',
        ],
        relatedProductIds: ['14', '19', '15', '21'], // 4 IDs
    },
    {
        id: '21',
        imageUrl: '/img/products/producto21.webp',
        altText: 'Tarjeta Gráfica GT 710 2GB',
        name: 'Tarjeta Gráfica GT 710 2GB',
        description: 'Tarjeta gráfica básica para tareas multimedia y ofimática.',
        price: '$30.00',
        condition: 'reacondicionado',
        features: [
            '2GB DDR3',
            'PCI Express 2.0',
            'Salidas VGA, DVI, HDMI',
            'Bajo consumo energético',
            'Soporte DirectX 12',
        ],
        relatedProductIds: ['15', '20', '24', '2'], // 4 IDs
    },
    {
        id: '22',
        imageUrl: '/img/products/producto22.webp',
        altText: 'Disco Duro Western Digital 500GB',
        name: 'Disco Duro Western Digital 500GB',
        description: 'Disco duro mecánico de 500GB, económico y confiable.',
        price: '$22.00',
        condition: 'reacondicionado',
        features: [
            'Capacidad: 500GB',
            'Interfaz: SATA III',
            'Velocidad: 7200 RPM',
            'Caché: 32MB',
            'Formato: 3.5"',
        ],
        relatedProductIds: ['17', '10', '25', '31'], // 4 IDs
    },
    {
        id: '23',
        imageUrl: '/img/products/producto23.webp',
        altText: 'Fuente de Poder Noga 450W',
        name: 'Fuente de Poder Noga 450W',
        description: 'Fuente de poder básica para equipos de oficina o bajo consumo.',
        price: '$19.00',
        condition: 'new',
        features: [
            'Potencia: 450W',
            'Ventilador silencioso',
            'Protecciones eléctricas',
            'Cableado fijo',
            'Eficiencia estándar',
        ],
        relatedProductIds: ['16', '12', '28', '18'], // 4 IDs
    },
    {
        id: '24',
        imageUrl: '/img/products/producto24.webp',
        altText: 'Gabinete Sentey Slim',
        name: 'Gabinete Sentey Slim',
        description: 'Gabinete compacto y económico, ideal para PCs de oficina.',
        price: '$25.00',
        condition: 'new',
        features: [
            'Formato: Slim',
            'Soporte Micro ATX',
            'Incluye fuente de poder básica',
            'Diseño compacto',
            'Fácil acceso frontal',
        ],
        relatedProductIds: ['14', '18', '21', '29'], // 4 IDs
    },
    {
        id: '25',
        imageUrl: '/img/products/producto25.webp',
        altText: 'Disco SSD Kingston A400 240GB',
        name: 'Disco SSD Kingston A400 240GB',
        description: 'SSD rápido y confiable para mejorar el rendimiento de tu PC.',
        price: '$28.00',
        condition: 'new',
        features: [
            'Capacidad: 240GB',
            'Interfaz: SATA III',
            'Velocidad de lectura: 500 MB/s',
            'Velocidad de escritura: 350 MB/s',
            'Formato: 2.5"',
        ],
        relatedProductIds: ['10', '22', '31', '6'], // 4 IDs
    },
    {
        id: '26',
        imageUrl: '/img/products/producto26.webp',
        altText: 'Memoria RAM G.Skill Ripjaws 8GB',
        name: 'Memoria RAM G.Skill Ripjaws 8GB',
        description: 'Memoria DDR4 de alto rendimiento para gaming y edición.',
        price: '$36.00',
        condition: 'reacondicionado',
        features: [
            '8GB DDR4',
            'Velocidad: 3200MHz',
            'Latencia CL16',
            'Voltaje: 1.35V',
            'Diseño de disipador térmico',
        ],
        relatedProductIds: ['13', '3', '32', '9'], // 4 IDs
    },
    {
        id: '27',
        imageUrl: '/img/products/producto27.webp',
        altText: 'Tarjeta Madre ASRock H310CM',
        name: 'Tarjeta Madre ASRock H310CM',
        description: 'Placa base compacta compatible con procesadores Intel de 8va y 9na generación.',
        price: '$52.00',
        condition: 'new',
        features: [
            'Socket LGA 1151',
            'Soporte DDR4 hasta 32GB',
            'PCIe 2.0',
            'M.2 NVMe',
            'Audio HD integrado',
        ],
        relatedProductIds: ['4', '19', '20', '11'], // 4 IDs
    },
    {
        id: '28',
        imageUrl: '/img/products/producto28.webp',
        altText: 'Fuente de Poder Thermaltake 600W',
        name: 'Fuente de Poder Thermaltake 600W',
        description: 'Fuente de poder eficiente y silenciosa para equipos de alto rendimiento.',
        price: '$65.00',
        condition: 'reacondicionado',
        features: [
            'Potencia: 600W',
            'Certificación 80 PLUS White',
            'Ventilador silencioso',
            'Cableado semimodular',
            'Protecciones eléctricas',
        ],
        relatedProductIds: ['12', '16', '23', '5'], // 4 IDs
    },
    {
        id: '29',
        imageUrl: '/img/products/producto29.webp',
        altText: 'Gabinete Cooler Master MasterBox Q300L',
        name: 'Gabinete Cooler Master MasterBox Q300L',
        description: 'Gabinete versátil y moderno con excelente flujo de aire.',
        price: '$48.00',
        condition: 'new',
        features: [
            'Formato: Micro ATX',
            'Panel lateral acrílico',
            'Soporte para hasta 6 ventiladores',
            'Filtros de polvo magnéticos',
            'Diseño modular',
        ],
        relatedProductIds: ['18', '24', '32', '16'], // 4 IDs
    },
    {
        id: '30',
        imageUrl: '/img/products/producto30.webp',
        altText: 'Procesador AMD Ryzen 3 3200G',
        name: 'Procesador AMD Ryzen 3 3200G',
        description: 'Procesador con gráficos integrados, ideal para PCs de oficina y hogar.',
        price: '$95.00',
        condition: 'new',
        oldPrice: '$110.00',
        features: [
            '4 Núcleos, 4 Hilos',
            'Frecuencia Base: 3.6 GHz',
            'Frecuencia Turbo Max: 4.0 GHz',
            'Gráficos integrados Radeon Vega 8',
            'Compatible con Socket AM4',
        ],
        relatedProductIds: ['13', '26', '32', '7'], // 4 IDs
    },
    {
        id: '31',
        imageUrl: '/img/products/producto31.webp',
        altText: 'Disco Duro Toshiba 2TB',
        name: 'Disco Duro Toshiba 2TB',
        description: 'Gran capacidad de almacenamiento para archivos y copias de seguridad.',
        price: '$62.00',
        condition: 'reacondicionado',
        features: [
            'Capacidad: 2TB',
            'Interfaz: SATA III',
            'Velocidad: 7200 RPM',
            'Caché: 64MB',
            'Formato: 3.5"',
        ],
        relatedProductIds: ['10', '17', '25', '6'], // 4 IDs
    },
    {
        id: '32',
        imageUrl: '/img/products/producto32.webp',
        altText: 'Memoria RAM HyperX Fury 32GB',
        name: 'Memoria RAM HyperX Fury 32GB',
        description: 'Kit de memoria DDR4 de 32GB para estaciones de trabajo y gaming extremo.',
        price: '$140.00',
        condition: 'new',
        features: [
            '32GB (2x16GB) DDR4',
            'Velocidad: 3200MHz',
            'Latencia CL16',
            'Voltaje: 1.35V',
            'Compatible con Intel y AMD',
        ],
        relatedProductIds: ['8', '26', '30', '3'], // 4 IDs
    },
];