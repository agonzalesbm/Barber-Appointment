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
      </div>
    </>
  );
}

export default App;
