(() => {

    const abc = (message: string): never => { //Signnifica que es codgo que revienta, termina con error
        throw new Error(message);
    }

    abc("Auxiliooo");
})()