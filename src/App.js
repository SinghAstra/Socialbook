import Footer from "./components/Footer/Footer";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
