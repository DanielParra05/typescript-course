"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avAge = 35;
    const antman = new Avenger("Antman", "Capitan");
    console.log(antman);
})();
//# sourceMappingURL=main.js.map