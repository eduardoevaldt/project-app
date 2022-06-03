import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Api from "../../Api";

function Products() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            { catId: '1', name: 'Categoria 1' },
            { catId: '2', name: 'Categoria 2' },
            { catId: '3', name: 'Categoria 3' }
        ])
    }, []);

    return (
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 p-3">
                <h1>Página de Produtos</h1>
                <ul class="nav">
                    {categories.map((category) =>
                        <li key={category.catId} className="nav-item">
                            <Link to={category.catId} className="nav-link active">
                                <p className="">{category.name}</p>
                            </Link>
                        </li>
                    )}
                </ul>

                <Routes>
                    <Route path='/' element={<AllCategories />} />
                    <Route path=':id' element={<Category />} />
                </Routes>

            </div>
            <div className="col-sm-1"></div>
        </div>
    )
}

export default Products;

function AllCategories() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      Api.get("/product")
          .then((response) => {
              setProducts(response.data);
          });
    }, []);
  
    const [categories, setCategories] = useState()
  
    useEffect(()=>{
        Api.get("/categories").then((response)=>{
          setCategories(response.data);
        })
    }, [categories])
  
    return (
      <>
        <h1>Todos os Produtos</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  function Category() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      Api.get(`/product/category/${id}`)
        .then((response) => {
            setProducts(response.data);
      });
    }, [id]);

    return(
        <>
            <h3>Produtos da Categoria {id}</h3>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
