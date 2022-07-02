import React from 'react';

const LocalHeader = ({title}) => {
    return (
        <>
        <h2 className="local-header">{title}</h2>
            <div className="divider"></div>
        </>
    );
};

export default LocalHeader;