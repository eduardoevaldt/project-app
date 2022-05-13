import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact/Contact";

function Section() {
    return (
        <section className="container p-3">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </section>
    )
}

export default Section;