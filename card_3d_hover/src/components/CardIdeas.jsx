import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import doubleFace from "../assets/double face.jpg";
import errorImg from "../assets/error.jpg";
import oneOrZero from "../assets/one or zero.jpg";
import helloFriend from "../assets/hello friend.jpg"
import { motion } from "framer-motion";

const CardIdeas = () => {

    const products = [

        {
            name: "happines",
            cost: "priceless.",
            img: doubleFace,
            desc: "a fleeting moment you convince yourself is permanent—right before life hands you another bill."
        },
        {
            name: "time",
            cost: "can't buy time.",
            img: errorImg,
            desc: "a relentless countdown where you’re either too early, too late, or wondering where it all went."
        },
        {
            name: "love",
            cost: "guess what?",
            img: oneOrZero,
            desc: "that thing you chase, idolize, and eventually watch crumble over who left the dishes in the sink."
        },
        {
            name: "youth",
            cost: "nope.",
            img: helloFriend,
            desc: "the phase where you feel invincible but are mostly clueless, yet somehow think you’ll never get old."
        }
    ]

    // const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped, setIsFlipped] = useState(Array(products.length).fill(false));

    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [addToCart, setAddToCart] = useState(Array(products.length).fill(false));

    // const handleFlip = () => {
    //     if (!isAnimating) {
    //         setIsFlipped(!isFlipped)
    //         setIsAnimating(true);
    //     }
    // }

    const handleFlip = (index) => {
        const newFlippedCards = [...isFlipped];
        newFlippedCards[index] = !newFlippedCards[index];
        setIsFlipped(newFlippedCards);
    };

    const handleAddToCart = (index) => {
        const newAddToCart = [...addToCart];
        newAddToCart[index] = !newAddToCart[index];
        setAddToCart(newAddToCart);
    }

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
                            <h2 style={{ color: "white", opacity: "0.5" }}> cards.</h2>
                        </div>
                        <div>
                            <h5 className={`instruction-text ${isVisible ? 'visible' : ""}`}> {`[feel free to use them]`}</h5>
                        </div>
                    </div>
                    <div className="text-light py-3">
                        <h3 className={`description-text ${isVisible ? 'visible' : ''}`}> clean and simple. for all your products. </h3>
                    </div>
                </div>
                <Row className={`${isVisible ? 'visible' : ""}`}>

                    {
                        products.map((prod, index) => (
                            <Col sm={12} md={4} lg={3} key={index} className="py-sm-3 px-sm-5 py-lg-0 px-lg-3">
                                <div className="custom-card">
                                    <div className="custom-card-img h-75 d-flex align-items-center justify-content-center">
                                        <p style={{ fontSize: "20px" }}> {prod.name}.</p>
                                    </div>
                                    <div className="custom-card-body h-25 d-flex">
                                        <div className="w-75 text-card d-flex align-items-center justify-content-center">
                                            <p style={{ fontSize: "13px" }}> price: {prod.cost} </p>
                                        </div>
                                        <div className=" w-25 ps-1 pt-1">
                                            <div className="icon-cart-box">
                                                {
                                                    addToCart[index] ?

                                                        (
                                                            <FaCheck className="icon-added" />
                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <IoCartOutline className="icon-cart" />
                                                                <IoIosAdd className="icon-add" onClick={() => handleAddToCart(index)} />
                                                            </>
                                                        )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                <div className="text-light py-5">
                    <h3 className={`description-text ${isVisible ? 'visible' : ''}`}> a little animation. </h3>
                </div>
                <Row className="card-list-2">
                    {
                        products.map((prod, index) => (
                            <Col sm={12} md={6} lg={3} className="px-sm-5 py-sm-3 py-lg-0 px-lg-3">
                                <div className="custom-card-2" onClick={() => handleFlip(index)}>
                                    <motion.div
                                        className="flip-card-inner w-100 h-100"
                                        initial={false}
                                        animate={{ rotateY: isFlipped[index] ? 180 : 360 }}
                                        transition={{ duration: 0.6, animationDirection: "normal" }}
                                        onAnimationComplete={() => setIsAnimating(false)}
                                    >
                                        <div className="flip-card-front w-100 h-100 text-light">
                                            <div className="box-card-img" style={{ position: "absolute" }}>
                                                <img src={prod.img} alt={prod.name} />
                                            </div>
                                            <div className="instruction-text-flip w-100 d-flex align-items-center justify-content-center">
                                                <p>click to see details.</p>
                                            </div>
                                        </div>

                                        <div className="flip-card-back w-100 h-100 text-light" style={{ position: "relative" }}>
                                            <div className="p-3">
                                                <div className="py-4">
                                                    <p> {prod.name}.</p>
                                                </div>
                                                <div style={{ opacity: "0.6" }}>
                                                    <p> {prod.desc}</p>
                                                </div>
                                                <div className="py-4">
                                                    price: {prod.cost}
                                                </div>
                                            </div>
                                        </div>

                                    </motion.div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>

            </Container >
        </>
    )
}

export default CardIdeas;