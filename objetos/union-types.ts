(() => {
    type Heroe = {
        name: string,
        edad?: number,
        power: string[],
        getName?: () => string
    }

    let myCustomVariable: string | number | Heroe = "Ferxxo";
    console.log(typeof myCustomVariable);

    myCustomVariable = 2;
    console.log(typeof myCustomVariable);

})()