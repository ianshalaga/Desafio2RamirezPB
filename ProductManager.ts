interface IdProduct {
    id: number;
    code: string;
    title: string;
    description: string;
    price: string;
    thumbnail: string;
    stock: string;
}

class Product {
    code: string;
    title: string;
    description: string;
    price: string;
    thumbnail: string;
    stock: string;

    constructor(code: string,
                title: string,
                description: string,
                price: string,
                thumbnail: string,
                stock: string) {
        if (!(code &&
            title &&
            description &&
            price &&
            thumbnail &&
            stock)) {
            throw new Error("Los parámetros del constructor de Product son obligatorios.")
        }

        this.code = code
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
    }

    addId(id: number) {
        const idProduct: IdProduct = {
            id, // Equal to: id: id
            code: this.code,
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            stock: this.stock,
        }
        return idProduct 
    }
}

class ProductManager {
    products: IdProduct[]

    constructor(products: IdProduct[] = []) {
        this.products = products
    }

    static codeBase = 0

    addProduct(code: string,
               title: string,
               description: string,
               price: string,
               thumbnail: string,
               stock: string) {
        if (this.products.some((element) => code === element.code)) {
            throw new Error("El código del producto que está intentando agregar ya existe. Utilice otro código.")
        }

        const product = new Product(code, title, description, price, thumbnail, stock)

        this.products.push(product.addId(++ProductManager.codeBase))
    }

    getProducts() { return this.products }

    getProductById(id: number) {
        const idProduct = this.products.find((product) => product.id === id)
        if (idProduct) {
            console.log(idProduct)
            return idProduct
        } else {
            console.log("Producto no encontrado.")
        }
    }
}


// TESTING
const productManager = new ProductManager()

console.log(productManager.getProducts()) // []

productManager.addProduct("abc123", "producto prueba", "Este es un producto prueba", "200", "Sin imagen", "25")
productManager.addProduct("abc234", "producto prueba", "Este es un producto prueba", "200", "Sin imagen", "25")
productManager.addProduct("abc345", "producto prueba", "Este es un producto prueba", "200", "Sin imagen", "25")
productManager.addProduct("abc567", "producto prueba", "Este es un producto prueba", "200", "Sin imagen", "25")

console.log(productManager.getProducts())

productManager.getProductById(1)
productManager.getProductById(2)
productManager.getProductById(3)
productManager.getProductById(4)

// console.log(new Product("abc567", "producto prueba", "Este es un producto prueba", "200", "Sin imagen", "25"))