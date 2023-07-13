import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/HomePage";
import HatsCollection from "./pages/HatsCollection";
import JacketCollection from "./pages/JacketsCollection";
import SneakersCollection from "./pages/SneakersCollection";
import WomansCollection from "./pages/WomansCollection";
import MensCollection from "./pages/MensCollection";
import AllCollection from "./pages/AllCollection";
import Navbar from "./components/Navbar";
import CheckoutCollection from "./pages/CheckoutCollection";
import SignPage from "./pages/SignPage";
import PrivateRoute from "./helper/PrivateRoute";
import Contact from "./pages/Contact";

function App() {
  const withPrivacy = (component) => {
    return <PrivateRoute component={component} />;
  };

  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="top-left" autoClose="1000" />
      <Navbar />
      <Routes>
        <Route path="/shop/hats" element={<HatsCollection />} />
        <Route path="/shop/jackets" element={<JacketCollection />} />
        <Route path="/shop/sneakers" element={<SneakersCollection />} />
        <Route path="/shop/womans" element={<WomansCollection />} />
        <Route path="/shop/mens" element={<MensCollection />} />
        <Route path="/shop" element={withPrivacy(AllCollection)} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/checkout" element={<CheckoutCollection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={withPrivacy(Homepage)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
