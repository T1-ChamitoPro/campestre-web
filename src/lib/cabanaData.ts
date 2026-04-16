export type CabanaItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
};

export const cabanaMenuData: CabanaItem[] = [
  // Comidas Rápidas
  { id: 1, name: "Perro Caliente", category: "Comidas Rápidas", price: 13000 },
  { id: 2, name: "Salchipapa Sencilla", category: "Comidas Rápidas", price: 15000 },
  { id: 3, name: "Salchipapa Especial", category: "Comidas Rápidas", price: 20000 },
  { id: 4, name: "Hamburguesa Sencilla", category: "Comidas Rápidas", price: 18000 },
  { id: 5, name: "Nuggets de Pollo", category: "Comidas Rápidas", price: 22000 },

  // Limonadas
  { id: 6, name: "Jarra de Limonada Natural (2L)", category: "Limonadas", price: 18000 },
  { id: 7, name: "Jarra de Limonada Cerezada (2L)", category: "Limonadas", price: 22000 },
  { id: 8, name: "Limonada Natural Personal", category: "Limonadas", price: 8000 },
  { id: 9, name: "Limonada Cerezada Personal", category: "Limonadas", price: 10000 },

  // Jugos Naturales en Agua
  { id: 10, name: "Jugo de Mango", category: "Jugos en Agua", price: 8000 },
  { id: 11, name: "Jugo de Fresa", category: "Jugos en Agua", price: 8000 },
  { id: 12, name: "Jugo de Maracuyá", category: "Jugos en Agua", price: 8000 },
  { id: 13, name: "Jugo de Mora", category: "Jugos en Agua", price: 8000 },
  { id: 14, name: "Jugo de Lulo", category: "Jugos en Agua", price: 8000 },
  { id: 15, name: "Jugo de Corozo", category: "Jugos en Agua", price: 8000 },
  { id: 16, name: "Jugo de Zapote", category: "Jugos en Agua", price: 8000 },
  { id: 17, name: "Jugo de Tamarindo", category: "Jugos en Agua", price: 8000 },

  // Jugos Naturales en Leche
  { id: 18, name: "Jugo de Mango en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 19, name: "Jugo de Fresa en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 20, name: "Jugo de Maracuyá en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 21, name: "Jugo de Mora en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 22, name: "Jugo de Lulo en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 23, name: "Jugo de Corozo en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 24, name: "Jugo de Zapote en Leche", category: "Jugos en Leche", price: 10000 },
  { id: 25, name: "Jugo de Tamarindo en Leche", category: "Jugos en Leche", price: 10000 },
];
