import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, items, linkText }) {
    const navigate = useNavigate();
    return (
        <div className="card p-3">
            <h6 className="fw-bold text-start">{title}</h6>

            <div className="row">
                {items.map((item, index) => (

                    <div
                        className="col-6 mt-2"
                        key={index}
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/product/${item.label}`)}
                    >
                        <img src={item.img} className="img-fluid" />
                        <small style={{ fontSize: '12px' }}>{item.label}</small>
                    </div>
                ))}

            </div>

            <a href="#" className="mt-2 text-start text-primary text-decoration-none" style={{ fontSize: '12px' }}>
                {linkText}
            </a>
        </div>
    );
}

export default ProductCard;