import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function AppOffcanvas({ show, handleClose }) {
    const [menu, setMenu] = useState("main");

    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement="start"
            style={{ width: "320px" }}
        >


            <div
                style={{
                    background: "#232f3e",
                    color: "white",
                    padding: "15px",
                    fontWeight: "bold"
                }}
            >
                <i className="fa-solid fa-user me-2"></i>
                Hello, sign in
            </div>


            <Offcanvas.Body style={{ padding: 0 }}>


                {menu === "main" && (
                    <>
                        <div
                            className="p-3 border-bottom fw-semibold"
                            onClick={() => setMenu("alexa")}
                        >
                            Echo & Alexa
                        </div>

                        <div
                            className="p-3 border-bottom fw-semibold"
                            onClick={() => setMenu("content")}
                        >
                            Content & Resources
                        </div>
                    </>
                )}


                {menu !== "main" && (
                    <>

                        <div
                            className="p-3 border-bottom fw-bold"
                            onClick={() => setMenu("main")}
                            style={{ cursor: "pointer" }}
                        >
                            ← MAIN MENU
                        </div>


                        {menu === "alexa" && (
                            <div className="p-3">
                                <h6>Echo & Alexa</h6>
                                <p className="text-muted">See all devices with Alexa</p>
                            </div>
                        )}

                        {menu === "content" && (
                            <div className="p-3">
                                <h6>Content & Resources</h6>

                                <div className="mt-2">Meet Alexa</div>
                                <div className="mt-2">Alexa Skills</div>
                                <div className="mt-2">Alexa App</div>
                                <div className="mt-2">Alexa Smart Home</div>
                                <div className="mt-2">Amazon Prime Music</div>
                            </div>
                        )}
                    </>
                )}

            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default AppOffcanvas;