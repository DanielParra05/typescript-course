"use strict";
(() => {
    let flash = {
        name: 'John Doe',
        edad: 23,
        power: ["Velocidad", "Viajar en el tiempo"]
    };
    console.log(flash);
    flash = {
        name: "A ver",
        edad: 45,
        power: ["Hola"],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: 'Daniel',
        age: 23,
        adress: {
            id: 125,
            zip: 'GTR 456',
            city: 'Bogota'
        }
    };
})();
//# sourceMappingURL=main.js.map