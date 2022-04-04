"use strict";
(() => {
    function estaEsUnaFuncion(arg1, arg2, upper = false) {
        if (upper) {
            console.log(`${arg1} ${arg2 || '--'}`.toUpperCase());
        }
        else {
            console.log(`${arg1} ${arg2 || '--'}`);
        }
    }
    estaEsUnaFuncion("Chris");
    (firstName, ...restArgs) => {
    };
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hey ${name}`;
    const saveTheWorld = () => `Mundo salvado`;
    let myFunction;
    myFunction = addNumber;
    console.log(1, 2);
})();
//# sourceMappingURL=function.js.map