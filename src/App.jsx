import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";

function App() {

  return (
    <>
      <Header />
      <div id="main">
        <Home />
        <Service />
      </div>
    </>
  );
}

export default App;
