import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <div className="col-3">
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" alt="product image"/>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphones bulk 10 pack Multi colored for students
                    </h5>
                    <ReactStars 
                        count={5}
                        size={24}
                        value = "3"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link>
                            <img className="img-fluid" src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img className="img-fluid" src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img className="img-fluid" src="images/add-cart.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;