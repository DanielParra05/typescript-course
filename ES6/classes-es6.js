(()=>{

    class Avenger {
        name;
        power;

        constructor(name='No name', power=0){
            this.name = name;
            this.power = power;
        }
    }

    class FlyinAvenger extends Avenger {
        flying; 

        constructor (name, power) {
            super(name, power);
            this.flying = true
        }
    }

    const hulk = new Avenger('Hulk', 9001);

    const falcon = new FlyinAvenger('Falcon', '50');

    console.log(falcon);
    console.log(hulk);

})()