import useCategories from "../hooks/useCategories";

import { List } from "@chakra-ui/react";
import CategoryItem from "../components/CategoryItem";

export default function ListCategories() {
  const categories = useCategories();

  return (
    <List display="flex" flexDirection="column" gap="10px">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </List>
  );
}
