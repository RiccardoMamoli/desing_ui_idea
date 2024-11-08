import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


const Homepage = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 400); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            <Container className="flex-grow-1 d-flex flex-column align-items-start justify-content-center homepage-box">
                <Row className= "w-100 py-5">
                    <Col className={`title-homepage ${isVisible ? 'visible' : ''}`}>
                        <p> let's dive into some simple but effective UI designs.</p>
                    </Col>
                </Row>
                <Row className="w-100 py-5">
                    <Col className={`d-flex justify-content-end subtitle-homepage ${isVisible ? 'visible' : ''}`}>
                        <p> hope you will find something useful.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Homepage;
