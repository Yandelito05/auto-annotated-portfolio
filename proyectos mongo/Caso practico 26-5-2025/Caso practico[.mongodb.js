
use("Restaurant");

db.platos.insertMany([
  {
    name: "Ceviche Mixto",
    category: "Entrada",
    price: 12000,
    ingredients: ["pescado blanco", "camarones", "limón", "cebolla morada", "cilantro"],
    preparation_time: 15,
    available: true,
    chef_special: true,
    calories: 200,
    description: "Fresco ceviche con mariscos y un toque de lima peruana"
  },

  {
    name: "Hamburguesa Clásica",
    category: "Plato Principal",
    price: 8500,
    ingredients: ["carne de res", "queso", "lechuga", "tomate", "pan de hamburguesa"],
    preparation_time: 20,
    available: true,
    chef_special: false,
    calories: 700,
    description: "Jugosa hamburguesa con ingredientes clásicos"
  },
  {
    name: "Pizza Margarita",
    category: "Plato Principal",
    price: 18000,
    ingredients: ["masa", "salsa de tomate", "queso mozzarella", "albahaca"],
    preparation_time: 25,
    available: true,
    chef_special: false,
    calories: 600,
    description: "Pizza italiana tradicional con sabor fresco y auténtico"
  },
  {
    name: "Ensalada César",
    category: "Entrada",
    price: 10000,
    ingredients: ["lechuga romana", "pollo a la parrilla", "queso parmesano", "crutones", "aderezo César"],
    preparation_time: 10,
    available: true,
    chef_special: false,
    calories: 350,
    description: "Clásica ensalada César con trozos de pollo a la parrilla"
  },
  {
    name: "Tarta de Queso",
    category: "Postre",
    price: 9000,
    ingredients: ["queso crema", "huevo", "azúcar", "galleta", "vainilla"],
    preparation_time: 45,
    available: true,
    chef_special: true,
    calories: 500,
    description: "Tarta de queso suave y cremosa con base de galleta crujiente"
  }
]);


db.clientes.insertMany([
  {
    _id: ObjectId("6652a1c9f2d4b7e1a1c0f002"),
    name: "María Gómez",
    email: "maria.gomez@email.com",
    phone: "+57 310 555 6789",
    address: "Carrera 10 #22-50, Medellín",
    registration_date: ISODate("2024-02-20"),
    visits_count: 5,
    total_spent: 150000,
    preferences: ["sin gluten"],
    status: "vip"
  },
  {
    _id: ObjectId("6652a1c9f2d4b7e1a1c0f003"),
    name: "Carlos Ramírez",
    email: "carlos.ramirez@email.com",
    phone: "+57 320 777 1234",
    address: "Avenida 68 #33-22, Cali",
    registration_date: ISODate("2024-03-10"),
    visits_count: 10,
    total_spent: 250000,
    preferences: ["vegano"],
    status: "vip"
  },
  {
    _id: ObjectId("6652a1c9f2d4b7e1a1c0f004"),
    name: "Ana Torres",
    email: "ana.torres@email.com",
    phone: "+57 300 999 8888",
    address: "Calle 100 #50-20, Barranquilla",
    registration_date: ISODate("2024-04-05"),
    visits_count: 2,
    total_spent: 30000,
    preferences: ["sin lactosa"],
    status: "regular"
  }
]);


db.ordenes.insertMany([
  {
    _id: ObjectId("60c72b1f9b1e8e001c8e1a1b"),
    customer_id: ObjectId("60c72b1f9b1e8e001c8e1a2c"),
    order_date: ISODate("2024-05-20T14:30:00Z"),
    table_number: 5,
    waiter_id: ObjectId("60c72b1f9b1e8e001c8e1a3d"),
    items: [
      {
        dish_id: ObjectId("60c72b1f9b1e8e001c8e1a4e"),
        dish_name: "Paella Marinera",
        quantity: 2,
        unit_price: 25000,
        subtotal: 50000
      },
      {
        dish_id: ObjectId("60c72b1f9b1e8e001c8e1a5f"),
        dish_name: "Ceviche Mixto",
        quantity: 1,
        unit_price: 12000,
        subtotal: 12000
      }
    ],
    total: 68000,
    tax: 6000,
    tip: 5000,
    payment_method: "tarjeta",
    status: "Completado"
  },
  {
    _id: ObjectId("60c72b1f9b1e8e001c8e1a1c"),
    customer_id: ObjectId("60c72b1f9b1e8e001c8e1a2d"),
    order_date: ISODate("2024-05-25T19:00:00Z"),
    table_number: 2,
    waiter_id: ObjectId("60c72b1f9b1e8e001c8e1a3e"),
    items: [
      {
        dish_id: ObjectId("60c72b1f9b1e8e001c8e1a6a"),
        dish_name: "Hamburguesa Clásica",
        quantity: 3,
        unit_price: 8500,
        subtotal: 25500
      }
    ],
    total: 27500,
    tax: 2000,
    tip: 3000,
    payment_method: "efectivo",
    status: "Pendiente"
  },

  db.ordenes.insertOne({
  _id: ObjectId("60c72b1f9b1e8e001c8e1a1e"),
  customer_id: ObjectId("60c72b1f9b1e8e001c8e1a2d"),
  waiter_id: ObjectId("60c72b1f9b1e8e001c8e1a3e"),
  order_date: ISODate("2024-05-29T10:15:00Z"),
  table_number: 1,
  items: [
    {
      dish_id: ObjectId("60c72b1f9b1e8e001c8e1aad"),
      dish_name: "Café Americano",
      quantity: 1,
      unit_price: 2500,
      subtotal: 2500
    }
  ],
  total: 2750,
  tax: 250,
  tip: 2000,
  payment_method: "efectivo",
  status: "normal"
})
]);


db.empleados.insertMany([
  {
    name: "Lucía Pérez",
    position: "cajera",
    email: "lucia.perez@restaurant.com",
    hire_date: ISODate("2024-03-10"),
    salary: 1500000,
    schedule: "medio_tiempo",
    phone: "+57 318 765 4321",
    active: true
  },
  {
    name: "Carlos Rodríguez",
    position: "chef",
    email: "carlos.rodriguez@restaurant.com",
    hire_date: ISODate("2023-11-15"),
    salary: 2500000,
    schedule: "tiempo_completo",
    phone: "+57 300 456 7890",
    active: true
  },
  {
    name: "Jorge Herrera",
    position: "limpieza",
    email: "jorge.herrera@restaurant.com",
    hire_date: ISODate("2023-09-20"),
    salary: 1000000,
    schedule: "tiempo_completo",
    phone: "+57 311 234 5678",
    active: true
  },
  {
    name: "Maria García",
    position: "mesera",
    email: "maria.garcia@restaurant.com",
    hire_date: ISODate("2024-02-01"),
    salary: 1200000,
    schedule: "tiempo_completo",
    phone: "+57 310 987 6543",
    active: true
  }
]);



// CONSULTAS

// 1. Obtener todos los platos disponibles con precio menor a 30,000 .
use("Restaurant");
db.platos.find(
  {
    category: "Plato Principal",
    available: true,
    price: { $lt: 30000 }
  },
  {
    name: 1,
    price: 1,
    preparation_time: 1,
    _id: 0
  }
).sort({ price: 1 });


use("Restaurant");

db.ordenes.aggregate([
  {
    $match: {
      order_date: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1))
      }
    }
  },
  {
    $unwind: "$items"
  },
  {
    $group: {
      _id: "$items.dish_name",
      total_times_ordered: { $sum: "$items.quantity" },
      total_revenue: { $sum: "$items.subtotal" }
    }
  },
  {
    $project: {
      _id: 0,
      dish_name: "$_id",
      total_times_ordered: 1,
      total_revenue: 1
    }
  },
  {
    $sort: { total_revenue: -1 }
  }
]);


