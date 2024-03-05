const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// --------EJERCICIO A--------
console.log('Ejercicio a)  Las pizzas que tengan un id impar.');
console.log("")

const mostrarImpar = () => {
  pizzas.forEach(pizza => {
    if (pizza.id%2 !=0){
      console.log(`La ${pizza.nombre} tiene un ID impar`);
    };
  });
}

mostrarImpar();


// --------EJERCICIO B--------
console.log("")
console.log('Ejercicio b) Responder: ¿Hay alguna pizza que valga menos de $600?');
console.log("")

const precioMenorA = (precio) => {
  pizzas.forEach(pizza => {
    if (pizza.precio < precio){
      console.log(`La ${pizza.nombre} tiene un valor menor a $${precio}`);
    };
  })
}

precioMenorA(600);


// --------EJERCICIO C--------
console.log("")
console.log('Ejercicio c) El nombre de cada pizza con su respectivo precio.');
console.log("")

const pizzaConPrecio = () => {
  pizzas.forEach(pizza => {
    console.log(pizza.nombre+" $"+pizza.precio)
  });
}

pizzaConPrecio()


// --------EJERCICIO D--------
console.log("")
console.log('Ejercicio d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.');
console.log("")

const ingredientesPizzas = () => {
  pizzas.forEach(pizza => {
    console.log('##############');
    console.log(pizza.nombre);
    console.log(`Ingredientes:`);
    pizza.ingredientes.forEach(ingrediente =>{
      console.log(ingrediente);
      
    });
    
    console.log('##############');
    console.log('');
  });
};

ingredientesPizzas();