const { act } = require("react");

use("EleccionesCR");
db.electores.insertMany([
    {
        cedula: "123456789",
        nombre: "Juan Pérez",
        fecha_nacimiento: ISODate("1980-01-01"),
        direccion:{
            provincia: "San José",
            canton: "San José",
            distrito: "Carmen",
        
        },
        genero: "M",
        activo: true,

    },
    {
        cedula: "987654321",
        nombre: "María López",
        fecha_nacimiento: ISODate("1990-05-15"),
        direccion:{
            provincia: "Alajuela",
            canton: "Alajuela",
            distrito: "Central",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "456789123",
        nombre: "Carlos García",
        fecha_nacimiento: ISODate("1985-10-20"),
        direccion:{
            provincia: "Cartago",
            canton: "Cartago",
            distrito: "Oriental",
        
        },
        genero: "M",
        activo: true,
    },


    {
        cedula: "321654987",
        nombre: "Ana Torres",
        fecha_nacimiento: ISODate("2010-03-30"),
        direccion:{
            provincia: "Heredia",
            canton: "Heredia",
            distrito: "Mercedes",
        
        },
        genero: "F",
        activo: false,


    },

    {
        cedula: "654321987",
        nombre: "Luis Fernández",
        fecha_nacimiento: ISODate("2000-07-25"),
        direccion:{
            provincia: "Guanacaste",
            canton: "Liberia",
            distrito: "Central",
        
        },
        genero: "M",
        activo: true,
    },


    {

        cedula: "789123456",
        nombre: "Sofía Ramírez",
        fecha_nacimiento: ISODate("2020-12-05"),
        direccion:{
            provincia: "Puntarenas",
            canton: "Puntarenas",
            distrito: "Central",
        
        },
        genero: "F",
        activo: false,
    },
    {
        cedula: "159753456",
        nombre: "Andrés Jiménez",
        fecha_nacimiento: ISODate("1995-08-18"),
        direccion:{
            provincia: "Limón",
            canton: "Limón",
            distrito: "Central",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "753159852",
        nombre: "Laura Méndez",
        fecha_nacimiento: ISODate("1988-11-11"),
        direccion:{
            provincia: "San José",
            canton: "Escazú",
            distrito: "San Rafael",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "852963741",
        nombre: "Diego Castro",
        fecha_nacimiento: ISODate("1992-02-22"),
        direccion:{
            provincia: "Alajuela",
            canton: "Grecia",
            distrito: "San Isidro",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "369258147",
        nombre: "Valeria Soto",
        fecha_nacimiento: ISODate("2005-04-04"),
        direccion:{
            provincia: "Cartago",
            canton: "Turrialba",
            distrito: "La Suiza",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "147258369",
        nombre: "Fernando Ruiz",
        fecha_nacimiento: ISODate("1998-09-09"),
        direccion:{
            provincia: "Heredia",
            canton: "Barva",
            distrito: "San Pedro",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "258369147",
        nombre: "Camila Vargas",
        fecha_nacimiento: ISODate("2015-06-15"),
        direccion:{
            provincia: "Guanacaste",
            canton: "Nicoya",
            distrito: "San Antonio",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "369147258",
        nombre: "Javier Morales",
        fecha_nacimiento: ISODate("1983-12-12"),
        direccion:{
            provincia: "Puntarenas",
            canton: "Quepos",
            distrito: "Central",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "147369258",
        nombre: "Isabel Herrera",
        fecha_nacimiento: ISODate("2009-01-01"),
        direccion:{
            provincia: "Limón",
            canton: "Pococí",
            distrito: "Guápiles",
        
        },
        genero: "F",
        activo: false,
    },
    {
        cedula: "963852741",
        nombre: "Ricardo Salas",
        fecha_nacimiento: ISODate("1991-03-03"),
        direccion:{
            provincia: "San José",
            canton: "Moravia",
            distrito: "San Vicente",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "852741963",
        nombre: "Patricia Gómez",
        fecha_nacimiento: ISODate("1987-07-07"),
        direccion:{
            provincia: "Alajuela",
            canton: "San Ramón",
            distrito: "Central",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "741963852",
        nombre: "Sergio Castillo",
        fecha_nacimiento: ISODate("1994-10-10"),
        direccion:{
            provincia: "Cartago",
            canton: "Oreamuno",
            distrito: "San Rafael",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "159753258",
        nombre: "Natalia Pineda",
        fecha_nacimiento: ISODate("2002-05-05"),
        direccion:{
            provincia: "Heredia",
            canton: "Santo Domingo",
            distrito: "Santo Tomás",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "753159258",
        nombre: "Gabriel Rojas",
        fecha_nacimiento: ISODate("1986-08-08"),
        direccion:{
            provincia: "Guanacaste",
            canton: "Santa Cruz",
            distrito: "Dulce Nombre",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "852963258",
        nombre: "Lucía Méndez",
        fecha_nacimiento: ISODate("2018-11-11"),
        direccion:{
            provincia: "Puntarenas",
            canton: "Coto Brus",
            distrito: "San Vito",
        
        },
        genero: "F",
        activo: false,
    },
    {
        cedula: "369258963",
        nombre: "Oscar Jiménez",
        fecha_nacimiento: ISODate("1993-02-02"),
        direccion:{
            provincia: "Limón",
            canton: "Talamanca",
            distrito: "Bratsi",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "147258963",
        nombre: "Claudia Torres",
        fecha_nacimiento: ISODate("2006-04-04"),
        direccion:{
            provincia: "San José",
            canton: "Curridabat",
            distrito: "Granadilla",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "258369963",
        nombre: "Eduardo Fernández",
        fecha_nacimiento: ISODate("1999-09-09"),
        direccion:{
            provincia: "Alajuela",
            canton: "Atenas",
            distrito: "San Isidro",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "369147963",
        nombre: "Verónica Soto",
        fecha_nacimiento: ISODate("2012-01-01"),
        direccion:{
            provincia: "Cartago",
            canton: "La Unión",
            distrito: "San Diego",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "147369963",
        nombre: "Héctor Ruiz",
        fecha_nacimiento: ISODate("1984-06-06"),
        direccion:{
            provincia: "Heredia",
            canton: "Flores",
            distrito: "San Joaquín",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "963852258",
        nombre: "Carolina Vargas",
        fecha_nacimiento: ISODate("2004-03-03"),
        direccion:{
            provincia: "Guanacaste",
            canton: "Bagaces",
            distrito: "Central",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "852741258",
        nombre: "Jorge Salas",
        fecha_nacimiento: ISODate("1996-07-07"),
        direccion:{
            provincia: "Puntarenas",
            canton: "Parrita",
            distrito: "Central",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "741963258",
        nombre: "Ana Jiménez",
        fecha_nacimiento: ISODate("2017-10-10"),
        direccion:{
            provincia: "Limón",
            canton: "Siquirres",
            distrito: "Central",
        
        },
        genero: "F",
        activo: false,
    },
    {
        cedula: "159753741",
        nombre: "Luis Castillo",
        fecha_nacimiento: ISODate("1990-05-05"),
        direccion:{
            provincia: "San José",
            canton: "Santa Ana",
            distrito: "Salitral",
        
        },
        genero: "M",
        activo: true,
    },
    {
        cedula: "753159741",
        nombre: "María Méndez",
        fecha_nacimiento: ISODate("1982-08-08"),
        direccion:{
            provincia: "Alajuela",
            canton: "Naranjo",
            distrito: "San Miguel",
        
        },
        genero: "F",
        activo: true,
    },
    {
        cedula: "852963741",
        nombre: "Carlos Rojas",
        fecha_nacimiento: ISODate("1994-11-11"),
        direccion:{
            provincia: "Cartago",
            canton: "Jiménez",
            distrito: "San Rafael",
        
        },
        genero: "M",
        activo: true,
    },

    


]);
use("EleccionesCR");
db.partidos.insertMany([ 
    {
        nombre_partido: "Partido Progreso Nacional",
        siglas: "PPN",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2000-01-01"),
        ideologia: ["Liberalismo", "Socialdemocracia"],
        activo: true,
    },
    {
        nombre_partido: "Partido Unión Popular",
        siglas: "PUP",
        nivel: "Nacional",
        fecha_fundacion: ISODate("1995-05-05"),
        ideologia: ["Socialismo", "Progresismo"],
        activo: true,
    },
    {
        nombre_partido: "Partido Conservador Costarricense",
        siglas: "PCC",
        nivel: "Nacional",
        fecha_fundacion: ISODate("1980-10-10"),
        ideologia: ["Conservadurismo", "Cristianismo"],
        activo: true,
    },
    {
        nombre_partido: "Partido Verde Ecológico",
        siglas: "PVE",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2005-03-03"),
        ideologia: ["Ecologismo", "Sostenibilidad"],
        activo: false,
    },
    {
         nombre_partido: "Renovación Costarricense",
         siglas: "RC",
          nivel: "Cantonal",
         fecha_fundacion: ISODate("2010-07-07"),
         ideologia: ["Cristianismo", "Conservadurismo"],
         activo: true,
    },
    {
        nombre_partido: "Movimiento Ciudadano",
        siglas: "MC",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2015-02-02"),
        ideologia: ["Liberalismo", "Progresismo"],
        activo: true,
    },
    {
        nombre_partido: "Partido de la Gente",
        siglas: "PG",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2018-06-06"),
        ideologia: ["Populismo", "Socialdemocracia"],
        activo: true,
    },
    {
        nombre_partido: "Alianza Nacional",
        siglas: "AN",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2020-09-09"),
        ideologia: ["Conservadurismo", "Cristianismo"],
        activo: false,    

   },
    {
        nombre_partido: "Fuerza Democrática",
        siglas: "FD",
        nivel: "Nacional",
        fecha_fundacion: ISODate("1998-04-04"),
        ideologia: ["Socialdemocracia", "Liberalismo"],
        activo: true,
    },
    {
        nombre_partido: "Partido de la Libertad",
        siglas: "PL",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2003-08-08"),
        ideologia: ["Liberalismo", "Progresismo"],
        activo: true,
    },
    {
        nombre_partido: "Unión Nacional",
        siglas: "UN",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2012-12-12"),
        ideologia: ["Conservadurismo", "Cristianismo"],
        activo: true,
    },
    {
        nombre_partido: "Movimiento Socialista",
        siglas: "MS",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2007-11-11"),
        ideologia: ["Socialismo", "Progresismo"],
        activo: false,
    },
    {
        nombre_partido: "Partido Ecologista",
        siglas: "PE",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2011-01-01"),
        ideologia: ["Ecologismo", "Sostenibilidad"],
        activo: true,
    },
    {
        nombre_partido: "Alianza por el Cambio",
        siglas: "AC",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2014-05-05"),
        ideologia: ["Liberalismo", "Progresismo"],
        activo: true,
    },
    {
        nombre_partido: "Partido de la Esperanza",
        siglas: "PE",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2016-03-03"),
        ideologia: ["Socialdemocracia", "Liberalismo"],
        activo: true,
    },
    {
        nombre_partido: "Renovación Democrática",
        siglas: "RD",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2019-07-07"),
        ideologia: ["Conservadurismo", "Cristianismo"],
        activo: true,
    },
    {
        nombre_partido: "Movimiento por la Justicia",
        siglas: "MJ",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2021-10-10"),
        ideologia: ["Socialismo", "Progresismo"],
        activo: false,
    },
    {
        nombre_partido: "Partido de la Unidad",
        siglas: "PU",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2004-02-02"),
        ideologia: ["Liberalismo", "Socialdemocracia"],
        activo: true,
    },
    {
        nombre_partido: "Alianza Verde",
        siglas: "AV",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2008-06-06"),
        ideologia: ["Ecologismo", "Sostenibilidad"],
        activo: true,
    },
    {
        nombre_partido: "Partido Popular",
        siglas: "PP",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2013-09-09"),
        ideologia: ["Populismo", "Socialdemocracia"],
        activo: true,

   },
   {
        nombre_partido: "Fuerza Nacional",
        siglas: "FN",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2017-04-04"),
        ideologia: ["Conservadurismo", "Cristianismo"],
        activo: true,
    },
    {
        nombre_partido: "Movimiento Ciudadano Progresista",
        siglas: "MCP",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2022-08-08"),
        ideologia: ["Liberalismo", "Progresismo"],
        activo: true,
   },
   {
        nombre_partido: "Partido de la Innovación",
        siglas: "PI",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2023-11-11"),
        ideologia: ["Socialdemocracia", "Liberalismo"],
        activo: true,
   },
   {
        nombre_partido: "Alianza por la Justicia Social",
        siglas: "AJS",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2001-01-01"),
        ideologia: ["Socialismo", "Progresismo"],
        activo: true,
    },
    {
        nombre_partido: "Partido de la Esperanza Verde",
        siglas: "PEV",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2006-05-05"),
        ideologia: ["Ecologismo", "Sostenibilidad"],
        activo: true,
    },
    {
        nombre_partido: "Unión por el Cambio",
        siglas: "UC",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2010-10-10"),
        ideologia: ["Liberalismo", "Progresismo"],
        activo: false,
   },
   {
        nombre_partido: "Partido de la Libertad y la Justicia",
        siglas: "PLJ",
        nivel: "Nacional",
        fecha_fundacion: ISODate("2015-02-02"),
        ideologia: ["Socialdemocracia", "Liberalismo"],
        activo: true,
    },
    {
        nombre_partido: "Renovación Social",
        siglas: "RS",
        nivel: "Provincial",
        fecha_fundacion: ISODate("2018-06-06"),
        ideologia: ["Conservadurismo", "Cristianismo"],
        activo: true,
    },
    {
        nombre_partido: "Movimiento por la Paz",
        siglas: "MP",
        nivel: "Cantonal",
        fecha_fundacion: ISODate("2020-09-09"),
        ideologia: ["Socialismo", "Progresismo"],
        activo: false,
   }


]);


use("EleccionesCR");
db.candidatos.insertMany([
    {
        nombre: "Luis Martínez",
        cedula: "123456789",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "San José",
            canton: "San josé",
            distrito: "Carmen"
        },
        activo: true
    },
    {
        nombre: "Ana Gómez",
        cedula: "987654321",
        puesto: "alcaldesa",

        circuinscripcion: {
            provincia: "Alajuela",
            canton: "Alajuela",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Carlos Rodríguez",
        cedula: "456789123",
        puesto: "regidor",
      
        circuinscripcion: {
            provincia: "Cartago",
            canton: "Cartago",
            distrito: "Oriental"
        },
        activo: true
    },
    {
        nombre: "María Fernández",
        cedula: "321654987",
        puesto: "diputada",
     
        circuinscripcion: {
            provincia: "Heredia",
            canton: "Heredia",
            distrito: "Mercedes"
        },
        activo: false
    },
    {
        nombre: "José Pérez",
        cedula: "654321987",
        puesto: "diputado",
        partido: "Renovación Costarricense",
        circuinscripcion: {
            provincia: "Guanacaste",
            canton: "Liberia",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Laura Sánchez",
        cedula: "789123456",
        puesto: "sindicato",
     
        circuinscripcion: {
            provincia: "Puntarenas",
            canton: "Puntarenas",
            distrito: "Central"
        },
        activo: false
    },
    {
        nombre: "Andrés López",
        cedula: "159753456",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Limón",
            canton: "Limón",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Sofía Ramírez",
        cedula: "753159852",
        puesto: "vicepresidente",
        circuinscripcion: {
            provincia: "San José",
            canton: "Escazú",
            distrito: "San Rafael"
        },
        activo: true
    },
    {
        nombre: "Diego Castro",
        cedula: "852963741",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Alajuela",
            canton: "Grecia",
            distrito: "San Isidro"
        },
        activo: true
    },
    {
        nombre: "Valeria Soto",
        cedula: "369258147",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Cartago",
            canton: "Turrialba",
            distrito: "La Suiza"
        },
        activo: true
    },
    {
        nombre: "Fernando Ruiz",
        cedula: "147258369",
        puesto: "vicealcalde",
        circuinscripcion: {
            provincia: "Heredia",
            canton: "Barva",
            distrito: "San Pedro"
        },
        activo: true
    },
    {
        nombre: "Camila Vargas",
        cedula: "258369147",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Guanacaste",
            canton: "Nicoya",
            distrito: "San Antonio"
        },
        activo: true
    },
    {
        nombre: "Javier Morales",
        cedula: "369147258",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Puntarenas",
            canton: "Quepos",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Isabel Herrera",
        cedula: "147369258",
        puesto: "regidora",
        circuinscripcion: {
            provincia: "Limón",
            canton: "Pococí",
            distrito: "Guápiles"
        },
        activo: false
    },
    {
        nombre: "Ricardo Salas",
        cedula: "963852741",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "San José",
            canton: "Moravia",
            distrito: "San Vicente"
        },
        activo: true
    },
    {
        nombre: "Patricia Gómez",
        cedula: "852741963",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Alajuela",
            canton: "San Ramón",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Sergio Castillo",
        cedula: "741963852",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Cartago",
            canton: "Oreamuno",
            distrito: "San Rafael"
        },
        activo: true
    },
    {
        nombre: "Natalia Pineda",
        cedula: "159753258",
        puesto: "sindicato",
        circuinscripcion: {
            provincia: "Heredia",
            canton: "Santo Domingo",
            distrito: "Santo Tomás"
        },
        activo: true
    },
    {
        nombre: "Gabriel Rojas",
        cedula: "753159258",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Guanacaste",
            canton: "Santa Cruz",
            distrito: "Dulce Nombre"
        },
        activo: true
    },
    {
        nombre: "Lucía Méndez",
        cedula: "852963258",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Puntarenas",
            canton: "Coto Brus",
            distrito: "San Vito"
        },
        activo: false
    },
    {
        nombre: "Oscar Jiménez",
        cedula: "369258963",
        puesto: "regidor",
        circuinscripcion: {
            provincia: "Limón",
            canton: "Talamanca",
            distrito: "Bratsi"
        },
        activo: true
    },
    {
        nombre: "Claudia Torres",
        cedula: "147258963",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "San José",
            canton: "Curridabat",
            distrito: "Granadilla"
        },
        activo: true
    },
    {
        nombre: "Eduardo Fernández",
        cedula: "258369963",
        puesto: "sindicato",
        circuinscripcion: {
            provincia: "Alajuela",
            canton: "Atenas",
            distrito: "San Isidro"
        },
        activo: true
    },
    {
        nombre: "Verónica Soto",
        cedula: "369147963",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Cartago",
            canton: "La Unión",
            distrito: "San Diego"
        },
        activo: true
    },
    {
        nombre: "Héctor Ruiz",
        cedula: "147369963",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Heredia",
            canton: "Flores",
            distrito: "San Joaquín"
        },
        activo: true
    },
    {
        nombre: "Carolina Vargas",
        cedula: "963852258",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Guanacaste",
            canton: "Bagaces",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Jorge Salas",
        cedula: "852741258",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "Puntarenas",
            canton: "Parrita",
            distrito: "Central"
        },
        activo: true
    },
    {
        nombre: "Ana Jiménez",
        cedula: "741963258",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Limón",
            canton: "Siquirres",
            distrito: "Central"
        },
        activo: false
    },
    {
        nombre: "Luis Castillo",
        cedula: "159753741",
        puesto: "diputado",
        circuinscripcion: {
            provincia: "San José",
            canton: "Santa Ana",
            distrito: "Salitral"
        },
        activo: true
    },
    {
        nombre: "María Méndez",
        cedula: "753159741",
        puesto: "diputada",
        circuinscripcion: {
            provincia: "Alajuela",
            canton: "Naranjo",
            distrito: "San Miguel"
        },
        activo: true
    }
]);
use("EleccionesCR");
db.puestos_electivos.insertMany([
    {
        puesto: "diputado",
        nivel: "Nacional",
        cargo_uninominal: true,
        cantidad: 57,
        activo: true

    },
    {
        puesto: "alcalde",
        nivel: "Cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "regidor",
        nivel: "Cantonal",
        cargo_uninominal: false,
        cantidad: 246,
        activo: true
    },
    {
        puesto: "vicealcalde",
        nivel: "Cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "sindicato",
        nivel: "Provincial",
        cargo_uninominal: false,
        cantidad: 7,
        activo: true
    },
    {
        puesto: "vicepresidente",
        nivel: "Nacional",
        cargo_uninominal: true,
        cantidad: 2,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "Provincial",
        cargo_uninominal: true,
        cantidad: 57,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "Cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "Presidente",
        nivel: "Regional",
        cargo_uninominal: true,
        cantidad: 5,
        activo: false
    },
    {
        puesto: "Secretario General",
        nivel: "Nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "magistrado",
        nivel: "Nacional",
        nivel: "Distrital",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacionl",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "Comunal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: " Presidente",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "alcalde",
        nivel: "cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacionl",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "presidente",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "alcalde",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "vicepresidente",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "diputado",
        nivel: "nacional",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    }
]);
use("EleccionesCR");
db.puestos_electivos.insertMany([
    {
        puesto: "diputado",
        nivel: "Nacional",
        cargo_uninominal: true,
        cantidad: 57,
        activo: true
    },
    {
        puesto: "alcalde",
        nivel: "Cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "regidor",
        nivel: "Cantonal",
        cargo_uninominal: false,
        cantidad: 246,
        activo: true
    },
    {
        puesto: "vicealcalde",
        nivel: "Cantonal",
        cargo_uninominal: true,
        cantidad: 82,
        activo: true
    },
    {
        puesto: "sindicato",
        nivel: "Provincial",
        cargo_uninominal: false,
        cantidad: 7,
        activo: true
    }
]);
use("EleccionesCR");
db.votaciones.insertMany([
    {
       cedula_electoral: "123456789",
       nombre_elector: "Luis Martínez",
       cadidato: "Carlos Rodríguez",
       partido: "Partido Progreso Nacional",
       puesto: "diputado",
       fecha: ISODate("2025-02-15"), 
       tipi_voto: "valido",
       centro_votacion:"liceo montes de oca",
    },
    {
        cedula_electoral: "987654321",
        nombre_elector: "Ana Gómez",
        cadidato: "María Fernández",    
        partido: "Partido Unión Popular",
        puesto: "alcaldesa",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion: "colegio de san jose",
    },
    {
        cedula_electoral: "456789123",
        nombre_elector: "Carlos Rodríguez",
        cadidato: "Luis Martínez",
        partido: "Partido Conservador Costarricense",
        puesto: "regidor",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca",
    },
    {
        cedula_electoral: "321654987",
        nombre_elector: "María Fernández",
        cadidato: "Ana Gómez",
        partido: "Partido Verde Ecológico",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose",
    },
    {
        cedula_electoral: "654321987",
        nombre_elector: "José Pérez",
        cadidato: "Sofía Ramírez",
        partido: "Renovación Costarricense",
        puesto: "diputado",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral: "789123456",
       nombre_elector: "Laura Sánchez",
       cadidato: "Diego Castro",    
       partido: "Movimiento Ciudadano",
       puesto: "sindicato",
       fecha: ISODate("2025-02-15"),
       tipi_voto: "valido",
       centro_votacion:"colegio de san jose"
    },
    {
       cedula_electoral: "159753456",
       nombre_elector: "Andrés López",    
       cadidato:"Valeria Soto", 
       partido:"Partido de la Gente", 
       puesto:"diputado", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral:"753159852", 
       nombre_elector:"Sofía Ramírez", 
       cadidato:"Fernando Ruiz", 
       partido:"Alianza Nacional", 
       puesto:"vicepresidente",
       fecha:ISODate("2025-02-15"),
         tipi_voto:"valido",
         centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "852963741",
        nombre_elector: "Diego Castro",
        cadidato: "Camila Vargas",
        partido: "Fuerza Democrática",
        puesto: "diputado",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
        cedula_electoral: "369258147",
        nombre_elector: "Valeria Soto",
        cadidato: "Javier Morales",
        partido: "Partido de la Libertad",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "147258369",
        nombre_elector: "Fernando Ruiz",
        cadidato: "Isabel Herrera",
        partido: "Unión Nacional",
        puesto: "diputado",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral:"159753258", 
       nombre_elector:"Camila Vargas", 
       cadidato:"Ricardo Salas", 
       partido:"Movimiento Ciudadano Progresista", 
       puesto:"sindicato", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"colegio de san jose"
    },
    {
       cedula_electoral:"753159258", 
       nombre_elector:"Gabriel Rojas", 
       cadidato:"Patricia Gómez", 
       partido:"Partido Popular", 
       puesto:"diputado", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral:"852963258", 
       nombre_elector:"Lucía Méndez", 
       cadidato:"Sergio Castillo", 
       partido:"Fuerza Nacional", 
       puesto:"diputada",
         fecha: ISODate("2025-02-15"),
         tipi_voto: "valido",
            centro_votacion: "colegio de san jose"
    },
    {
        cedula_electoral: "369258963",
        nombre_elector: "Oscar Jiménez",
        cadidato: "Natalia Pineda",
        partido: "Partido de la Libertad y la Justicia",
        puesto: "regidor",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
        cedula_electoral: "147258963",
        nombre_elector: "Claudia Torres",
        cadidato: "Gabriel Rojas",
        partido: "Renovación Social",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "258369963",
        nombre_elector: "Eduardo Fernández",
        cadidato: "Lucía Méndez",
        partido: "Movimiento por la Paz",
        puesto: "sindicato",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral:"369147963", 
       nombre_elector:"Verónica Soto", 
       cadidato:"Héctor Ruiz", 
       partido:"Alianza por el Cambio", 
       puesto:"diputada", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"colegio de san jose"
    },
    {
       cedula_electoral:"147369963", 
       nombre_elector:"Héctor Ruiz", 
       cadidato:"Carolina Vargas", 
       partido:"Partido Ecologista", 
       puesto:"diputado", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral:"963852258", 
       nombre_elector:"Carolina Vargas", 
       cadidato:"Jorge Salas", 
       partido:"Alianza por la Justicia Social",
         puesto:"diputada",
         fecha:ISODate("2025-02-15"),
         tipi_voto:"valido",
            centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "852741258",
        nombre_elector: "Jorge Salas",
        cadidato: "Ana Jiménez",
        partido: "Partido de la Innovación",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
        cedula_electoral: "741963258",
        nombre_elector: "Ana Jiménez",
        cadidato: "Luis Castillo",
        partido: "Alianza Verde",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose"
    },
    {
       cedula_electoral:"159753741", 
       nombre_elector:"Luis Castillo", 
       cadidato:"María Méndez", 
       partido:"Unión por el Cambio", 
       puesto:"diputada", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"liceo montes de oca"
    },
    {
       cedula_electoral:"753159741", 
       nombre_elector:"María Méndez", 
       cadidato:"José Pérez", 
       partido:"Partido de la Esperanza Verde", 
       puesto:"diputada", 
       fecha:ISODate("2025-02-15"), 
       tipi_voto:"valido", 
       centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "852963258",
        nombre_elector: "Gabriel Rojas",
        cadidato: "Sergio Castillo",
        partido: "Movimiento por la Justicia",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
        cedula_electoral: "369258963",
        nombre_elector: "Lucía Méndez",
        cadidato: "Natalia Pineda",
        partido: "Partido de la Unidad",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "147258963",
        nombre_elector: "Oscar Jiménez",
        cadidato: "Claudia Torres",
        partido: "Alianza Verde",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
        cedula_electoral: "258369963",
        nombre_elector: "Eduardo Fernández",
        cadidato: "Fernando Ruiz",
        partido: "Partido Popular",
        puesto: "sindicato",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose"
    },
    {
        cedula_electoral: "369147963",
        nombre_elector: "Verónica Soto",
        cadidato: "Héctor Ruiz",
        partido: "Fuerza Nacional",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"liceo montes de oca"
    },
    {
        cedula_electoral: "147369963",
        nombre_elector: "Héctor Ruiz",
        cadidato: "Carolina Vargas",
        partido: "Movimiento Ciudadano Progresista",
        puesto: "diputada",
        fecha: ISODate("2025-02-15"),
        tipi_voto: "valido",
        centro_votacion:"colegio de san jose"
    }
]);
use("EleccionesCR");
db.distritos_electorales.insertMany([
    {
        Provincia: "San José",
        Canton: "San José",
        Distrito: "Carmen",
        codigo_distrito: "SJ01",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Alajuela",
        Canton: "Alajuela",
        Distrito: "Central",
        codigo_distrito: "AL01",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Cartago",
        Canton: "Cartago",
        Distrito: "Oriental",
        codigo_distrito: "CA01",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Heredia",
        Canton: "Heredia",
        Distrito: "Mercedes",
        codigo_distrito: "HE01",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Guanacaste",
        Canton: "Liberia",
        Distrito: "Central",
        codigo_distrito: "GU01",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Puntarenas",
        Canton: "Puntarenas",
        Distrito: "Central",
        codigo_distrito: "PU01",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Limón",
        Canton: "Limón",
        Distrito: "Central",
        codigo_distrito: "LI01",
        tipo: "Urbano",
        activo: true
    },
    {
       Provincia:"San José", 
       Canton:"Escazú", 
       Distrito:"San Rafael", 
       codigo_distrito:"SJ02", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Alajuela", 
       Canton:"Grecia", 
       Distrito:"San Isidro", 
       codigo_distrito:"AL02", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Cartago", 
       Canton:"Turrialba", 
       Distrito:"La Suiza", 
       codigo_distrito:"CA02", 
       tipo:"Urbano", 
       activo:true
    },
    {
        Provincia: "Heredia",
        Canton: "Barva",
        Distrito: "San Pedro",
        codigo_distrito: "HE02",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Guanacaste",
        Canton: "Nicoya",
        Distrito: "San Antonio",
        codigo_distrito: "GU02",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Puntarenas",
        Canton: "Quepos",
        Distrito: "Central",
        codigo_distrito: "PU02",
        tipo: "Urbano",
        activo: true
    },
    {
       Provincia:"Limón", 
       Canton:"Pococí", 
       Distrito:"Guápiles", 
       codigo_distrito:"LI02", 
       tipo:"Urbano", 
       activo:true
    },
    {
        Provincia: "San José",
        Canton: "Moravia",
        Distrito: "San Vicente",
        codigo_distrito: "SJ03",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Alajuela",
        Canton: "San Ramón",
        Distrito: "Central",
        codigo_distrito: "AL03",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Cartago",
        Canton: "Oreamuno",
        Distrito: "San Rafael",
        codigo_distrito: "CA03",
        tipo: "Urbano",
        activo: true
    },
    {
       Provincia:"Heredia", 
       Canton:"Santo Domingo", 
       Distrito:"Santo Tomás", 
       codigo_distrito:"HE03", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Guanacaste", 
       Canton:"Santa Cruz", 
       Distrito:"Dulce Nombre", 
       codigo_distrito:"GU03", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Puntarenas", 
       Canton:"Coto Brus", 
       Distrito:"San Vito", 
       codigo_distrito:"PU03", 
       tipo:"Urbano", 
       activo:true
    },
    {
        Provincia: "Limón",
        Canton: "Talamanca",
        Distrito: "Bratsi",
        codigo_distrito: "LI03",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "San José",
        Canton: "Curridabat",
        Distrito: "Granadilla",
        codigo_distrito: "SJ04",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Alajuela",
        Canton: "Atenas",
        Distrito: "San Isidro",
        codigo_distrito: "AL04",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Cartago",
        Canton: "La Unión",
        Distrito: "San Diego",
        codigo_distrito: "CA04",
        tipo: "Urbano",
        activo: true
    },
    {
       Provincia:"Heredia", 
       Canton:"Flores", 
       Distrito:"San Joaquín", 
       codigo_distrito:"HE04", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Guanacaste", 
       Canton:"Bagaces", 
       Distrito:"Central", 
       codigo_distrito:"GU04", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Puntarenas", 
       Canton:"Parrita", 
       Distrito:"Central", 
       codigo_distrito:"PU04", 
       tipo:"Urbano", 
       activo:true
    },
    {
       Provincia:"Limón", 
       Canton:"Siquirres", 
       Distrito:"Central", 
       codigo_distrito:"LI04", 
       tipo:"Urbano", 
       activo:true
    },
    {
        Provincia: "San José",
        Canton: "Santa Ana",
        Distrito: "Salitral",
        codigo_distrito: "SJ05",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Alajuela",
        Canton: "Naranjo",
        Distrito: "San Miguel",
        codigo_distrito: "AL05",
        tipo: "Urbano",
        activo: true
    },
    {
        Provincia: "Cartago",
        Canton: "Turrialba",
        Distrito: "La Suiza",
        codigo_distrito: "CA05",
        tipo: "Urbano",
        activo: true
    },
    

]);

//indexes
use("EleccionesCR");
db.electores.createIndex({ cedula: 1 });
db.partidos.createIndex({ siglas: 1 });
db.candidatos.createIndex({ nombre_completo: 1 });

//conultas, actualizaciones y deletes
use("EleccionesCR");
db.electores.find({activo: true});

use("EleccionesCR");
db.candidatos.find({puesto: "diputado", activo: true});

use("EleccionesCR");
db.electores.find({"direccion.provincia": "San José", "direccion.canton": "San José", "direccion.distrito": "Carmen"});

use("EleccionesCR");
db.votaciones.find ({
    cedula_electoral: "123456789",
    puesto: "diputado",
});

use("EleccionesCR");
db.candidatos.find({
    $and: [
        { activo: true },
        { puesto: "diputado" },
    ]
});


use("EleccionesCR");
db.candidatos.find({
    $or: [
        { puesto: "diputado" },
        { puesto: "vicepresidente" }
    ]
});



use("EleccionesCR");
db.candidatos.find ({
    cedula: {$lt: "200000000"},
}).pretty();

use("EleccionesCR");
db.candidatos.find ({
    cedula: {$gt: "200000000"},
}).pretty();

use("EleccionesCR");
db.electores.find ().limit(3);

use("EleccionesCR");
db.electores.find().sort({nombre: -1}).limit(5);

use("EleccionesCR");
db.partidos.countDocuments({activo: true});


use("EleccionesCR");
db.candidatos.aggregate([
    {$group: {
        _id: "$puesto", total: {$sum: 1} } 
    }
]);
use("EleccionesCR");
db.candidatos.aggregate([
   {
    $project: {
      nombre_mayuscula: {$toUpper: "$nombre"},
      _id: 0
    }
   }
]);

use("EleccionesCR");
db.candidatos.aggregate([
    {
        $project: {
            _id: 0,
            info: {
                $concat: [
                    {$toUpper: "$nombre"},
                    " - ",
                    {$toLower: "$puesto"},
                    " - ",
                    {$toLower: "$circuinscripcion.provincia"}
                  
                ]
    }
}
    }
]);

use("EleccionesCR");
db.candidatos.find({
    propuestas: {$size:3}
}).pretty();



//update
use("EleccionesCR");
db.candidatos.updateOne(
    {cedula: "123456789"},
    {$set: {partido: "Partido Progreso Nacional", activo: true}}
);

use("EleccionesCR");
db.candidatos.updateOne(
    {cedula: "369147258"},
    {$set: {propuestas: [
        "Mejorar la infraestructura vial en Puntarenas",
        "Fomentar el turismo sostenible en Quepos",
        "Impulsar programas de educación ambiental en Coto Brus"
    ]}}
);
//delete
use("EleccionesCR");
db.votaciones.deleteOne({ validados: false });