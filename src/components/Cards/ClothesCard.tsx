import React from 'react';
import WeddingCard from 'WeddingCard';

const amazonUrl = 'https://www.amazon.com/registries/gl/guest-view/1APPR19IY3G1Z?ref_=cm_sw_r_cp_ud_ggr-subnav-share_NGF4FKNXVEJPVMH24WQZ';

const ClothesCard: React.FC = () =>
    <WeddingCard
        title="Clothes"
        imgSrc="/photos/baby-site/clothes-cropped.jpg"
        links={[
            {
                label: "Burts Bees Baby",
                href: "https://burtsbeesbaby.com/",
                title: "Not just chap stick",
            },
            {
                label: "Old Navy",
                href: "https://oldnavy.gap.com/browse/baby/shop-all-baby?cid=3045016",
                title: "In the Navy...",
            },
        ]}
    >
        <p className="small">
            Babies grow suprisingly quickly and we're always looking for more clothes. 
            Here are are a few of our favorite brands. Their sizing is predictable and they are of good quality.
            <br />
            Check with mom for current sizes.
        </p>
    </WeddingCard>
;

export default ClothesCard;