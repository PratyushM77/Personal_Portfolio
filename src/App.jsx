import About from "./Components/About";
import "./App.css";
import Navbar from "./Components/Navbar";
import Divider from "./Components/Divider";
import Internship from "./Components/Internship";
import Skills from "./Components/Skills";
import Projectshowcase from "./Components/Projectshowcase";
import Certificates from "./Components/Certificates";

function App() {
  return (
    <><div className="m-0  overflow-x-hidden p-0 bg-gray-100">

      <Navbar/>
      <About/>
      <Divider/>
      <Internship/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Projectshowcase/>
      <Divider/>
      <Certificates/>
    </div>
    </>
  );
}

export default App;
