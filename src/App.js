import MainPage from "./MainPage";
import Policy from "./components/Policy/Policy"
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
}

export default App;
