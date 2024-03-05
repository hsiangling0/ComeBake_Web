import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/home";
import Product from "./Pages/product";
import Introduction from "./Pages/introduction";
import Booking from "./Pages/booking";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:kind" element={<Product />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/booking/:kind" element={<Booking />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
