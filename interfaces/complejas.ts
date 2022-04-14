(() => {

    interface Client {
        name: string;
        age?: number;
        adress?: Adress
    }

    interface Adress {
        id: number;
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Daniel',
        age: 23,
        adress: {
            id: 125,
            zip: 'GTR 456',
            city: 'Bogota'
        }
    }

})()