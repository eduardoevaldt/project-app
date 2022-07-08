import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";

function Contact() {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        Api.post('/contact', {
            name: data.name,
            email: data.email,
            message: data.message
        })
            .then((response) => {
                console.log(response);
            })
            .catch((errors) => {
                console.log(errors);
            })
            .finally(() => {
                navigate('/admin/contactView');
            })
    }

    return (
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Contato</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-2">
                        <label htmlFor="">Nome</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('name')}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            {...register('email')}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="">Mensagem</label>
                        <textarea
                            className="form-control"
                            type="text"
                            {...register('message')}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">Enviar</button>
                </form>
            </div>
            <div className="col-sm-1"></div>
        </div>
    )
}

export default Contact;