import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import imgStar from "../assets/vertical-assets/start-cut.png"
import back2 from "../assets/vertical-assets/back2.jpg"
import clock from "../assets/vertical-assets/clock-no-bg.png"
import hand from "../assets/vertical-assets/hand.jpg"
import LostWord from "./framer-motion-component/LostWord";
import circle from "../assets/vertical-assets/circle.png"
import circle2 from "../assets/vertical-assets/circle2.png"
import circle3 from "../assets/vertical-assets/circle3.png"
import poster2 from "../assets/vertical-assets/poster2.jpg"
import OneOrZeroWord from "./framer-motion-component/OneOrZeroWord";
import NowhereWord from "./framer-motion-component/NowhereWord";
import BlockInTextCard from "./framer-motion-component/TypeWriter";
import Products from "./framer-motion-component/Products";





const Vertical = () => {

    const DURATION = 0.25
    const STAGGER = 0.025
    const examples = ["are you okay down here?", "are we all alone here?", "are you happy here?", "who are you offline?", "would you be enough?"]



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
                            <h2 style={{ color: "white", opacity: "0.5" }}> landing page.</h2>
                        </div>
                        <div>
                            <h5 className={`instruction-text ${isVisible ? 'visible' : ""}`}> {`[scroll with your mouse]`}</h5>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${back2})`, backgroundRepeat: "repeat", backgroundSize: "cover", position: "relative" }}>
                    <div className="overlay"></div>
                    <div className="d-flex align-items-center justify-content-between w-100">

                        <div className="box-image-star p-2">
                            <img src={imgStar} alt="imgStar" />
                        </div>
                        <div className="box-image-star p-2">
                            <img src={imgStar} alt="imgStar" />
                        </div>
                        <div className="box-image-star p-2">
                            <img src={imgStar} alt="imgStar" />
                        </div>
                        <div className="box-image-star p-2">
                            <img src={imgStar} alt="imgStar" />
                        </div>
                    </div>
                    <div className="px-4 py-5" style={{ borderTop: "1px solid white" }}>
                        <div className="d-flex align-items-center py-4" style={{ color: "black", filter: "brightness(0)" }}>
                            <h2 className="m-0" style={{ fontWeight: "400" }}> everything is temporary. so are you.</h2>
                        </div>
                        <div className="d-flex align-items-center justify-content-between py-5">
                            <div className="clock-box-img autoRotate">
                                <img src={clock} alt="clock" />
                            </div>
                            <div className="hand-box-image">
                                <img src={hand} alt="hand" />
                            </div>
                            <h2 className="m-0" style={{ fontWeight: "400" }}> who are you when you are offline?</h2>
                        </div>
                    </div>
                    <div className="px-4 py-5 d-flex align-items-center">
                        <div className="w-50">
                            <p>
                                what are you looking for here? validation? purpose? every search, every scroll, leaves a digital fingerprint. you move through screens, leaving traces, but find nothing lasting. perhaps it's by design. endless stimulation, no true satisfaction. stop. ask yourself, when did you last feel real? maybe you’re only as real as your last connection.
                            </p>
                        </div>
                        <div className="w-50 d-flex align-items-center justify-content-around ">
                            <div className="box-circle">
                                <img src={circle} alt="circle" />
                            </div>
                            <div className="box-circle">
                                <img src={circle2} alt="circle" />
                            </div>
                            <div className="box-circle">
                                <img src={circle3} alt="circle" />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-5">
                        <div className="d-flex align-items-center justify-content-end" style={{ cursor: "pointer" }}>
                            <LostWord stagger={STAGGER} duration={DURATION} />
                        </div>
                        <div className="d-flex align-items-center justify-content-end" style={{ cursor: "pointer" }}>
                            <Products stagger={STAGGER} duration={DURATION} />
                        </div>
                        <div className="d-flex align-items-center justify-content-end" style={{ cursor: "pointer" }}>
                            <OneOrZeroWord stagger={STAGGER} duration={DURATION} />
                        </div>
                        <div className="d-flex align-items-center justify-content-end" style={{ cursor: "pointer" }}>
                            <NowhereWord stagger={STAGGER} duration={DURATION} />
                        </div>
                    </div>
                    <div className=" px-4 py-5 d-flex align-items-center">
                        <div className="poster-box">
                            <img src={poster2} alt="poster2" />
                        </div>
                        <div className="px-4 d-flex justify-content-between w-100">
                            <div className="px-1">
                                <div>
                                    <BlockInTextCard examples={examples} />
                                </div>
                                <div>
                                    <BlockInTextCard examples={examples} />
                                </div>
                                <div>
                                    <BlockInTextCard examples={examples} />
                                </div>
                            </div>



                            <div className="px-1">
                                <div>
                                    <BlockInTextCard examples={examples} />
                                </div>
                                <div>
                                    <BlockInTextCard examples={examples} />
                                </div>
                                <div>
                                    <BlockInTextCard examples={examples} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Vertical;
