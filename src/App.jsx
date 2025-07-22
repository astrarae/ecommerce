import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen.jsx";

function App() {
  return (
    <Router>
        <Header />
        <main className="py-3">
            <Container>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/product/:id" element={<ProductScreen />} />
                </Routes>
            </Container>
        </main>
        <Footer />
    </Router>
  )
}

export default App