import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Comments } from "../component/Comments";
import "../../styles/comments.css";
import "../../styles/single.css";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div classNameName="main">
      <div className="container-single">
        <div className="img-container">
          <div className="content">
            <div className="">
              <div className="row">
                <div className="col-4 col-sm-3">
                  <div className="multi-carousel vertical">
                    <div className="multi-carousel-inner">
                      <div className="multi-carousel-item active my-2">
                        <img
                          src="https://www.shutterstock.com/image-photo/laptop-computer-mock-green-screen-600w-1959079696.jpg"
                          alt="..."
                          className="active w-100"
                        />
                      </div>
                      <div className="multi-carousel-item mb-2">
                        <img
                          src="https://www.shutterstock.com/image-photo/mockup-green-screen-stanting-on-600w-1804298176.jpg"
                          alt="..."
                          className="w-100"
                        />
                      </div>
                      <div className="multi-carousel-item mb-2">
                        <img
                          src="https://www.shutterstock.com/image-photo/laptop-on-desk-office-shows-600w-1804298161.jpg"
                          alt="..."
                          className="w-100"
                        />
                      </div>
                      <div className="multi-carousel-item mb-2">
                        <img
                          src="https://www.shutterstock.com/image-photo/computer-peripherals-laptop-accessories-on-600w-1065152207.jpg"
                          alt="..."
                          className="w-100"
                        />
                      </div>
                    </div>
                    {/* <button className="carousel-control-prev" tabindex="0" type="button" data-mdb-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" tabindex="0" type="button" data-mdb-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button> */}
                  </div>
                </div>
                <div className="col-8 col-sm-9">
                  <div className="main-img">
                    <img
                      src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07973337.png"
                      alt="..."
                      className="ecommerce-gallery-main-img active w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h1 className="card-title">HP 250 G9</h1>
          <p className="card-text">
            <table className="table table-striped">
              <tr className="table-title">
                <td>Pantalla</td>
                <td>Procesador</td>
                <td>Memoria Ram</td>
                <td>Disco Duro</td>
              </tr>
              <tr>
                <td>15.6"</td>
                <td>Intel Core I5 3.36Ghz</td>
                <td>DDR 3 8bg</td>
                <td>SSD 264 GB</td>
              </tr>
            </table>
          </p>
          <hr></hr>
          <br></br>
          <h5>Tipo de Oferta🤑: Subasta🔨</h5>
          <p>
            Haz tu oferta 💲:
            <input
              type="number"
              placeholder="Coloca tu oferta aqui"
              required
              min={1}
              // value={oferta}
              onChange={(e) => setEmail(e.target.value)}
              className="ms-4"
            />
          </p>
          <hr></hr>
          <br></br>
          <h5>Tipo de Oferta🤑: Venta🔨</h5>
          <p>
            Precio 💵: $500
            <button className="btn btn-primary ms-4">Comprar</button>
          </p>
        </div>
      </div>
      <div></div>
      <div>
        <Comments
          commentsUrl="https://3000-frako23-haztuofertacom-c8ycfnd9gg3.ws-us77.gitpod.io/single/1"
          currentUserId="comment.userId"
        />
        ;
      </div>
    </div>

    //   <h1 classNameName="display-4">This will show the demo element: </h1>
    //   <img src={rigoImageUrl} />
    //   <hr classNameName="my-4" />
    //   <Link to="/">
    //     <span classNameName="btn btn-primary btn-lg" href="#" role="button">
    //       Back home
    //     </span>
    //   </Link>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
