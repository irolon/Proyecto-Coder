const productos = [
    { id:1, marca: 'Marca A', modelo: 'Modelo X', descripcion: "Reloj clasico con correa de cuero", precio: 150, categoria: 'Relojes Clasicos', stock: 10, img: '../assets/img/img-reloj-1.jpg' },
    { id:2, marca: 'Marca B', modelo: 'Modelo Y', descripcion: "Reloj deportivo resistente al agua", precio: 200, categoria: 'Relojes Clasicos', stock: 5, img: '../assets/img/img-reloj-2.jpg' },
    { id:3, marca: 'Marca C', modelo: 'Modelo Z', descripcion: "Reloj inteligente con monitor de ritmo cardiaco", precio: 300, categoria: 'Relojes Clasicos', stock: 8, img: '../assets/img/img-reloj-3.jpg' },
    { id:4, marca: 'Marca D', modelo: 'Modelo W', descripcion: "Reloj clasico con diseño elegante", precio: 180, categoria: 'Relojes Clasicos', stock: 12, img: '../assets/img/img-reloj-4.jpg' },
    { id:5, marca: 'Marca E', modelo: 'Modelo V', descripcion: "Reloj deportivo con cronometro", precio: 220, categoria: 'Relojes Inteligentes', stock: 7, img: '../assets/img/img-reloj-5.jpg' },
    { id:6, marca: 'Marca F', modelo: 'Modelo U', descripcion: "Reloj inteligente con GPS integrado", precio: 350, categoria: 'Relojes Inteligentes', stock: 4, img: '../assets/img/img-reloj-6.jpg' },
    { id:7, marca: 'Marca G', modelo: 'Modelo T', descripcion: "Reloj clasico con esfera minimalista", precio: 160, categoria: 'Relojes Inteligentes', stock: 9, img: '../assets/img/img-reloj-7.jpg' },
    { id:8, marca: 'Marca H', modelo: 'Modelo S', descripcion: "Reloj deportivo con correa de silicona", precio: 210, categoria: 'Relojes Inteligentes', stock: 6, img: '../assets/img/img-reloj-8.jpg' },
    { id:9, marca: 'Marca I', modelo: 'Modelo R', descripcion: "Reloj inteligente con pantalla táctil", precio: 400, categoria: 'Relojes Deportivos', stock: 3, img: '../assets/img/img-reloj-9.jpg' },
    { id:10, marca: 'Marca J', modelo: 'Modelo Q', descripcion: "Reloj clasico con correa metálica", precio: 190, categoria: 'Relojes Deportivos', stock: 11, img: '../assets/img/img-reloj-10.jpg' },
    { id:11, marca: 'Marca K', modelo: 'Modelo P', descripcion: "Reloj deportivo con resistencia al agua", precio: 230, categoria: 'Relojes Deportivos', stock: 5, img: '../assets/img/img-reloj-11.jpg' },
    { id:12, marca: 'Marca L', modelo: 'Modelo O', descripcion: "Reloj inteligente con monitor de sueño", precio: 320, categoria: 'Relojes Deportivos', stock: 4, img: '../assets/img/img-reloj-12.jpg' },
    { id:13, marca: 'Marca M', modelo: 'Modelo N', descripcion: "Reloj clasico con diseño vintage", precio: 170, categoria: 'Relojes Inteligentes', stock: 10, img: '../assets/img/img-reloj-13.jpg' },
    { id:14, marca: 'Marca N', modelo: 'Modelo M', descripcion: "Reloj deportivo con cronometro avanzado", precio: 240, categoria: 'Relojes Inteligentes', stock: 6, img: '../assets/img/img-reloj-14.jpg' },
    { id:15, marca: 'Marca O', modelo: 'Modelo L', descripcion: "Reloj inteligente con conectividad Bluetooth", precio: 380, categoria: 'Relojes Inteligentes', stock: 2, img: '../assets/img/img-reloj-15.jpg' },
    { id:16, marca: 'Marca P', modelo: 'Modelo K', descripcion: "Reloj clasico con esfera elegante", precio: 200, categoria: 'Relojes Inteligentes', stock: 8, img: '../assets/img/img-reloj-16.jpg' },
    
];

export const getProductos = () => {
    let error = false; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject({ error: 'Error al obtener los productos' });
            }else {
                resolve(productos);
            }
        }, 1000);
    });
};
