import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact/Contact";

import Login from "../Admin/Login/Login";
import ContactView from "../Admin/Contact/ContactView";
import ContactResponse from "../Admin/Contact/ContactResponse";

import ClientAdd from "../Admin/Client/ClientAdd/ClientAdd";
import ClientUpdate from "../Admin/Client/ClientUpdate/ClientUpdate";
import ClientList from "../Admin/Client/ClientList/ClientList";

function Section() {
    return (
        <section className="container p-3">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/*" element={<Products />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/user/login" element={<Login />} />

                <Route path="/admin/contactView" element={<ContactView />} />
                <Route path="/admin/contact/response/:idContact" element={<ContactResponse />} />
                <Route path="/admin/clientList" element={<ClientList />} />
                <Route path="/admin/clientAdd" element={<ClientAdd />} />
                <Route path="/admin/clientUpdate/:idClient" element={<ClientUpdate />} />
            </Routes>
        </section>
    )
}

export default Section;