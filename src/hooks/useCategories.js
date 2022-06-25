let idCounter = 0;
const categories = [
  { id: ++idCounter, name: "Joyería" },
  { id: ++idCounter, name: "Zapatillas" },
  { id: ++idCounter, name: "Ropa" },
];

export default function useCategories() {
  return categories;
}
