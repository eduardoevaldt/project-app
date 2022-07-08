import React from "react";
import { useForm } from "react-hook-form";
import Api from "../../Api";
import { getToken } from "../../Auth";

function SearchBar(props){

    const {handleSubmit, register} = useForm();

    const onSubmit = (data) =>{
        Api.get(
            `${props.path}/${data.search}`,
            {
                params: {},
                headers: {
                        Authorization: "Bearer " + getToken()
                }
            }
        )
        .then((response) =>{
            props.handle(response.data)
        })
    }   

    return(
        <div className="mb-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 mt-3">
                    <label className="form-label" htmlFor="">Busca</label>
                    <input 
                        className="form-control" 
                        type="text"
                        {...register('search')}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <button type="submit" className="btn btn-dark">Pesquisar</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;