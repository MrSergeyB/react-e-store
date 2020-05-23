import React, {useEffect, useState, Fragment} from "react";
import "./catalog.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getCatalogProducts, getCategories} from "../../actions/inputActions";

const Catalog = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const {
    loading,
    catalogProducts,
    getCatalogProducts,
    getCategories,
    categories,
  } = props;

  useEffect(() => {
    getCatalogProducts();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
  console.log(catalogProducts);
  return (
    <Fragment>
      {catalogProducts && categories !== null ? (
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>

          <form className="catalog-search-form form-inline">
            <input
              onchange={(e) => setSearchInput(e.target.value)}
              className="form-control"
              placeholder="Поиск"
            />
          </form>

          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                Все
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li key={category.id} className="nav-item">
                  <Link className="nav-link active" to="#">
                    {category.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="row">
            {catalogProducts.map((product) => {
              return (
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img
                      src={product.images[0]}
                      className="card-img-top img-fluid"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <p className="card-text">{product.title}</p>
                      <p className="card-text">{product.price}руб.</p>
                      <Link
                        to="/products/:1"
                        className="btn btn-outline-primary"
                      >
                        Заказать
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary">Загрузить ещё</button>
          </div>
        </section>
      ) : null}
    </Fragment>
  );
};

Catalog.propTypes = {
  catalogProducts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  catalogProducts: state.items.catalogProducts,
  loading: state.items.loading,
  categories: state.items.categories,
});
export default connect(mapStateToProps, {getCatalogProducts, getCategories})(
  Catalog
);
