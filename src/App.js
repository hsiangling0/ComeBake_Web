import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/home";
import Product from "./Pages/product";
import Introduction from "./Pages/introduction";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:kind" element={<Product />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
