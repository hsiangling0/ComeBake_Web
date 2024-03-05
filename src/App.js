import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/home";
import Product from "./Pages/product";
import Introduction from "./Pages/introduction";
import Booking from "./Pages/booking";
function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:kind" element={<Product />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/booking/:kind" element={<Booking />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
