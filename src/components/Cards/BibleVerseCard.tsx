import React from 'react';
import { Row } from 'reactstrap';

const BibleVerseCard: React.FC = () =>
    <Row>
        <blockquote className="blockquote text-center">
            <p className="mb-0">
                Two people are better off than one, for they can help each other succeed.
                If one person falls, the other can reach out and help.
            </p>
            <footer className="blockquote-footer">
                <cite title="Source Title">Ecclesiastes 4:9-10 (NLT)</cite>
            </footer>
        </blockquote>
    </Row>
;

export default BibleVerseCard;