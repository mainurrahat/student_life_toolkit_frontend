import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
