import React from "react";
import Api from "../../../Api";
import { useState, useEffect } from "react";
import { getToken } from "../../../Auth";

function ContactView(){

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        Api.get('/contact',
        {
            params: {},
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }
        )
        .then ((response) =>{
            setContacts(response.data);
        })
    });

    return(
        <>
            <h1>Lista de Contatos</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) =>
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ContactView;