use ("red_bibliotecas");

db.bibliotecas.insertMany([
  {
    codigo: "SJ-001",
    provincia: "San José",
    horario: {
      dias: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      apertura: "07:00",
      cierre: "20:00"
    }
  },
  {
    codigo: "CAP-002",
    provincia: "Cartago",
    horario: {
      dias: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      apertura: "07:00",
      cierre: "20:00"
    }
  },
  {
    codigo: "ALA-003",
    provincia: "Alajuela",
    horario: {
      dias: ["martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
      apertura: "08:00",
      cierre: "19:00"
    }
  },
  {
    codigo: "PUN-004",
    provincia: "Puntarenas",
    horario: {
      dias: ["lunes", "martes", "miércoles", "jueves", "viernes"],
      apertura: "09:00",
      cierre: "18:00"
    }
  },
  {
    codigo: "LIN-005",
    provincia: "Limón",
    horario: {
      dias: ["lunes", "martes", "miércoles", "jueves", "viernes"],
      apertura: "09:00",
      cierre: "18:00"
    }
  }
]);


use ("red_bibliotecas");
db.usuarios.insertMany([
  {
    nombre: "Ana Patricia Jiménez Solís",
    edad: 23,
    ocupacion: "Estudiante de Psicología en la UCR",
    telefono: "22345678",
    email: "ana.jimenez@ucr.ac.cr",
    fecha_registro: ISODate("2025-03-15T00:00:00Z"),
    biblioteca_codigo: "SJ-001",
    tipo_documento: "cédula",
    numero_documento: "1-1234-5678"
  },
  {
    nombre: "Dr. Carlos Alberto Rodríguez Vargas",
    edad: 42,
    ocupacion: "Médico en el Hospital San Juan de Dios",
    telefono: "2456-7890",
    email: "c.rodriguez@ccss.sa.cr",
    fecha_registro: ISODate("2025-02-02T00:00:00Z"),
    biblioteca_codigo: "CAP-002",
    tipo_documento: "cédula",
    numero_documento: "2-3456-7890"
  },
  {
    nombre: "Rosa Elena Mora Castillo",
    edad: 65,
    ocupacion: "Pensionada del Magisterio Nacional",
    telefono: "2567-8901",
    email: "rosa.mora@gmail.com",
    fecha_registro: ISODate("2025-01-20T00:00:00Z"),
    biblioteca_codigo: "ALA-003",
    tipo_documento: "cédula",
    numero_documento: "3-4567-8901"
  },
  {
    nombre: "José David Herrera Piedra",
    edad: 13,
    ocupacion: "Estudiante del Colegio Saint Francis",
    telefono: "2678-9012",
    email: "josdavid.herrera@saintfrancis.ed.cr",
    fecha_registro: ISODate("2025-04-10T00:00:00Z"),
    biblioteca_codigo: "PUN-004",
    tipo_documento: "DIMEX",
    numero_documento: "155512345678901",
    contacto_responsable: {
      nombre: "Lucía Piedra Jiménez",
      telefono: "2678-9012"
    }
  }
]);

use ("red_bibliotecas");


db.materiales.insertMany([
  // Libros
  {
    tipo: "Libro",
    titulo: "Mamita Yunai",
    autor: "Carlos Luis Fallas",
    isbn: "978-9968-31-123-4",
    editorial: "Editorial Costa Rica",
    anio_publicacion: 1940,
    paginas: 250,
    genero_literario: "Literatura costarricense"
  },
  {
    tipo: "Libro",
    titulo: "El Moto",
    autor: "Joaquín Gutiérrez",
    isbn: "978-9968-31-567-8",
    editorial: "Editorial Costa Rica",
    anio_publicacion: 1942,
    paginas: 180,
    genero_literario: "Literatura costarricense"
  },
  {
    tipo: "Libro",
    titulo: "Cocorí",
    autor: "Joaquín Gutiérrez",
    isbn: "978-9968-31-789-0",
    editorial: "Editorial Costa Rica",
    anio_publicacion: 1947,
    paginas: 100,
    genero_literario: "Literatura infantil"
  },

  // Audiolibros
  {
    tipo: "Audiolibro",
    titulo: "Cuentos de Angustias y Paisajes",
    autor: "Carlos Salazar Herrera",
    narrador: "Francisco Rodríguez",
    duracion_minutos: 120,
    formato: "CD"
  },
  {
    tipo: "Audiolibro",
    titulo: "La Isla de los Hombres Solos",
    autor: "José León Sánchez",
    narrador: "Luis Diego Ugalde",
    duracion_minutos: 300,
    formato: "Digital"
  },
  {
    tipo: "Audiolibro",
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    narrador: "María José Castillo",
    duracion_minutos: 90,
    formato: "CD"
  },

  // Revistas
  {
    tipo: "Revista",
    titulo: "Perfil",
    issn: "1409-1234",
    periodicidad: "Mensual",
    numero_edicion: "Abril 2025"
  },
  {
    tipo: "Revista",
    titulo: "Revista Dominical",
    issn: "1409-5678",
    periodicidad: "Semanal",
    numero_edicion: "Edición 15 de mayo 2025"
  },
  {
    tipo: "Revista",
    titulo: "Semanario Universidad",
    issn: "1409-9012",
    periodicidad: "Semanal",
    numero_edicion: "Edición 20 de mayo 2025"
  },

  // DVDs
  {
    tipo: "DVD",
    titulo: "Caribe",
    director: "Esteban Ramírez",
    duracion_minutos: 90,
    genero_cinematografico: "Drama",
    clasificacion_edad: "Mayores de 12"
  },
  {
    tipo: "DVD",
    titulo: "El Camino",
    director: "Ishtar Yasin",
    duracion_minutos: 95,
    genero_cinematografico: "Drama",
    clasificacion_edad: "Mayores de 15"
  },
  {
    tipo: "DVD",
    titulo: "Gestación",
    director: "Esteban Ramírez",
    duracion_minutos: 100,
    genero_cinematografico: "Drama social",
    clasificacion_edad: "Mayores de 13"
  }
]);

use ("red_bibliotecas");

db.prestamos.insertMany([
  {
    usuario_email: "ana.jimenez@ucr.ac.cr",
    material_titulo: "Mamita Yunai",
    fecha_prestamo: ISODate("2025-05-05T00:00:00Z"),
    fecha_devolucion: ISODate("2025-05-19T00:00:00Z"),
    fecha_limite: ISODate("2025-05-19T00:00:00Z")
  },
  {
    usuario_email: "c.rodriguez@ccss.sa.cr",
    material_titulo: "Cuentos de Angustias y Paisajes",
    fecha_prestamo: ISODate("2025-05-05T00:00:00Z"),
    fecha_devolucion: ISODate("2025-05-20T00:00:00Z"),
    fecha_limite: ISODate("2025-05-20T00:00:00Z")
  },
  {
    usuario_email: "rosa.mora@gmail.com",
    material_titulo: "Perfil",
    fecha_prestamo: ISODate("2025-05-08T00:00:00Z"),
    fecha_devolucion: ISODate("2025-05-15T00:00:00Z"),
    fecha_limite: ISODate("2025-05-15T00:00:00Z")
  },
  {
    usuario_email: "rosa.mora@gmail.com",
    material_titulo: "Caribe",
    fecha_prestamo: ISODate("2025-05-22T00:00:00Z"),
    fecha_devolucion: null,
    fecha_limite: ISODate("2025-06-05T00:00:00Z")
  },
  {
    usuario_email: "josdavid.herrera@saintfrancis.ed.cr",
    material_titulo: "El Moto",
    fecha_prestamo: ISODate("2025-05-12T00:00:00Z"),
    fecha_devolucion: ISODate("2025-05-20T00:00:00Z"),
    fecha_limite: ISODate("2025-05-20T00:00:00Z")
  },
  {
    usuario_email: "josdavid.herrera@saintfrancis.ed.cr",
    material_titulo: "Cocorí",
    fecha_prestamo: ISODate("2025-05-22T00:00:00Z"),
    fecha_devolucion: null,
    fecha_limite: ISODate("2025-06-11T00:00:00Z")
  }
]);


// Consultas
//1
use("red_bibliotecas");
db.prestamos.aggregate(
    [
        {
            $lookup: {
                from: "usuarios",
                localField: "usuario_email",
                foreignField: "email",
                as: "usuario"
            }
        },
        { $unwind: "$usuario" },
        {
            $project: {
                _id: 0,
                nombre_usuario: "$usuario.nombre",
                email_usuario: "$usuario.email",
                material_titulo: 1,
                fecha_prestamo: 1,
                fecha_devolucion: 1,
                fecha_limite: 1
            }
        },
        { $sort : {nombre_usuario : 1, fecha_prestamo : -1} }
    ]
);



//2
use("red_bibliotecas");

  db.prestamos.aggregate(

    [
      { $group: {
        _id:
        "$material_titulo",
        total_prestamos: { $sum: 1 },
      }
    },
    { 
      $sort:{ 
        total_prestamos: -1 
      },
    },
    {
      $project: {
        _id: 0,
        titulo: "$_id",
        total_prestamos: 1
      
      }
    }
  ]);

  //3
  use("red_bibliotecas");
  db.prestamos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_email",
      foreignField: "email",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },

  // Unimos con materiales
  {
    $lookup: {
      from: "materiales",
      localField: "material_titulo",
      foreignField: "titulo",
      as: "material"
    }
  },
  { $unwind: "$material" },

  // Filtramos solo libros
  {
    $match: {
      "material.tipo": "Libro"
    }
  },

  // Clasificamos por rango de edad
  {
    $addFields: {
      rango_edad: {
        $switch: {
          branches: [
            { case: { $lt: ["$usuario.edad", 18] }, then: "menor" },
            { case: { $lt: ["$usuario.edad", 60] }, then: "adulto" }
          ],
          default: "mayor"
        }
      }
    }
  },

  // Agrupamos por rango y género
  {
    $group: {
      _id: {
        rango: "$rango_edad",
        genero: "$material.genero_literario"
      },
      total: { $sum: 1 }
    }
  },

  // Ordenamos por rango y cantidad
  {
    $sort: {
      "_id.rango": 1,
      total: -1
    }
  }
]);


