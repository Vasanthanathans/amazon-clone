import React from "react";


function MegaMenu() {
    return (
        <div className="mega-menu">

            <div className="mega-content container">
                <div className="row">


                    <div className="col-md-3">
                        <h6 className="text-start">Televisions</h6>
                        <ul className="list-unstyled text-start">
                            <li>Smart TVs</li>
                            <li>32 inch TVs</li>
                            <li>Large Screen TVs</li>
                            <li>4K TVs</li>
                            <li>Full HD TVs</li>
                            <li>HD Ready TVs</li>
                            <li>Android TVs</li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="text-start">Shop by brand</h6>
                        <ul className="list-unstyled text-start">
                            <li>Mi</li>
                            <li>Sony</li>
                            <li>Samsung</li>
                            <li>LG</li>
                            <li>Panasonic</li>
                            <li>TCL</li>
                            <li>OnePlus</li>
                        </ul>
                    </div>


                    <div className="col-md-3">
                        <h6 className="text-start">Other Home entertainment</h6>
                        <ul className="list-unstyled text-start">
                            <li>Home theater systems</li>
                            <li>Projectors</li>
                            <li>Set top boxes</li>
                            <li>Streaming devices</li>
                            <li>DVD & Blu-ray players</li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <div className="menu-images">

                            <div className="menu-card">
                                <img src="" />
                                <p>Smart TV store</p>
                                <small>See more</small>
                            </div>

                            <div className="menu-card">
                                <img src="" />
                                <p>TV Buying Guide</p>
                                <small>Learn more</small>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default MegaMenu;