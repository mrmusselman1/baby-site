import React from 'react';
import WeddingCard from 'WeddingCard';

const BookRequestCard: React.FC = () =>
    <WeddingCard title="Book Request">
        <p className="small">One little request, we hope it's not too hard, please bring a book instead of a card.</p>
        <p className="small">Well loved or new, either will do.</p>
        <p className="small">Please sign your book so we will remember you!</p>
    </WeddingCard>
;

export default BookRequestCard;