# Desafio2RamirezPB

Segundo desafío entregable del curso de Programación Backend de CoderHouse.

## Consigna

- Realizar una clase de nombre **ProductManager**, la cual permitirá trabajar con múltiples productos. Esta debe poder agregar, consultar, modificar y eliminar un producto, y manejarlo en persistencia de archivos (basado en el [desafío entregable 1](https://github.com/ianshalaga/Desafio1RamirezPB)).

- La clase debe contar con una variable **this.path**, la cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

- Debe guardar objetos con el siguiente formato:

  - **id** (se debe incrementar automáticamente, no enviarse desde el cuerpo)
  - **code** (código identificador)
  - **title** (nombre del producto)
  - **description** (descripción del producto)
  - **price** (precio)
  - **thumbnail** (ruta de imagen)
  - **stock** (número de piezas disponibles)

- Debe tener un método **addProduct** el cual debe recibir un objeto con el formato previamente especificado, asignarle un **id** autoincrementable y guardarlo en el arreglo (recuerde siempre guardarlo como un **array** en el archivo).

- Debe tener un método **getProducts**, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.

- Debe tener un método **getProductById**, el cual debe recibir un **id**, y tras leer el archivo, debe buscar el producto con el **id** especificado y devolverlo en formato objeto.

- Debe tener un método **updateProduct**, el cual debe recibir el **id** del producto a actualizar, así como también el campo a actualizar (puede ser el objeto completo, como en una base de datos) y su nuevo valor, y debe actualizar el producto que tenga ese **id** en el archivo. **No debe borrarse su id**.

- Debe tener un método **deleteProduct**, el cual debe recibir un **id** y debe eliminar el producto que tenga ese **id** en el archivo.

## Entrega

Archivo de **JavaScript** (o **TypeScript**) con el nombre **ProductManager.js** (o **ProductManager.ts**).

## Prueba

- Se creará una instancia de la clase **ProductManager**.
- Se llamará **getProducts** recién creada la instancia, debe devolver un arreglo vacío **[]**.
- Se llamará al método **addProduct** con los campos:

  - code: _abc123_,
  - title: _producto prueba_
  - description: _Este es un producto prueba_
  - price: _200_,
  - thumbnail: _Sin imagen_,
  - stock: _25_

- El objeto debe agregarse satisfactoriamente con un **id** generado automáticamente **sin repetirse**.
- Se llamará el método **getProducts** nuevamente, esta vez debe aparecer el producto recién agregado.
- Se llamará al método **getProductById** y se corroborará que devuelva el producto con el **id** especificado, en caso de no existir, debe arrojar un **error**.
- Se llamará al método **updateProduct** y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el **id** y que sí se haya hecho la actualización.
- Se llamará al método **deleteProduct**, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.

## TypeScript

Instalar:

- npm install -g typescript

- npm install -g ts-node

Luego ejecutar el script con **ts-node script.ts**.
