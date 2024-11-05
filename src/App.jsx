import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div classNAme="content">
          <h1>Content</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
