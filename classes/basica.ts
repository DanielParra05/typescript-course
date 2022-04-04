(() => {

    class Avenger {
        //public team : string ;
        //public realName? : string;
        static avAge: number = 35;

        constructor(private name: string, 
            private team: string, 
            public realName?: string
            ) {}
    }

    const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(antman);
    console.log(Avenger);
})()