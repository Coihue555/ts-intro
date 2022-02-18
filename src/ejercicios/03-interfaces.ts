interface PersonajeMarvel{
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

function curarHp(personaje: PersonajeMarvel, puntosHp: number): void{
    personaje.hp += puntosHp;
    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeMarvel = {
    nombre: 'Kevlar',
    hp: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.hp);
    }
}

curarHp(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();