(()=>{

    type Avenger = {
        name: string, 
        weapon: string
    }

    const ironman: Avenger = {
        name : "Ironman",
        weapon: 'Armorsuit'
    }
    const capAmerica: Avenger = {
        name : "Capitan Aerica",
        weapon: 'Shield'
    }
    const thor: Avenger = {
        name : "Thor",
        weapon: 'Mjolnir'
    }

    const avengers: Avenger [] = [ironman, thor, capAmerica];

for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})()