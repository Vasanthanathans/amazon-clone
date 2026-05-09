import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from '/assets/images/cdnlogo.com_amazon-com.svg';

function Header() {
    const { totalCount } = useCart();
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark" className="py-2">
            <Container fluid className="d-flex align-items-center">

                <a href="/">
                    <img
                        src={Logo}
                        width="100"
                        height="40"
                        alt="amazon"
                        className="me-3"
                    />
                </a>

                <div className="text-white me-3" style={{ fontSize: "12px" }}>
                    <div>Delivering to Chennai 600102</div>
                    <strong>Update location</strong>
                </div>


                <div className="flex-grow-1 me-3">
                    <InputGroup>


                        <NavDropdown
                            title="All"
                            id="search-dropdown"
                            className="bg-light text-dark"
                        >
                            <NavDropdown.Item>All Categories</NavDropdown.Item>
                            <NavDropdown.Item>Electronics</NavDropdown.Item>
                            <NavDropdown.Item>Books</NavDropdown.Item>
                        </NavDropdown>


                        <Form.Control
                            type="search"
                            placeholder="Search Amazon.in"
                            className="border-0"
                        />

                        <InputGroup.Text style={{ background: "#febd69", border: "none" }}>
                            <i className="fa-solid fa-magnifying-glass text-dark"></i>
                        </InputGroup.Text>

                    </InputGroup>
                </div>


                <div className="text-white me-3">EN</div>


                <div className="text-white me-3" style={{ fontSize: "12px" }}>
                    <div>Hello, sign in</div>
                    <strong>Account & Lists</strong>
                </div>


                <div className="text-white me-3" style={{ fontSize: "12px" }}>
                    <div>Returns</div>
                    <strong>& Orders</strong>
                </div>


                <div
                    className="text-white d-flex align-items-center gap-1"
                    style={{ cursor: "pointer", position: "relative" }}
                    onClick={() => navigate('/cart')}
                >
                    <div style={{ position: "relative" }}>
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: 26 }}></i>
                        {totalCount > 0 && (
                            <span style={{
                                position: "absolute",
                                top: -8, right: -8,
                                background: "#f08804",
                                color: "#fff",
                                borderRadius: "50%",
                                width: 20, height: 20,
                                fontSize: 12, fontWeight: 700,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                lineHeight: 1,
                            }}>
                                {totalCount > 99 ? "99+" : totalCount}
                            </span>
                        )}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>Cart</span>
                </div>
            </Container>
        </Navbar>

    );
}

export default Header;