import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Heroimage from "./components/Hero-image";
import Mostpopular from "./components/Mostpopular";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Navbutton from "./components/Navbutton";
function App(){
    return(
        <div><Navbar></Navbar><Navbutton></Navbutton><Heroimage></Heroimage><Products></Products>
        <Courses></Courses><Mostpopular></Mostpopular><Footer></Footer></div>
    )
}
export default App