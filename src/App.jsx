import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Services from "./Component/Servicess/Services";
import Blog from "./Component/Blog/Blog";
import Contacts from "./Component/Contact/Contacts";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        {/* component */}
        <Navbar />
        <Home />
        <About />
        <Services/>
        <Blog />
        <Contacts />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