//4
use("red_bibliotecas");
db.prestamos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_email",
      foreignField: "email",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $group: {
      _id: "$usuario.biblioteca_codigo",
      total_prestamos: { $sum: 1 }
    }
  },
  { $sort: { total_prestamos: -1 } }
]);

//5
use("red_bibliotecas");
db.prestamos.find({
  material_titulo: "Cocorí",
  fecha_devolucion: null
});

//6
use("red_bibliotecas");
db.usuarios.aggregate([
  {
    $group: {
      _id: "$biblioteca_codigo",
      total_usuarios: { $sum: 1 }
    }
  },
  {
    $sort: { total_usuarios: -1 }
  }
]);

//7
use("red_bibliotecas");
db.materiales.aggregate([
  {
    $group: {
      _id: "$tipo",
      total_materiales: { $sum: 1 }
    }
  },
  {
    $sort: { total_materiales: -1 }
  }
]);

//8
use("red_bibliotecas");
db.prestamos.aggregate([
  {
    $group: {
      _id: {
        anio: { $year: "$fecha_prestamo" },
        mes: { $month: "$fecha_prestamo" }
      },
      total_prestamos: { $sum: 1 }
    }
  },
  {
    $group: {
      _id: null,
      promedio_mensual: { $avg: "$total_prestamos" }
    }
  },
  {
    $project: {
      _id: 0,
      promedio_mensual: { $round: ["$promedio_mensual", 2] }
    }
  }
]);


//9
use("red_bibliotecas"); 
db.prestamos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_email",
      foreignField: "email",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $group: {
      _id: "$usuario.biblioteca_codigo",
      total_prestamos: { $sum: 1 }
    }
  },
  {
    $sort: { total_prestamos: -1 }
  },
  {
    $limit: 1
  }
]);

//10
use("red_bibliotecas");
db.prestamos.aggregate([
  {
    $match: {
      usuario_email: "ana.jimenez@ucr.ac.cr"
    }
  },
  {
    $lookup: {
      from: "materiales",
      localField: "material_titulo",
      foreignField: "titulo",
      as: "material"
    }
  },
  { $unwind: "$material" },
  {
    $project: {
      _id: 0,
      titulo: "$material.titulo",
      tipo: "$material.tipo",
      fecha_prestamo: 1,
      fecha_devolucion: 1,
      fecha_limite: 1
    }
  },
  { $sort: { fecha_prestamo: -1 } }
]);
