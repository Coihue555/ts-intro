import { calculaIVA, Producto } from "./06-desestructuracion-funciones";



const carritoDeCompras: Producto [] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 120
    }
];

console.log(carritoDeCompras);

const [total, iva] = calculaIVA(carritoDeCompras);

console.log('Total: ', total);
console.log('Iva es: ', iva);