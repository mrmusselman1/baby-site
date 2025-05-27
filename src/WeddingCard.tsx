import React from 'react';
import { Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

interface IWeddingCardCardProps
{
    id?: string,
    imgSrc?: string,
    title: string,
    links?: ILink[],
}

interface ILink
{
    label: string,
    href: string,
    title?: string,
}

const WeddingCard: React.FC<IWeddingCardCardProps> = ({
    id, imgSrc, title, links, children
}) => {
    return (
        <Card id={id}>
            {
                imgSrc &&
                    <Card.Img
                        variant="top"
                        src={imgSrc}
                    />
            }

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{children}</Card.Text>
                {
                    links?.map((link, index) => (
                        <Card.Link href={link.href} key={index} target="_blank" title={link.title}>
                            {link.label}
                        </Card.Link>
                    ))
                }
            </Card.Body>
        </Card>
    )
};

export default WeddingCard;