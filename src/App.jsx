import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import EducationSection from "./Components/Qulification/Qualification";


function App() {
  return (
    <div className="bg-white-600 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      
      < EducationSection />

      <Footer />
    </div>
  );
}

export default App;
