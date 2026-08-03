import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Dogs from "./pages/Dogs.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import About from "./pages/About.jsx";
import Donate from "./pages/Donate.jsx";
import DogDeets from "./pages/DogDeets.jsx";
import { ModalProvider } from "./components/ModalContext.jsx";
import Privacy from "./pages/Privacy.jsx";
import Notfound from "./pages/Notfound.jsx";
import Fee from "./pages/Fee.jsx";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/dogs/:id" element={<DogDeets />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/us" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/fee" element={<Fee />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
