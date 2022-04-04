(() => {

    function estaEsUnaFuncion(arg1: string, arg2?: string, upper: boolean = false) {
        if (upper) {
            console.log(`${arg1} ${arg2 || '--'}`.toUpperCase());
        } else {
            console.log(`${arg1} ${arg2 || '--'}`);
        }
    }

    estaEsUnaFuncion("Chris");

    //Args rest
    //restArgs significa X numero de elementos, el resto de elementos
    (firstName: string, ...restArgs: string[]) => {

    }

    //Tipos en funciones
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hey ${name}`;
    const saveTheWorld = () => `Mundo salvado`;

    let myFunction: (x: number, y: number) => number; //Tipado de cuando se encapsula una funcion dentro de otra. 

    //myFunction = 10;

    myFunction = addNumber;
    console.log(1, 2);


    //myFunction = greet;
    // console.log("Daniel");

})()