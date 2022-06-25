import { lazy, Suspense } from "react";
import { Container, useColorMode } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const ListCategories = lazy(() => import("./pages/ListCategories"));

function App() {
  const { colorMode } = useColorMode();

  return (
    <Container
      bg={colorMode}
      minH="100vh"
      fontSize="calc(10px + 2vmin)"
      textAlign="center"
      w="700px"
      maxW="99vw"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
          <ListCategories />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
