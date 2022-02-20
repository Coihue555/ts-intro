
//al declarar que sea de tipo T, (puede ser cualquier letra), se permite que
// el tipo de variable varie de acuerdo al tipo del argumento
function queTipoes<T>(argumento: T){
    return argumento;
}

let esString = queTipoes('Holaaa');
let esNumero = queTipoes(100);