//3 db.clientes.aggregate
use("Restaurant");
db.clientes.aggregate([
  {
    $match: {
      status: "vip",
      visits_count: { $gt: 5 }
    }
  },
  {
    $lookup: {
      from: "ordenes",
      localField: "_id",
      foreignField: "customer_id",
      as: "customer_orders"
    }
  },
  {
    $project: {
      _id: 0,
      nombre_cliente: "$name",
      email_cliente: "$email",
      status_cliente: "$status",
      total_visitas: "$visits_count",
      total_gastado: "$total_spent",
      ultimo_pedido: {
        $arrayElemAt: [
          {
            $sortArray: {
              input: "$customer_orders",
              sortBy: { order_date: -1 }
            }
          },
          0
        ]
      }
    }
  },
  {
    $project: {
      nombre_cliente: 1,
      email_cliente: 1,
      status_cliente: 1,
      total_visitas: 1,
      total_gastado: 1,
      "ultimo_pedido._id": 1,
      "ultimo_pedido.order_date": 1,
      "ultimo_pedido.total": 1,
      "ultimo_pedido.items": 1
    }
  }
])

 

//4
use("Restaurant");
db.platos.updateMany(
  { categoria: "Entrada" },
  [
    { $set: { precio: { $multiply: ["$precio", 1.10] } } }
  ]
);


//5
use("Restaurant");
const fechaInicio = new Date();
fechaInicio.setMonth(fechaInicio.getMonth() - 1);

db.pedidos.aggregate([
  {
    $match: {
      fecha: { $gte: fechaInicio }
    }
  },
  {
    $group: {
      _id: "$atendido_por",
      total_ordenes: { $sum: 1 },
      promedio_propina: { $avg: "$propina" }
    }
  },
  {
    $lookup: {
      from: "empleados",
      localField: "_id",
      foreignField: "name",
      as: "empleado_info"
    }
  },
  {
    $unwind: "$empleado_info"
  },
  {
    $match: {
      "empleado_info.position": "mesero"
    }
  },
  {
    $project: {
      _id: 0,
      nombre: "$_id",
      total_ordenes: 1,
      promedio_propina: 1
    }
  },
  {
    $sort: {
      total_ordenes: -1
    }
  }
]);


