import BabyShowerCard from 'components/Cards/BabyShowerCard';
import BibleVerseCard from 'components/Cards/BibleVerseCard';
import BookRequestCard from 'components/Cards/BookRequestCard';
import DiaperRaffleCard from 'components/Cards/DiaperRaffleCard';
import FiveTwentyNineCard from 'components/Cards/FiveTwentyNineCard';
import PhotoCaroselCard from 'components/Cards/PhotoCaroselCard';
import SpacerCard from 'components/Cards/SpacerCard';
import React from 'react';
import { Col, Row } from 'reactstrap';

const HomePage: React.FC = () =>
{
    return (
        <>
            <Row id="topRow">
                <Col lg="1" />
                <Col md="12" lg="10">
                    <BabyShowerCard />
                </Col>
                <Col lg="1" />
            </Row>

            <Row>
                <Col md="12" lg="2" />
                <Col md="6" lg="4">
                    <BookRequestCard />
                </Col>
                <Col md="6" lg="4">
                    <DiaperRaffleCard />
                </Col>
                <Col md="12" lg="2" />
            </Row>

            <hr />

            <Row>
                <Col md="12" lg="3" />
                <Col md="12" lg="6">
                    <FiveTwentyNineCard />
                </Col>
                <Col md="12" lg="3" />
            </Row>

            <hr />

            <PhotoCaroselCard />

            <SpacerCard />

            {/* <BibleVerseCard /> */}
        </>

    )
};

export default HomePage;