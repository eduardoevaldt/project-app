import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../../../Api";
import { getToken } from "../../../../Auth";

function ClientUpdate() {
    let {idClient} = useParams();
    const [client, setClient] = useState([]);
    const { handleSubmit, register, reset} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        Api.get(`/client/${idClient}`,
            {
                params: {},
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            }
        )
            .then((response) => {
                setClient(response.data);
                reset(response.data);
            })
    }, [idClient, reset])

    const onSubmit = (data) => {
        Api.put(`/client/${idClient}`,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                address: data.address
            },
            {
                headers: {
                    Authorization: 'Bearer ' + getToken()
                }
            }
        )
            .then(() => {
                navigate('/admin/clientList')
            })
    }

    return (
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Editar Cliente</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Nome</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('name')}
                            defaultValue={client.name}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            {...register('email')}
                            defaultValue={client.email}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Telefone</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('phone')}
                            defaultValue={client.phone}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Endereço</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('address')}
                            defaultValue={client.address}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">Salvar</button>
                </form>
            </div>
            <div className="col-sm-1"></div>
        </div>
    )
}

export default ClientUpdate;