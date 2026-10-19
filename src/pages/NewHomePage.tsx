import FiveTwentyNineCard from 'components/Cards/FiveTwentyNineCard';
import GiftListCard from 'components/Cards/GiftListCard';
import NewFiveTwentyNineCard from 'components/Cards/NewFiveTwentyNineCard';
import RegistryCard from 'components/Cards/RegistryCard';
import React from 'react';
import { Col, Row } from 'reactstrap';

const NewHomePage: React.FC = () =>
{
    return (
        <Row id="topRow">
            <Col md="12" lg="1" />
            <Col md="6" lg="5">
                <NewFiveTwentyNineCard />
            </Col>
            <Col md="12" lg="1" />
            <Col md="6" lg="5">
                <GiftListCard />
            </Col>
        </Row>
    )
};

export default NewHomePage;