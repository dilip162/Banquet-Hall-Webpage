import "./App.css";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Venues from "./components/Venues";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Events />
      <Venues />
      <Footer />
    </>
  );
}

export default App;
