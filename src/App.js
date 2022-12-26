import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
