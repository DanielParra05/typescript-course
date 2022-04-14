(() => {

    interface Heroe {
        name: string,
        edad?: number,
        power: string[],
        getName?: () => string
    }


    let flash: Heroe = {
        name: 'John Doe',
        edad: 23,
        power: ["Velocidad", "Viajar en el tiempo"]
    }
    console.log(flash);

    //El tipo del objeto ya quedo definido arriba
    flash = {
        name: "A ver",
        edad: 45,
        power: ["Hola"],
        getName(): string {
            return this.name
        }
    }


})()