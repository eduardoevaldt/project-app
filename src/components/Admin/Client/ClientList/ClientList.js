import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../../Api";
import { getToken } from "../../../../Auth";
import SearchBar from "../../../Commons";

function ClientList() {

    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Api.get('/client',
            {
                params: {},
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            }
        )
            .then((response) => {
                setClients(response.data);
            })
    }, [])

    const handleClickAdd = () => {
        navigate('/admin/clientAdd')
    }

    const handleClickUpdate = (idClient) => {
        navigate(`/admin/clientUpdate/${idClient}`)
    }

    const handleClickDelete = (idClient) => {
        Api.delete(`/client/${idClient}`)
            .finally(() => {
                window.location.reload(false);
            })
    }

    return (
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1 className="mt-3">Lista de Clientes</h1>
                <SearchBar path='/client/search' handle={(data) => {setClients(data)}} />
                <button
                    className="btn btn-success mt-3"
                    onClick={() => handleClickAdd()}
                >
                    Novo Cliente
                </button>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) =>
                            <tr key={index}>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td>{client.address}</td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => handleClickUpdate(client.idClient)}
                                    >
                                        Alterar
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleClickDelete(client.idClient)}
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
    )
}

export default ClientList;