const productos = [
    { id:1, marca: 'Marca A', modelo: 'Modelo X', descripcion: "Reloj clásico digital con correa metálica y diseño retro. Perfecto para quienes buscan funcionalidad y estilo en el día a día.", precio: 150, categoria: 'Relojes Clasicos', stock: 10, img: '../assets/img/img-reloj-1.jpg' },
    { id:2, marca: 'Marca B', modelo: 'Modelo Y', descripcion: "Reloj clasico elegante con acabado dorado, resistente al agua y pensado para acompañarte en toda ocasión con un toque de lujo.", precio: 200, categoria: 'Relojes Clasicos', stock: 5, img: '../assets/img/img-reloj-2.jpg' },
    { id:3, marca: 'Marca C', modelo: 'Modelo Z', descripcion: "Reloj clasico moderno con correa de cuero, monitoreo de ritmo cardíaco y diseño minimalista. Ideal para un estilo de vida activo.", precio: 300, categoria: 'Relojes Clasicos', stock: 8, img: '../assets/img/img-reloj-3.jpg' },
    { id:4, marca: 'Marca D', modelo: 'Modelo W', descripcion: "Reloj clasico con caja bicolor y diseño sofisticado. Combina elegancia y precisión en un accesorio atemporal.", precio: 180, categoria: 'Relojes Clasicos', stock: 12, img: '../assets/img/img-reloj-4.jpg' },
    { id:5, marca: 'Marca E', modelo: 'Modelo V', descripcion: "Reloj inteligente con cronómetro y diseño moderno. Ideal para quienes disfrutan de la actividad física con estilo y precisión.", precio: 220, categoria: 'Relojes Inteligentes', stock: 7, img: '../assets/img/img-reloj-5.jpg' },
    { id:6, marca: 'Marca F', modelo: 'Modelo U', descripcion: "Reloj inteligente con GPS integrado y pantalla táctil. Perfecto para acompañarte en tus entrenamientos y monitorear tu rendimiento.", precio: 350, categoria: 'Relojes Inteligentes', stock: 4, img: '../assets/img/img-reloj-6.jpg' },
    { id:7, marca: 'Marca G', modelo: 'Modelo T', descripcion: "Reloj inteligente con esfera minimalista y correa azul. Una opción elegante y versátil para cualquier ocasión.", precio: 160, categoria: 'Relojes Inteligentes', stock: 9, img: '../assets/img/img-reloj-7.jpg' },
    { id:8, marca: 'Marca H', modelo: 'Modelo S', descripcion: "Reloj inteligente con correa de silicona y pantalla colorida. Resistente y cómodo, ideal para el día a día.", precio: 210, categoria: 'Relojes Inteligentes', stock: 6, img: '../assets/img/img-reloj-8.jpg' },
    { id:9, marca: 'Marca I', modelo: 'Modelo R', descripcion: "Reloj deportivo con diseño juvenil en tonos verdes. Ideal para quienes buscan estilo y tecnología en un solo accesorio.", precio: 400, categoria: 'Relojes Deportivos', stock: 3, img: '../assets/img/img-reloj-9.jpg' },
    { id:10, marca: 'Marca J', modelo: 'Modelo Q', descripcion: "Reloj deportivo con correa de tela amarilla y pantalla retroiluminada. Perfecto para uso diario con un toque deportivo y moderno.", precio: 190, categoria: 'Relojes Deportivos', stock: 11, img: '../assets/img/img-reloj-10.jpg' },
    { id:11, marca: 'Marca K', modelo: 'Modelo P', descripcion: "Reloj deportivo robusto y resistente al agua, con detalles en azul que realzan su diseño. Hecho para acompañarte en tus entrenamientos y aventuras.", precio: 230, categoria: 'Relojes Deportivos', stock: 5, img: '../assets/img/img-reloj-11.jpg' },
    { id:12, marca: 'Marca L', modelo: 'Modelo O', descripcion: "Reloj deportivo con monitor de sueño y correa en color azul celeste. Combina funcionalidad, tecnología y un estilo vanguardista", precio: 320, categoria: 'Relojes Deportivos', stock: 4, img: '../assets/img/img-reloj-12.jpg' },
    { id:13, marca: 'Marca M', modelo: 'Modelo N', descripcion: "Reloj inteligente con diseño vintage y cuerpo metálico. Combina la tradición del estilo retro con la precisión moderna.", precio: 170, categoria: 'Relojes Inteligentes', stock: 10, img: '../assets/img/img-reloj-13.jpg' },
    { id:14, marca: 'Marca N', modelo: 'Modelo M', descripcion: "Reloj inteligente avanzado con cronómetro de alta precisión. Ideal para deportistas que buscan rendimiento y durabilidad.", precio: 240, categoria: 'Relojes Inteligentes', stock: 6, img: '../assets/img/img-reloj-14.jpg' },
    { id:15, marca: 'Marca O', modelo: 'Modelo L', descripcion: "Reloj inteligente con conectividad Bluetooth y monitoreo de salud. Equilibrio entre tecnología, diseño y comodidad.", precio: 380, categoria: 'Relojes Inteligentes', stock: 2, img: '../assets/img/img-reloj-15.jpg' },
    { id:16, marca: 'Marca P', modelo: 'Modelo K', descripcion: "Reloj inteligente con esfera elegante y correa de color vibrante. Un accesorio refinado que resalta tu estilo personal.", precio: 200, categoria: 'Relojes Inteligentes', stock: 8, img: '../assets/img/img-reloj-16.jpg' },
    
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
