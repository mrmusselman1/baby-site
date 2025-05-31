import FiveTwentyNineCard from 'components/Cards/FiveTwentyNineCard';
import RegistryCard from 'components/Cards/RegistryCard';
import React from 'react';
import { Col, Row } from 'reactstrap';

const RegistryPage: React.FC = () =>
{
    return (
        <Row id="topRow">
            <Col md="12" lg="1" />
            <Col md="6" lg="5">
                <RegistryCard />
            </Col>
            <Col md="6" lg="5">
                <FiveTwentyNineCard />
            </Col>
            <Col md="12" lg="1" />
        </Row>
    )
};

export default RegistryPage;