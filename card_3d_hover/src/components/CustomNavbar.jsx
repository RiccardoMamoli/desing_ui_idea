import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const CustomNavbar = ({ showCat, setShowCat }) => {
    const handleClick = () => {
        setShowCat(!showCat);
    };

    return (
        <Container className="text-light py-4">
            <Row >
                <Col lg={3} className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <Link to="/" className="text-decoration-none text-light">
                            <p className="me-2">menu</p>
                        </Link>
                        <p onClick={handleClick}>
                            <IoIosArrowDown className={`icon-menu ${showCat ? 'rotate' : ''}`} />
                        </p>
                    </div>
                </Col>
                {showCat ? (
                    <>
                        <Col lg={3} className={`category ${showCat ? 'slide-in' : 'slide-out'}  d-flex align-items-center justify-content-center`}>
                            <Link to="/horizontal" className="text-decoration-none text-light">
                                <p>horizontal animation.</p>
                            </Link>
                        </Col>
                        <Col lg={3} className={`category ${showCat ? 'slide-in' : 'slide-out'}  d-flex align-items-center justify-content-center`}>
                            <Link to="/vertical" className="text-decoration-none text-light">
                                <p>landing page.</p>
                            </Link>
                        </Col>
                        <Col lg={3} className={`category ${showCat ? 'slide-in' : 'slide-out'}  d-flex align-items-center justify-content-center`}>
                            <Link to="/card" className="text-decoration-none text-light">
                                <p>cards ideas.</p>
                            </Link>
                        </Col>
                        

                    </>
                ) : (
                    <Col lg={9}>

                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default CustomNavbar;
