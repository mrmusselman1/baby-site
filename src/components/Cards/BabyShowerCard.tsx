import React from 'react';
import WeddingCard from 'WeddingCard';

const BabyShowerCard: React.FC = () =>
    <WeddingCard
        title="Baby Shower"
        imgSrc="/photos/baby-site/LBI-2024-66-cropped-2.jpg"
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
                label: "Give to 529",
                href: "#529planCode",
                title: "Consider making a gift to our Baby's 529 plan",
                samePage: true,
            },
            {
                label: "Cash Fund",
                href: "https://www.paypal.com/paypalme/rebekahmusselman",
                title: "Consider making a contribution to our Cash Fund",
            },
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
;

export default BabyShowerCard;
