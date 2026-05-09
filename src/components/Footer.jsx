import Container from "react-bootstrap/Container";
import Logo from '/assets/images/cdnlogo.com_amazon-com.svg';
function Footer() {
    return (
        <footer>


            <div className="footer-top text-center py-2">
                <a className="text-decoration-none" href="#top">Back to top</a>
            </div>


            <div className="footer-main py-4">
                <Container>
                    <div className="row text-white">

                        <div className="col-md-3">
                            <h6>Get to Know Us</h6>
                            <p>About Amazon</p>
                            <p>Careers</p>
                            <p>Press Releases</p>
                            <p>Amazon Science</p>
                        </div>

                        <div className="col-md-3">
                            <h6>Connect with Us</h6>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>

                        <div className="col-md-3">
                            <h6>Make Money with Us</h6>
                            <p>Sell on Amazon</p>
                            <p>Sell under Amazon Accelerator</p>
                            <p>Protect and Build Your Brand</p>
                            <p>Amazon Global Selling</p>
                            <p>Supply to Amazon</p>
                        </div>

                        <div className="col-md-3">
                            <h6>Let Us Help You</h6>
                            <p>Your Account</p>
                            <p>Returns Centre</p>
                            <p>Recalls and Product Safety Alerts</p>
                            <p>100% Purchase Protection</p>
                            <p>Help</p>
                        </div>

                    </div>
                </Container>
            </div>

            <div className="footer-middle text-center py-3">
                <a href="/">

                    <img
                        src={Logo}
                        width="100"
                    />
                </a>
                <div className="mt-3 d-flex justify-content-center gap-3">
                    <button className="footer-btn">🌐 English</button>
                    <button className="footer-btn">🇮🇳 India</button>
                </div>
            </div>


            <div className="footer-bottom py-4">
                <Container>
                    <div className="row text-white small">

                        <div className="col-md-3">
                            <strong>AbeBooks</strong>
                            <p>Books, art & collectibles</p>
                        </div>

                        <div className="col-md-3">
                            <strong>Amazon Web Services</strong>
                            <p>Scalable Cloud Computing Services</p>
                        </div>

                        <div className="col-md-3">
                            <strong>Audible</strong>
                            <p>Download Audio Books</p>
                        </div>

                        <div className="col-md-3">
                            <strong>IMDb</strong>
                            <p>Movies, TV & Celebrities</p>
                        </div>

                    </div>

                    <div className="text-center text-white mt-4 small">
                        Conditions of Use & Sale | Privacy Notice | Interest-Based Ads <br />
                        © 1996-2026, Amazon.com, Inc. or its affiliates
                    </div>
                </Container>
            </div>

        </footer>
    );
}

export default Footer;