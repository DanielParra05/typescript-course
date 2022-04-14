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
        }
    }
    class Villian extends Mutante {
        consquistarMundo() {
        }
    }
    const wolverine = new Xmen('wolverine', 'logan');
    const magneto = new Villian("magneto", 'magnus');
    wolverine.salvarMund();
    magneto.consquistarMundo();
    const printName = (character) => {
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
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static getApocalipsis() {
            if (!this.instanceApocalipsis) {
                this.instanceApocalipsis = new Apocalipsis('Soy apocalipsis unico');
            }
            return this.instanceApocalipsis;
        }
        changeName(newName) {
            this.name = "newOne";
        }
    }
    const apocalipsis = Apocalipsis.getApocalipsis();
    const apocalipsis2 = Apocalipsis.getApocalipsis();
    apocalipsis2.changeName('Pa saber');
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map