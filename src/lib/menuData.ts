export type Dish = {
  id: number;
  name: string;
  price: number;
  category: string;
  accompaniments?: string;
  image: string;           // ← Nueva propiedad para la foto
};

export const menuData: Dish[] = [
  // PLATOS DE LA CASA
  {
    id: 1,
    name: "Arroz de cerdo al barril",
    price: 16000,
    category: "Platos de la Casa",
    accompaniments: "Acompañado con plátano asado y ensalada",
    image: "/src/assets/platos/arroz-de-cerdo.jpg"
  },
  {
    id: 2,
    name: "Sopa de costilla",
    price: 16000,
    category: "Platos de la Casa",
    accompaniments: "Viene con una porción de arroz blanco",
    image: "/src/assets/platos/sopa-costilla.jpg"
  },

  // ASADOS
  {
    id: 3,
    name: "Carne de res",
    price: 26000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/carne-res.jpg"
  },
  {
    id: 4,
    name: "Pechuga",
    price: 26000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/pechuga.jpg"
  },
  {
    id: 5,
    name: "Lomo de cerdo",
    price: 26000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/lomo-cerdo.jpg"
  },
  {
    id: 6,
    name: "Chuleta de cerdo",
    price: 26000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/chuleta-cerdo.jpg"
  },
  {
    id: 7,
    name: "Picada mixta personal",
    price: 31000,
    category: "Asados",
    accompaniments: "Carne de res, pechuga, cerdo al barril, chorizo, plátano asado. Elige: papa o yuca",
    image: "/src/assets/platos/picada-personal.jpg"
  },
  {
    id: 8,
    name: "Churrasco",
    price: 31000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/churrasco.jpg"
  },
  {
    id: 9,
    name: "Cerdo al barril",
    price: 31000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/cerdo-barril.jpg"
  },
  {
    id: 10,
    name: "Punta gorda",
    price: 36000,
    category: "Asados",
    accompaniments: "Incluye plátano asado, ensalada y picadillo. Elige: papa cocida o yuca cocida",
    image: "/src/assets/platos/punta-gorda.jpg"
  },

  // PLATOS CRIOLLOS
  {
    id: 11,
    name: "Gallina guisada",
    price: 31000,
    category: "Platos Criollos",
    accompaniments: "Acompañado con ensalada, yuca cocida y arroz blanco",
    image: "/src/assets/platos/gallina-guisada.jpg"
  },
  {
    id: 12,
    name: "Chivo guisado",
    price: 31000,
    category: "Platos Criollos",
    accompaniments: "Acompañado con ensalada, yuca cocida y arroz blanco",
    image: "/src/assets/platos/chivo-guisado.jpg"
  },
  {
    id: 13,
    name: "Mojarra roja frita",
    price: 31000,
    category: "Platos Criollos",
    accompaniments: "Acompañado con ensalada, yuca cocida y arroz blanco",
    image: "/src/assets/platos/mojarra-roja.jpg"
  },

  // PLATOS FAMILIARES
  {
    id: 14,
    name: "Picada mixta (3-4 personas)",
    price: 80000,
    category: "Platos Familiares",
    accompaniments: "Carne de res, pechuga, cerdo al barril, chorizo, plátano asado y elección de papa o yuca",
    image: "/src/assets/platos/picada-familiar.jpg"
  },
  {
    id: 15,
    name: "Picada mixta (4-5 personas)",
    price: 100000,
    category: "Platos Familiares",
    accompaniments: "Carne de res, pechuga, cerdo al barril, chorizo, plátano asado y elección de papa o yuca",
    image: "/src/assets/platos/picada-familiar.jpg"
  },
];
