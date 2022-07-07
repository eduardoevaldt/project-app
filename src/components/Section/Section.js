import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact/Contact";

import Login from "../Admin/Login/Login";
import ContactView from "../Admin/Contact/ContactView";
import ContactResponse from "../Admin/Contact/ContactResponse";

function Section() {
    return (
        <section className="container p-3">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/*" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contactView" element={<ContactView />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/admin/contact/response/:idContact" element={<ContactResponse />} />
            </Routes>
        </section>
    )
}

export default Section;