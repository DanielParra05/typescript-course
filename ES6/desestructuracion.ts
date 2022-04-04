(()=>{

    type Abengers = {  nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;}

    const avengers :Abengers = {
        nick: 'Samuel L',
        ironman: 'Robert Downey',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    const {poder, vision} = avengers;   //Desestrcuturacion del obejto de arriba 
    //console.log(poder, vision.toUpperCase() );

    const func = ({ironman, ...resto}: Abengers)=>{
        console.log("--->"+ironman);
        console.log(resto);
    }

    //func(avengers);
    
    /**
     * Desestructuracion de arreglos
     * 
     */

    const avengersArr : [string, boolean, number]= ['Cap. america', true, 1234]

    const [ capi, ironman] = avengersArr;
    console.log({ironman, capi});
})()