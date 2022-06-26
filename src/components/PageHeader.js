import React from 'react';
import LogoPageHeader from "./LogoPageHeader";
import Navigation from "./Navigation";
import './PageHeader.css';

const PageHeader = () => {
    return (
        <div className="PageHeaderContainer">
            <LogoPageHeader projectTitle={'Tablica ogłoszeń'}/>
            <Navigation/>
        </div>
    );
};

export default PageHeader;