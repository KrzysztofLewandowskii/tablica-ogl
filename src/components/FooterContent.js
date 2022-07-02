import React from 'react';

const FooterContent = ({name, index}) => {
    return (
        <i className="footer-text">
            <span>{name} <b>{index}</b></span>
        </i>
    );
};

export default FooterContent;