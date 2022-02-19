class Heroe {

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
        ){        
    }
}

const ironman = new Heroe('Ironman');

console.log(ironman);