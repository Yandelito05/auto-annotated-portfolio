const { use } = require("react");

use ("LibroMundo");
db.createCollection("Libros");
db.createCollection("Autores");
db.createCollection("clientes");
db.createCollection("pedidos");
use ("LibroMundo");
db.libros.insertMany([
  {
    titulo: "El Reino de los Dragones",
    autor: "Laura Martínez",
    genero: "Fantasía",
    precio: 19.99,
    etiquetas: ["bestseller", "recomendado"],
    idiomas: ["español", "inglés"],
    editorial: { nombre: "Ediciones Fantasía", sede: "Madrid" },
    resumen: "Una aventura épica en un mundo lleno de dragones y magia.",
    valoracion_promedio: 4.5,
    comentarios: ["Increíble historia", "Muy bien escrita"]
  },
  {
    titulo: "Estación Galáctica",
    autor: "Carlos Vega",
    genero: "Ciencia Ficción",
    precio: 22.50,
    etiquetas: ["recomendado"],
    idiomas: ["español", "inglés", "francés"],
    editorial: { nombre: "SciFi Press", sede: "Barcelona" },
    resumen: "Una misión interplanetaria que cambiará el destino de la humanidad.",
    valoracion_promedio: 4.2,
    comentarios: ["Fascinante", "Muy original"]
  },
  {
    titulo: "La Hechicera del Bosque",
    autor: "Ana Ruiz",
    genero: "Fantasía",
    precio: 17.00,
    etiquetas: ["bestseller"],
    idiomas: ["español"],
    editorial: { nombre: "Mundo Mágico", sede: "Sevilla" },
    resumen: "Una joven descubre sus poderes en un bosque encantado.",
    valoracion_promedio: 4.0,
    comentarios: ["Encantador", "Perfecto para jóvenes lectores"]
  },
  {
    titulo: "Horizonte Cuántico",
    autor: "Javier Torres",
    genero: "Ciencia Ficción",
    precio: 24.99,
    etiquetas: ["nuevo"],
    idiomas: ["español", "alemán"],
    editorial: { nombre: "Futuro Editorial", sede: "Madrid" },
    resumen: "Un experimento cuántico que abre portales a otros universos.",
    valoracion_promedio: 4.7,
    comentarios: ["Impresionante", "Ciencia y ficción bien equilibradas"]
  },
  {
    titulo: "La ciudad y los perros",
    autor: "Mario Vargas Llosa",
    genero: "Novela",
    precio: 20.00,
    etiquetas: ["clásico"],
    idiomas: ["español"],
    editorial: { nombre: "Seix Barral", sede: "Barcelona" },
    resumen: "Una crítica feroz a la educación militar en el Perú.",
    valoracion_promedio: 4.1,
    comentarios: ["Impactante", "Muy bien narrado"]
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    genero: "Novela",
    precio: 22.50,
    etiquetas: ["experimental"],
    idiomas: ["español", "francés"],
    editorial: { nombre: "Sudamericana", sede: "Buenos Aires" },
    resumen: "Una novela experimental que rompe las reglas de la narrativa tradicional.",
    valoracion_promedio: 4.3,
    comentarios: ["Innovadora", "Compleja pero fascinante"]
  },
  {
    titulo: "El túnel",
    autor: "Ernesto Sabato",
    genero: "Ficción",
    precio: 16.00,
    etiquetas: ["psicológica"],
    idiomas: ["español"],
    editorial: { nombre: "Losada", sede: "Buenos Aires" },
    resumen: "Un relato psicológico sobre la obsesión y la soledad.",
    valoracion_promedio: 4.0,
    comentarios: ["Oscuro y profundo", "Muy bien escrito"]
  }
])
use("LibroMundo");
db.libros.insertOne({
  titulo: "El Secreto de la Montaña",
  autor: "Laura Pérez",
  genero: "Misterio",
  precio: 18.99,
  etiquetas: ["recomendado", "nuevo"],
  idiomas: ["español", "inglés"],
  editorial: {
    nombre: "Editorial Andina",
    sede: "Madrid"
  },
  resumen: "Una historia intrigante llena de secretos ocultos.",
  comentarios: [
    { usuario: "juan23", texto: "Muy bueno", valoracion: 5 },
    { usuario: "ana_l", texto: "Interesante", valoracion: 4 }
  ],
  fecha_publicacion: new Date("2023-10-15")
})


