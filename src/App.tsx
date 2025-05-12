import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexHeader from 'components/Headers/IndexHeader';
import WeddingCard from 'WeddingCard';
import DefaultFooter from 'components/Footers/DefaultFooter';
import Photos from 'Photos';
import Countdown from 'Countdown';

/*
 * @todo TODO:
 * - for our friends far away, we plan to come visit you soon
 *
 */

function App() {

    // const liveStreamUrl = "https://www.youtube.com/channel/UC5dwWwlFlFmMf-hPOXdnpyg";

    // const [showAlert, setShowAlert] = useState(true);

    const date = 'May 21, 2022';
    const time = '1:00 PM';
    const timezone = 'GMT-0400'; // Eastern Daylight Time

    return (
        <div className="wrapper">
                {
                    /*
                     * Main Image Header, Countdown
                     */
                }
            <IndexHeader />
            <Container>

                <Row id="topRow">
                    <Col lg="1" />

                    {/* <Col md="12" lg="3">
                        <WeddingCard
                            title="Something Else"
                            imgSrc="https://i.ytimg.com/vi/bCxPjkji_Jc/maxresdefault.jpg"
                            // links={[
                            //     {
                            //         label: "Get Directions",
                            //         href: "https://goo.gl/maps/poVcKKdE8vAjSWe89"
                            //     }
                            // ]}
                        >
                            I hope the baby loves the beach!
                        </WeddingCard>
                    </Col> */}

                    <Col md="12" lg="10">
                        <WeddingCard
                            title="Baby Shower"
                            imgSrc="https://www.tasteofhome.com/wp-content/uploads/2019/10/decoration-baby-shower-cute-party-shutterstock_681208396.jpg?w=1200"
                            links={[
                                {
                                    label: "Directions",
                                    href: "https://maps.app.goo.gl/PhpwnXa5LADy5CBWA",
                                },
                                                                {
                                    label: "Registry",
                                    href: "https://babylist.com/list/rebekah-musselman",
                                },
                            ]}
                        >
                            <p className="small">Join us for a baby shower honoring the parents to be!</p>
                            <p className="small">Saturday, July 26, 2025 1:00pm</p>
                            <p className="small">
                                Daybreak Church at Orrs Bridge Road<br />
                                1085 Orrs Bridge Road <br />
                                Mechanicsburg, PA 17050<br />
                            </p>
                            <p className="small">
                                <em>Note: this is a different campus from the one in which we were married.</em>
                            </p>
                        </WeddingCard>
                    </Col>

                    <Col lg="1" />

                    {/* <Col md="12" lg="3">
                        <WeddingCard
                            title="Baby Registry"
                            imgSrc="https://i.pinimg.com/736x/67/2c/26/672c26ea0d2f8b698371250258a05638.jpg"
                            links={[
                                {
                                    label: "Get Directions",
                                    href: "https://goo.gl/maps/poVcKKdE8vAjSWe89"
                                }
                            ]}
                        >
                            The baby wants a new laptop. 
                        </WeddingCard>
                    </Col> */}

                </Row>

                {
                    /*
                     * Book Request; Diaper Raffle
                     */
                }
                <Row>
                    <Col md="12" lg="2" />
                    <Col md="6" lg="4">
                        <WeddingCard
                            title="Book Request"
                        >
                            <p className="small">One little request, we hope it's not too hard, please bring a book instead of a card.</p>
                            <p className="small">Well loved or new, either will do.</p>
                            <p className="small">Please sign your book so we will remember you!</p> 
                        </WeddingCard>
                    </Col>
                    <Col md="6" lg="4">
                        <WeddingCard title="Diaper Raffle">
                            <p className="small">Please bring a pack of diapers in any size for your chance to win a prize!</p>
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="2" />
                </Row>

                {
                    /*
                     * Photos
                     */
                }
                <Row>
                    <Col md={0} lg={1} />
                    <Col md={12} lg={10}>
                        <Photos
                            photos={[
                                '/photos/MR-14.jpeg',
                                '/photos/MR-6.jpeg',
                                '/photos/MR-18.jpeg',
                                '/photos/MR.jpeg',
                            ]}
                        />
                    </Col>
                    <Col md={0} lg={1} />
                </Row>

                {
                    /*
                     * Attribution
                     */
                }
                <Row>
                    <Col className="text-center">
                        <p className="small">
                            Photography by&nbsp;
                            <a href="https://www.HLC.art" target="_blank">
                            HLC Art
                            </a>
                        </p>
                    </Col>
                </Row>

                {
                    /*
                     * Spacer
                     */
                }
                <Row>
                    <Col>
                        &nbsp;
                    </Col>
                </Row>

                {
                    /*
                     * Bible Verse
                     */
                }
                {/* <Row>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">
                            Two people are better off than one, for they can help each other succeed.
                            If one person falls, the other can reach out and help.
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Ecclesiastes 4:9-10 (NLT)</cite>
                        </footer>
                    </blockquote>
                </Row> */}

            </Container>
            <DefaultFooter />
        </div>
    );
}

export default App;
