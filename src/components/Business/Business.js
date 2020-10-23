import React from 'react';
import './Business.css'

export const Business = ({business}) => {
    return (
        <div className="Business">
            <div className="image-container">
                <a href={business.url} target="_blank">
                    <img src={business.imageSrc} alt='business'/>
                </a>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                <a style={{ color: 'black', textDecoration: 'none' }}href={'http://maps.google.com/?q='+ business.address}>{business.address}</a>
                <p>{business.city}</p>
                <p>{business.city} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating}</h3>
                <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}