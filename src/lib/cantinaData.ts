export type CantinaProduct = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export const cantinaData: CantinaProduct[] = [
  // Bebidas Embriagantes
  { id: 1, name: "Costeña", price: 4000, category: "Bebidas Embriagantes" },
  { id: 2, name: "Club Colombia", price: 4000, category: "Bebidas Embriagantes" },
  { id: 3, name: "Miller Lite", price: 4000, category: "Bebidas Embriagantes" },
  { id: 4, name: "Águila Original", price: 4000, category: "Bebidas Embriagantes" },
  { id: 5, name: "Poker", price: 4000, category: "Bebidas Embriagantes" },
  { id: 6, name: "Heineken", price: 4000, category: "Bebidas Embriagantes" },
  { id: 7, name: "Budweiser", price: 4000, category: "Bebidas Embriagantes" },
  { id: 8, name: "Cola y Pola", price: 4000, category: "Bebidas Embriagantes" },
  { id: 9, name: "Redds", price: 4000, category: "Bebidas Embriagantes" },
  { id: 10, name: "Coronita", price: 4500, category: "Bebidas Embriagantes" },
  { id: 11, name: "Stella Artois", price: 6000, category: "Bebidas Embriagantes" },
  { id: 12, name: "Smirnoff", price: 8000, category: "Bebidas Embriagantes" },

  // Gaseosas
  { id: 13, name: "Coca-Cola Personal", price: 4000, category: "Gaseosas" },
  { id: 14, name: "Kola Roman Personal", price: 4000, category: "Gaseosas" },
  { id: 15, name: "Schweppes Personal", price: 4000, category: "Gaseosas" },
  { id: 16, name: "Bretaña", price: 4000, category: "Gaseosas" },
  { id: 17, name: "Sprite Personal", price: 4000, category: "Gaseosas" },
  { id: 18, name: "Postobón 1.5 litros", price: 6000, category: "Gaseosas" },
  { id: 19, name: "Coca-Cola 1.5 litros", price: 7000, category: "Gaseosas" },
  { id: 20, name: "Postobón 2.5 litros", price: 10000, category: "Gaseosas" },
  { id: 21, name: "Coca-Cola 2.25 litros", price: 11000, category: "Gaseosas" },
  { id: 22, name: "Postobón 3.125 litros", price: 12000, category: "Gaseosas" },
  { id: 23, name: "Coca-Cola 3 litros", price: 13000, category: "Gaseosas" },

  // Tragos Cortos
  { id: 24, name: "Aguardiente Verde", price: 70000, category: "Tragos Cortos" },
  { id: 25, name: "Aguardiente Amarillo", price: 75000, category: "Tragos Cortos" },
  { id: 26, name: "Aguardiente Azul", price: 80000, category: "Tragos Cortos" },
  { id: 27, name: "Old Parr (750 ml)", price: 200000, category: "Tragos Cortos" },
  { id: 28, name: "Buchanna's Master (750 ml)", price: 220000, category: "Tragos Cortos" },
];
