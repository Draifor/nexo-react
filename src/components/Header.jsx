import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import ToggleColorButton from "./ToggleColorButton";

export default function Header() {
  return (
    <Center as="header">
      <Heading m="5">Tienda Nexo</Heading>
      <ToggleColorButton />
    </Center>
  );
}
