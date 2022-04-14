(() => {

    class Apocalipsis {

        static instanceApocalipsis: Apocalipsis;

        private constructor(public name: string) {

        }

        static getApocalipsis(): Apocalipsis {
            if (!this.instanceApocalipsis) {
                this.instanceApocalipsis = new Apocalipsis('Soy apocalipsis unico');
            }
            return this.instanceApocalipsis;
        }

        changeName(newName: string): void {
            this.name = "newOne"
        }

    }

    const apocalipsis = Apocalipsis.getApocalipsis();
    const apocalipsis2 = Apocalipsis.getApocalipsis();
    apocalipsis2.changeName('Pa saber');

    console.log(apocalipsis)
})()