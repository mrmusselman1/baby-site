import React from 'react';
import { Row } from 'reactstrap';
import WeddingCard from 'WeddingCard';

const code = 'Y18-98L';
const url529 = `https://ugift529.com/readysave529/${code}.html`;

const NewFiveTwentyNineCard: React.FC = () =>
    <WeddingCard
        id="529planCode"
        title="Give to our 529 Plan"
        imgSrc="/photos/baby-site/529piggy.png"
        >
        <p className="small">
            If you are interested in making a gift to our Baby's 529 plan,
            navigate to&nbsp;
            <a
                href={url529}
                target="_blank"
            >
                ugift529.com
            </a>
            &nbsp;using our code to give a gift.
        </p>

        <Row className="fiveTwentyNineCode">
            <p className="center"><strong>{ code }</strong></p>
        </Row>

        <p className="small">
            <em>
                Gifts are deposited and invested directly in the Baby's 529 account without any fees.
                <br />
                For more information, view&nbsp;
                <a href="https://www.pa529.com/gift/" target="_blank">PA529's</a>
                &nbsp;information regarding gifts and&nbsp;
                <a href="https://www.ugift529.com/home/faqs.html" target="_blank">Ugift FAQs</a>.
            </em>
        </p>
        </WeddingCard>
;

export default NewFiveTwentyNineCard;