import About from "./Components/About";
import "./App.css";
import Navbar from "./Components/Navbar";
import Divider from "./Components/Divider";
import Internship from "./Components/Internship";
import Skills from "./Components/Skills";
import Projectshowcase from "./Components/Projectshowcase";

function App() {
  return (
    <><div className="m-0  overflow-x-hidden p-0 bg-gray-50">

      <Navbar/>
      <About/>
      <Divider/>
      <Internship/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Projectshowcase/>
    </div>
    </>
  );
}

export default App;
