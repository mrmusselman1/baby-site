import Photos from 'Photos';
import React from 'react';
import { Col, Row } from 'reactstrap';

const PhotoCaroselCard: React.FC = () =>
    <Row>
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
    </Row>
;

export default PhotoCaroselCard;