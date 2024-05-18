import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/Admin/GetAllProducts`
      );
      setProducts(response?.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100 no-gutters">
          <div className="col-lg-2 col-md-3 sidebar p-4 d-flex flex-column">
            <div className="logo mb-4">
              <h2>Vision Ear</h2>
            </div>
            <nav className="nav flex-column">
              <Link className="nav-link active" to={"/dashboard"}>
                Profile
              </Link>
              <Link className="nav-link active" to={"/addProduct"}>
                Add Product
              </Link>
            </nav>
          </div>
          <div className="col-lg-10 col-md-9 content p-4">
            <header className="d-flex justify-content-between align-items-center mb-4">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
              />
              <div className="d-flex align-items-center">
                <i className="fas fa-bell mr-4"></i>
                <div className="user-info d-flex align-items-center">
                  <img
                    src="images/user.png"
                    alt="User"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <span className="ml-2">Mohamed Osama</span>
                </div>
              </div>
            </header>
            <main>
              <h3>Admin</h3>
              <div className="product-list">
                {products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="product-item d-flex justify-content-between align-items-center p-3 mb-3"
                    >
                      <img
                        src={product.picture_url}
                        alt={product.product_name}
                        className="product-img"
                      />
                      <div className="product-info">
                        <h5>{product.product_name}</h5>
                        <p>
                          ${product.price} | {product.description} |
                          {product?.brands?.brand_name}
                        </p>
                      </div>
                      <div className="action-links">
                        <a href="#" className="btn btn-link update-link">
                          update
                        </a>
                        <a href="#" className="btn btn-link delete-link">
                          delete
                        </a>
                      </div>
                      <button className="btn btn-link">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
