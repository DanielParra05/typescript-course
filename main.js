"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMund() {
            console.log("Mundo salvado");
        }
    }
    class Villian extends Mutante {
        consquistarMundo() {
            console.log("Mundo salvado");
        }
    }
    const wolverine = new Xmen('wolverine', 'logan');
    const magneto = new Villian("magneto", 'magnus');
    wolverine.salvarMund();
    magneto.consquistarMundo();
    const printName = (character) => {
        console.log('Se que este name es ' + character.name);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() { return this.name; }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameDesdeXmen() {
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.getFullNameDesdeXmen();
})();
//# sourceMappingURL=main.js.map