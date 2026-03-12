import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

interface CardProps {
  header?: string | any;
  children?: React.ReactNode;
  footer?: boolean | React.ReactNode;
  imgSrc?: string;
  title?: string;
  bodyText?: string | object | any;
  titleClass?: string;
  subTitle?: string
  imgClass?: string;
  cardClass?: string;
  bodyClass?: string;
  cardFooter?: string;
  cardHeader?: string;
  useDivHeader?: boolean;
  imgSrcA?: string;
  imgClassA?: string
  imgSrcB?: string;
  imgClassB?: string
  linkTag?: boolean;
  singleImg?: string;
  imgSingleSrc?: string;
  imgSrcC?: string
  imgClassC?: string;
  outBodyText?: string | object | any;
}

const SpkCard: React.FC<CardProps> = ({ header, footer, title, bodyText, outBodyText, imgSrc, titleClass, subTitle, imgClass, cardClass, bodyClass, cardHeader, cardFooter, useDivHeader = false, imgSrcA, imgClassA, imgSrcB, imgSingleSrc, imgClassB, imgSrcC, imgClassC, linkTag = false, singleImg }) => {
  return (
    <Card className={`custom-card ${cardClass}`}>

      {imgSrcA && <img src={imgSrcA} alt="..." className={imgClassA} />}
      {linkTag && <Link to="#!" className="card-anchor"></Link>}
      {singleImg == 'top' && <Link to="#!" className='p-3 pb-0 rounded-5' ><img src={imgSingleSrc} className="rounded-2 card-img-top" alt="..." /></Link>}
      {header && (
        useDivHeader ? (
          <Card.Header className={cardHeader}> {header} </Card.Header>
        ) : (
          <Card.Header className={cardHeader}>
            <h5 className={`card-title ${!imgSrcC ? 'fw-medium' : ''} `}>{header}</h5>
          </Card.Header>
        )
      )}

      {imgSrc && <img src={imgSrc} alt="..." className={imgClass} />}

      <Card.Body className={bodyClass}>
        {title && <h6 className={`card-title ${titleClass}`}>{title}</h6>}
        {subTitle && <p className="card-subtitle mb-3 text-muted ">{subTitle}</p>}
        {bodyText}
      </Card.Body>
      {outBodyText ? outBodyText : null}
      {imgSrcB && <img src={imgSrcB} alt="..." className={imgClassB} />}
      {footer && (
        <Card.Footer className={cardFooter}>
          {typeof footer === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: footer }} />
          ) : (
            footer
          )}
        </Card.Footer>
      )}
      {imgSrcC && <img src={imgSrcC} alt="..." className={imgClassC} />}
      {singleImg == 'bottom' && <Link to="#!" className="p-3 pt-0 rounded-5">
        <img src={imgSingleSrc} className="rounded-2 card-img-bottom" alt="..." />
      </Link>}

    </Card>
  );
};

export default SpkCard;
