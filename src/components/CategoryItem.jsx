import { Text, ListItem } from "@chakra-ui/react";

export default function ItemCategory({ category }) {
  const { name } = category;
  return (
    <ListItem p="5" bg="#005500">
      <Text color="white">{name}</Text>
    </ListItem>
  );
}
