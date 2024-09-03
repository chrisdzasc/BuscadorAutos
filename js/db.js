const autos = [
    {
        marca: 'Audi',
        modelo: 'A8',
        year: 2024,
        precio: 110000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'X5',
        year: 2023,
        precio: 95000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase E',
        year: 2022,
        precio: 85000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2021,
        precio: 60000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        year: 2020,
        precio: 55000,
        puertas: 2,
        color: 'Negro',
        transmision: 'manual'
    },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2019,
        precio: 50000,
        puertas: 2,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Audi',
        modelo: 'Q7',
        year: 2018,
        precio: 75000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2017,
        precio: 45000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2016,
        precio: 40000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'Ford',
        modelo: 'F-150',
        year: 2015,
        precio: 50000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Tahoe',
        year: 2014,
        precio: 65000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Audi',
        modelo: 'A4',
        year: 2023,
        precio: 55000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'X7',
        year: 2022,
        precio: 100000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'GLE',
        year: 2021,
        precio: 95000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Dodge',
        modelo: 'Durango',
        year: 2020,
        precio: 70000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'Ford',
        modelo: 'Explorer',
        year: 2019,
        precio: 45000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Suburban',
        year: 2018,
        precio: 75000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'Audi',
        modelo: 'A6',
        year: 2017,
        precio: 65000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2016,
        precio: 80000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Dodge',
        modelo: 'Charger',
        year: 2015,
        precio: 55000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Audi',
        modelo: 'Q5',
        year: 2024,
        precio: 70000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 7',
        year: 2023,
        precio: 120000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase S',
        year: 2022,
        precio: 130000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Ford',
        modelo: 'Bronco',
        year: 2021,
        precio: 50000,
        puertas: 4,
        color: 'Azul',
        transmision: 'manual'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Corvette',
        year: 2020,
        precio: 95000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    },
    {
        marca: 'Dodge',
        modelo: 'Viper',
        year: 2019,
        precio: 120000,
        puertas: 2,
        color: 'Negro',
        transmision: 'manual'
    },
    {
        marca: 'Audi',
        modelo: 'A7',
        year: 2018,
        precio: 80000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'X6',
        year: 2017,
        precio: 85000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'GLC',
        year: 2016,
        precio: 65000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Ford',
        modelo: 'Edge',
        year: 2015,
        precio: 35000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Impala',
        year: 2014,
        precio: 30000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Audi',
        modelo: 'A5',
        year: 2023,
        precio: 65000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 4',
        year: 2022,
        precio: 75000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase A',
        year: 2021,
        precio: 40000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2020,
        precio: 70000,
        puertas: 2,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'Ford',
        modelo: 'Expedition',
        year: 2019,
        precio: 60000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Malibu',
        year: 2018,
        precio: 45000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Audi',
        modelo: 'Q3',
        year: 2017,
        precio: 55000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'M4',
        year: 2016,
        precio: 90000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    },
    {
        marca: 'Dodge',
        modelo: 'Durango',
        year: 2015,
        precio: 55000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    }
];
