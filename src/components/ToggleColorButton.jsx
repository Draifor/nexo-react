import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ToggleColorButton() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#006400", "#006400"); //* Queda pendiente por si no se usan diferentes colores
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />);
  const hover = useColorModeValue("#006400cc", "#006400cc"); //* Queda pendiente por si no se usan diferentes colores
  const textColor = useColorModeValue("#fff", "#000");

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={icon}
      bg={bg}
      color={textColor}
      _hover={{ bg: hover }}
    />
  );
}
