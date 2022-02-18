/*
    ===== Código de TypeScript =====
*/
//Arrays
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//Interface
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

//Objeto
const personaje: Personaje = {
    nombre: 'Coihue',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

console.table(personaje);