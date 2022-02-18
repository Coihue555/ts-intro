interface PersonajeMarvel{
    nombre: string;
    hp: number;
}

function curarHp(personaje: PersonajeMarvel, puntosHp: number): void{
    personaje.hp += puntosHp;
    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeMarvel = {
    nombre: 'Kevlar',
    hp: 50
}

curarHp(nuevoPersonaje, 20);