use ("LibroMundo");
db.autores.insertMany([
  {
    _id: ObjectId("665a1a1a1a1a1a1a1a1a1a1a"),
    nombre: "Gabriel García Márquez",
    pais: "Colombia"
  },
  {
    _id: ObjectId("665b2b2b2b2b2b2b2b2b2b2b"),
    nombre: "Isabel Allende",
    pais: "Chile"
  },
  {
    _id: ObjectId("665c3c3c3c3c3c3c3c3c3c3c"),
    nombre: "Mario Vargas Llosa",
    pais: "Perú"
  }
])
 use ("LibroMundo");
 db.clientes.insertMany([
  {
    nombre: "Ana Torres",
    email: "ana@gmail.com",
    direccion: "Calle Falsa 123",
    telefono: "555-1234"
  },
  {
    nombre: "Luis Pérez",
    email: "luis@gmail.com",
    direccion: "Av. Siempre Viva 456",
    telefono: "555-5678"
  }
])
use ("LibroMundo");
db.pedidos.insertMany([
  {
    cliente_email: "ana@gmail.com",
    fecha: ISODate("2024-01-15T00:00:00Z"),
    items: [
      {
        libro_id: ObjectId("665d4d4d4d4d4d4d4d4d4d4d"), // Cien años de soledad
        cantidad: 1
      },
      {
        libro_id: ObjectId("665f6f6f6f6f6f6f6f6f6f6f"), // La ciudad y los perros
        cantidad: 2
      }
    ],
    total: 58.50
  },
  {
    cliente_email: "luis@gmail.com",
    fecha: ISODate("2024-02-10T00:00:00Z"),
    items: [
      {
        libro_id: ObjectId("665e5e5e5e5e5e5e5e5e5e5e"), // La casa de los espíritus
        cantidad: 1
      }
    ],
    total: 15.75
  }
])


// CONSULLTAS
use("LibroMundo");
db.autores.find().pretty()

use("LibroMundo");
db.libros.find({
  $or: [
    { genero: "Fantasía" },
    { genero: "Ciencia Ficción" }
  ]
})
use("LibroMundo");
db.libros.find({
  precio: {
    $not: { $gte: 15, $lte: 25 }
  }
})
use("LibroMundo");
db.libros.find({
  $or: [
    { titulo: { $regex: "secreto", $options: "i" } },
    { titulo: { $regex: "misterio", $options: "i" } }
  ]
})
use("LibroMundo");
db.libros.find({
  etiquetas: { $all: ["bestseller", "recomendado"] },
  $expr: { $eq: [{ $size: "$etiquetas" }, 2] }
})


use("LibroMundo");
db.autores.find({
  premios: { $all: ["Premio Nacional", "Premio Internacional"] }
})
use("LibroMundo");
db.libros.find({
  idiomas: { $size: 3 }
})

use("LibroMundo");
db.libros.find({
  editorial: { sede: "Madrid" }
})

use("LibroMundo");
db.libros.aggregate([
  {
    $addFields: {
      promedio_valoracion: { $avg: "$comentarios.valoracion" }
    }
  },
  {
    $match: {
      promedio_valoracion: { $gt: 4 }
    }
  },
  {
    $project: {
      titulo: 1,
      autor: 1,
      comentarios: { $slice: ["$comentarios", 2] },
      promedio_valoracion: 1
    }
  }
])
use("LibroMundo");
db.libros.find({
  "editorial.sede": { $in: ["Madrid", "Barcelona"] }
})
use("LibroMundo");
db.libros.find()
  .sort({ precio: -1 })  // Orden descendente por precio
  .skip(3)               // Saltar los 3 primeros
  .limit(5)              // Mostrar los siguientes 5


use("LibroMundo");
db.libros.find().sort({
  genero: 1,   // Orden alfabético ascendente
  precio: -1   // Precio descendente
})

use("LibroMundo");
db.libros.find()
  .sort({ fecha_publicacion: -1 })  // Orden descendente (más recientes primero)
  .skip(4)                          // Saltar los primeros 4 libros (página 1)
  .limit(4)                         // Mostrar los siguientes 4 (página 2)


use("LibroMundo");
db.libros.aggregate([
  {
    $project: {
      _id: 0,
      descripcion: {
        $concat: ["$titulo", " por ", "$autor"]
      }
    }
  }
])

use("LibroMundo");
db.libros.aggregate([
  {
    $project: {
      titulo: 1,
      genero: 1,
      genero_normalizado: { $toLower: "$genero" }
    }
  },
  {
    $group: {
      _id: "$genero_normalizado",
      libros: { $push: "$titulo" },
      conteo: { $sum: 1 }
    }
  },
  {
    $match: {
      conteo: { $gt: 1 }
    }
  }
])

use("LibroMundo");
db.libros.aggregate([
  {
    $project: {
      titulo: 1,
      resumen_corto: {
        $concat: [
          { $substr: ["$resumen", 0, 10] },
          "..."
        ]
      }
    }
  }
])

use("LibroMundo");
db.libros.aggregate([
  {
    $project: {
      _id: 0,
      titulo_mayusculas: { $toUpper: "$titulo" },
      autores_minusculas: { $toLower: "$autor" }
    }
  }
])

use("LibroMundo");
db.libros.aggregate([
  {
    $match: {
      $and: [
        {
          $or: [
            { genero: "Misterio" },
            { titulo: { $regex: "novela", $options: "i" } }
          ]
        },
        { precio: { $gt: 20 } },
        {
          $expr: {
            $gte: [ { $size: "$idiomas" }, 2 ]
          }
        },
        { "editorial.sede": "Madrid" }
      ]
    }
  },
  {
    $project: {
      _id: 0,
      titulo: 1,
      autor: 1,
      resumen_corto: { $substr: ["$resumen", 0, 15] }
    }
  },
  {
    $sort: { precio: -1 }
  }
])







