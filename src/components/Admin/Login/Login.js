import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";
import { setToken } from "../../../Auth";

function Login(){

    const {handleSubmit, register} = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        Api.post('/user/login',{
            userName : data.userName,
            password : data.password
        })
        .then((response)=>{
            if(response.data.access === 'true'){
                setToken(response.data.token)
            }
        })
        .finally(()=>{
            navigate('/');
        })
    }

    return(
        <>
        <div className="row p-3">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-2">
                        <label htmlFor="">Usuário</label>
                        <input
                            className="form-control"
                            type="text"
                            {...register('userName')}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="">Senha</label>
                        <input
                            className="form-control"
                            type="password"
                            {...register('password')}
                        />
                    </div>
                   
                    <button type="submit" className="btn btn-dark mt-3">Logar</button>
                </form>
            </div>
            <div className="col-sm-3"></div>
        </div>
        </>
    )
}

export default Login;