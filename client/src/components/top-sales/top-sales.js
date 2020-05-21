import React, {useEffect, Fragment} from "react";
import "./top-sales.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getTopSalesData} from "../../actions/inputActions";

const TopSales = (props) => {
  const {products, loading, getTopSalesData} = props;

  useEffect(() => {
    getTopSalesData();
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

  return (
    <Fragment>
      {products !== null ? (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>

          <div className="row">
            {products.map((product) => {
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
        </section>
      ) : null}
    </Fragment>
  );
};

TopSales.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.items.products,
  loading: state.items.loading,
});
export default connect(mapStateToProps, {getTopSalesData})(TopSales);
