import { Container, Row, Col } from "react-bootstrap";
import error_img from "../assets/error.jpg";
import { MdHomeFilled } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { TbCrosshair } from "react-icons/tb";
import { useEffect, useState } from "react";


const Horizontal = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Container>
                <div className="py-1">
                    <div className="py-3 d-flex align-items-center justify-content-between">
                        <div>
                            <h2 style={{ color: "white", opacity: "0.5" }}> horizontal.</h2>
                        </div>
                        <div>
                            <h5 className={`instruction-text ${isVisible ? 'visible' : ""}`}> {`[hover with your mouse below]`}</h5>
                        </div>
                    </div>
                    <div className="text-light py-3">
                        <h3 className={`description-text ${isVisible ? 'visible' : ''}`}> you can use it on images.</h3>
                    </div>
                    <Container>
                        <Row className="card-list py-2">
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <img src={error_img} alt="Error" />
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <img src={error_img} alt="Error" />
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <img src={error_img} alt="Error" />
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <img src={error_img} alt="Error" />
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <img src={error_img} alt="Error" />
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <img src={error_img} alt="Error" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="py-3">
                    <div className="text-light py-3">
                        <h3 className={`description-text ${isVisible ? 'visible' : ''}`}> and menu items.</h3>
                    </div>
                    <Container>
                        <Row className="card-list py-2">
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <div className="element d-flex align-items-center justify-content-center">
                                    <p className="text-light" style={{ fontSize: "40px" }}> <MdHomeFilled /> </p>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <div className="element d-flex align-items-center justify-content-center">
                                    <p className="text-light" style={{ fontSize: "40px" }}> <CiSettings /> </p>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <div className="element d-flex align-items-center justify-content-center">
                                    <p className="text-light" style={{ fontSize: "40px" }}> <LuLibrary /> </p>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <div className="element d-flex align-items-center justify-content-center">
                                    <p className="text-light" style={{ fontSize: "40px" }}> <MdOutlineEmail /> </p>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <div className="element d-flex align-items-center justify-content-center">
                                    <p className="text-light" style={{ fontSize: "40px" }}> <MdLocationPin /> </p>
                                </div>
                            </Col>
                            <Col sm={6} md={4} lg={2} className="card-box p-0">
                                <div className="element d-flex align-items-center justify-content-center">
                                    <p className="text-light" style={{ fontSize: "40px" }}> <TbCrosshair /> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container >
        </>
    )
}

export default Horizontal;