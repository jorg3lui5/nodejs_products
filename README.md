## Ejecución:
Para ejecutar la api ejecute el comando:
```bash
$ npm run start:dev
```
Se levantarán los servicios en la siguiente url:
[http://localhost:3000](http://localhost:3000)

## Swagger
Para ver los servicios con swagger ir a la siguiente url:
[http://localhost:3000/api](http://localhost:3000/api)

## Version
Esta api se implementó con las siguientes versiones:
- node: v20.12.1
- nest: 10.3.2
- npm: 10.5.0

## Consumo de servicios
Los servicios se pueden consumir directamente desde swagger.
También se adjunta el archivo product.collection.json en la raiz del proyecto, para que se pueda consumir con postman u otra herramienta.

## Carga de datos iniciales.
El aplicativo creará automáticamente la base datos en el caso de que no esté creada y creará 4 categorías, de las cuales 1 categoría no está activa.
