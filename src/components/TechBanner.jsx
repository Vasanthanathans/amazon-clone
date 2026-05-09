import React from "react";


const products = [
    "/assets/images/banner/ban-1.jpg", // speaker
    "/assets/images/banner/ban-2.jpg", // watch
    "/assets/images/banner/ban-3.jpg", // monitor
    "/assets/images/banner/ban-4.jpg", // smartwatch
    "/assets/images/banner/ban-1.jpg", // speaker
    "/assets/images/banner/ban-2.jpg",
    "/assets/images/banner/ban-3.jpg",
    "/assets/images/banner/ban-4.jpg",
    "/assets/images/banner/ban-1.jpg",
    "/assets/images/banner/ban-2.jpg",// system
];

export default function TechBanner() {
    return (
        <div className="banner-container mt-5">
            <div className="banner-header">
                <h3>Up to 45% off | Your tech upgrade starts here</h3>
                <a href="#">See all offers</a>
            </div>

            <div className="banner-slider">
                <button className="nav left">‹</button>

                <div className="banner-items">
                    {products.map((img, i) => (
                        <div key={i} className="item">
                            <img src={`${img}?w=200`} alt="product" />
                        </div>
                    ))}
                </div>

                <button className="nav right">›</button>
            </div>
        </div>
    );
}