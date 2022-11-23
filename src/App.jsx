import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Name from "./components/Name";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Name />
      <About />
      <Contact />
    </div>
  );
}

export default App;
