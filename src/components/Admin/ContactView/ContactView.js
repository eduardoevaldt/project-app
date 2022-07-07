import React from "react";
import Api from "../../../Api";
import { useState, useEffect } from "react";
import { getToken } from "../../../Auth";
import { useNavigate } from "react-router-dom";

function ContactView() {

    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Api.get('/contact',
            {
                params: {},
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            }
        )
            .then((response) => {
                setContacts(response.data);
            })
    }, [])

    const handleClickResponse = (idContact) =>{
        navigate(`/admin/contact/response/${idContact}`)
    } 

    const handleClickDelete = (idContact) =>{
        Api.delele(`/contact/${idContact}`)
        .finally(()=>{
            window.location.reload(false);
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h1>Lista de Contatos</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Mensagem</th>
                                <th>Status</th>
                                <th colSpan="2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) =>
                                <tr key={index}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>
                                    <td>{contact.status}</td>
                                    <td>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={()=>handleClickResponse(contact.idContact)}
                                        >
                                            Responder
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={()=>handleClickDelete(contact.idContact)}
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </>
    )
}

export default ContactView;