class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}

const productos = []
productos.push(new Producto(1, 'Platos', 1000))
productos.push(new Producto(2, 'Escultura', 1500))
productos.push(new Producto(3, 'Trofeos', 1200))
productos.push(new Producto(4, 'Colgantes', 200))
productos.push(new Producto(5, 'Cabezas', 1500))
productos.push(new Producto(6, 'Cucardas', 900))
productos.push(new Producto(7, 'Imanes', 200))

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
  }
  setCantidadArticlos() {
    this.cantidadArticulos = this.articulos.length
  }
}

////////////////////////////////////
let texto = ''
const carrito = new Carrito()
let carritoLleno = false

productos.forEach((element) => {
  texto += `\n${element.id}. ${element.nombre}.`
})

do {
  let article = prompt('Seleccione el articulo a agregar al carrito de compras' + texto)
  if (article <= productos.length) {
    carrito.articulos.push(productos[article - 1])
    console.log(carrito)
    if (confirm('Desea agregar más productos?')) {
      carritoLleno = false
    } else carritoLleno = true
  } else alert('Ingrese un producto válido')
} while (!carritoLleno)

carrito.setTotal()
carrito.setCantidadArticlos()
console.log(carrito)
