class Producto {
    constructor (id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    }
}

const productos = []
 productos.push (new Producto (1, 'Platos', 1000));
 productos.push (new Producto (2, 'Escultura', 1500));
 productos.push (new Producto (3, 'Trofeos', 1200));
 productos.push (new Producto (4, 'Colgantes', 200));
 productos.push (new Producto (5, 'Cabezas', 1500));
 productos.push (new Producto (6, 'Cucardas', 900));
 productos.push (new Producto (7, 'Imanes', 200));

 
class Carrito {
    constructor() {
        this.articulos = []
        this.total = 0
        this.cantidadArticulos = 0
    }
    getArticulos() {
        return this.articulos
    }
    setArticulos(producto) {
        this.articulos.push(producto)
    }
    getTotal() {
        return this.total
    }
    setTotal() {
        let total = 0
        if (this.articulos.length > 0) {
            this.articulos.forEach((element) => (total += element.precio))
        }
        this.total = total
            
let texto = " ";
           
Producto.forEach(element => {
    texto = `\n ${element.nombre}. ${element.precio}.`
});

if (article >= productos.length)
            
 
 
 
 /* do {
    let article = prompt('Seleccione el articulo a agregar al carrito de compras\n 1. Platos\n 2.Esculturas\n 3.Trofeos\n 4.Colgantes\n 5.Cabezas\n 6.Cucardas\n 7.Imanes')
    switch (id) {
        case 1: prompt(productos.producto)
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
    }
    let price = parseInt(promtp('Ingrese el valor del articulo'))
    if(confirm('Desea agregar mas articulos a su carrito')){
        addArticle
} while (condition);*/
 