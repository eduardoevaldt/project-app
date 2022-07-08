import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../../../Api";
import { getToken } from "../../../../Auth";

function ClientAdd() {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        Api.post('/client',
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                address: data.address
            },
            {
                headers:{
                    Authorization: 'Bearer ' + getToken()
                }
            }
        )
        .then(()=>{
            navigate('/admin/clientList')
        })
    }

    return (
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Adicionar Cliente</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Nome</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('name')}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            {...register('email')}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Telefone</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('phone')}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label className="form-label" htmlFor="">Endereço</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('address')}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">Salvar</button>
                </form>
            </div>
            <div className="col-sm-1"></div>
        </div>
    )
}

export default ClientAdd;