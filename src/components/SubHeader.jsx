import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AmazonOffcanvas from './AppOffcanvas';

function SubHeader() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div style={{ background: "#232f3e" }}>
                <Container fluid className="text-white py-2 d-flex align-items-center gap-2" style={{ fontSize: "12px" }}>

                    <div
                        onClick={() => setShow(true)}
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                    >
                        <i className="fa-solid fa-bars me-2"></i> All
                    </div>
                    <div className=" ms-2 d-flex  gap-3" style={{ fontSize: "12px" }}>
                        <span>Fresh</span>
                        <span>MX Player</span>
                        <span>Sell</span>
                        <span>Bestsellers</span>
                        <span>Mobiles</span>
                        <span>Today's Deals</span>
                        <span>Customer Service</span>
                        <span>New Releases</span>
                        <span>Prime</span>
                        <span>Amazon Pay</span>
                        <span>Electronics</span>
                        <span>Fashion</span>
                        <span>Home & Kitchen</span>
                        <span>Computers</span>
                    </div>
                </Container>
            </div>

            <AmazonOffcanvas
                show={show}
                handleClose={() => setShow(false)}
            />
        </>
    );
}

export default SubHeader;