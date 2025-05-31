import React from 'react';
import WeddingCard from 'WeddingCard';

const RegistryCard: React.FC = () =>
    <WeddingCard
        title="Our Registry"
        imgSrc="/photos/baby-site/toys.png"
        // links={[
        //     {
        //         label: "View Our Registry",
        //         href: "https://babylist.com/list/rebekah-musselman",
        //         title: "Our BabyList Registry",
        //     },
        // ]}
    >
        <p className="small">
            We've created a registy at&nbsp;
            <a href="https://www.babylist.com/list/rebekah-musselman" target="_blank">BabyList</a>.
            If you are interested in helping us out with some of our baby needs,
            feel free to take a look. We appreciate any gift!
        </p>
    </WeddingCard>
;

export default RegistryCard;