// Objeto
obj = {
    q: 1,
    w: 2,
    e: 3,
    r: 4,
    t: 5,
    y: 6
}

// Array de claves del objeto obj
const keys = Object.keys(obj)
// Array de valores del objeto obj
const values = Object.values(obj)

// Muestro el array de claves
console.log(keys)
// Muestro el array de valores
console.log(values)

// Obtengo el valor de la clave q
console.log(obj["q"])

// Guardo el campo w en la variable campo
const campo = "w"
// Muestro el valor de la clave campo
console.log(obj[campo])

// Me fijo si campo está en el array de claves
console.log(keys.includes(campo))

// const numbers = [1, 2, 3, 4, 5, 6]
const numbers = []
console.log(Math.max(...numbers))