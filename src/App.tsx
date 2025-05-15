import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexHeader from 'components/Headers/IndexHeader';
import WeddingCard from 'WeddingCard';
import DefaultFooter from 'components/Footers/DefaultFooter';
import Photos from 'Photos';

function App() {

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
                    <Col md="12" lg="10">
                        <WeddingCard
                            title="Baby Shower"
                            imgSrc="/photos/baby-site/LBI-2024-66-cropped.jpg"
                            //imgSrc="https://www.tasteofhome.com/wp-content/uploads/2019/10/decoration-baby-shower-cute-party-shutterstock_681208396.jpg?w=1200"
                            links={[
                                {
                                    label: "Directions",
                                    href: "https://maps.app.goo.gl/PhpwnXa5LADy5CBWA",
                                    title: "Directions to Daybreak at OBR"
                                },
                                {
                                    label: "Registry",
                                    href: "https://babylist.com/list/rebekah-musselman",
                                    title: "Our BabyList Registry",
                                },
                                {
                                    label: "Cash Fund",
                                    href: "https://paypal.me/rebekahmusselman",
                                    title: "Consider making a contribution to our Cash Fund",
                                }
                            ]}
                        >
                            <p className="small">Join us for a baby shower honoring the parents to be!</p>
                            <hr />
                            <p className="small">
                                Saturday, July 26, 2025 at 1:00pm<br />
                                <em>Please RSVP by June 26 to Olga at 717-419-2294</em>
                            </p>
                            <p className="small">
                                Daybreak Church at Orrs Bridge Road<br />
                                1085 Orrs Bridge Road<br />
                                Mechanicsburg, PA 17050<br />
                            </p>
                            <hr />
                            <p className="small">
                                <em>Note: this is a different location than the one in which we were married.</em>
                            </p>
                            <hr />
                        </WeddingCard>
                    </Col>
                    <Col lg="1" />
                </Row>

                {
                    /*
                     * Book Request; Diaper Raffle
                     */
                }
                <Row>
                    <Col md="12" lg="2" />
                    <Col md="6" lg="4">
                        <WeddingCard title="Book Request">
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
                                '/photos/baby-site/LBI-2024-9.jpg',
                                '/photos/baby-site/simv-cropped.jpeg',
                                '/photos/baby-site/LBI-2024-51-cropped.jpg',
                                '/photos/baby-site/IMG_9551D-cropped.jpeg',
                                // '/photos/baby-site/LBI-2024-66-cropped.jpg',
                                '/photos/baby-site/LBI-2024-37-cropped.jpg',
                                '/photos/baby-site/LBI-2024.jpg',
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
                            </a>.
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
