import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Team from "./components/Team";

function App() {

  return (
    <>
      <Header />
      <div id="main">
        <Home />
        <Service />
        <Team />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
