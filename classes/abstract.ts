(() => {
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Xmen extends Mutante {
        salvarMund() {
            // console.log("Mundo salvado");
        }
    }

    class Villian extends Mutante {
        consquistarMundo() {
            //console.log("Mundo salvado");
        }

    }

    const wolverine = new Xmen('wolverine', 'logan');
    const magneto = new Villian("magneto", 'magnus');

    wolverine.salvarMund()
    magneto.consquistarMundo()
    const printName = (character: Mutante) => {
        //console.log('Se que este name es ' + character.name);
    }
    printName(wolverine);

})()