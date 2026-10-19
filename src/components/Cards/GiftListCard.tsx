import React from 'react';
import WeddingCard from 'WeddingCard';

const link = 'https://www.amazon.com/registries/gl/guest-view/1APPR19IY3G1Z?ref_=cm_sw_r_cp_ud_ggr-subnav-share_NGF4FKNXVEJPVMH24WQZ';

const GiftListCard: React.FC = () =>
    <WeddingCard
        title="Gift List"
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
            We've created a gift list on&nbsp;
            <a href="{link}" target="_blank">Amazon</a> including ideas for both
            gifts and items that would be helpful. 
        </p>
    </WeddingCard>
;

export default GiftListCard;