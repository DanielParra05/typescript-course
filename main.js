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
//# sourceMappingURL=main.js.map