import React from 'react';
import _ from 'lodash';
import Notice from './Notice';
import "./Notices.css";
import LocalHeader from "./LocalHeader";


const Notices = ({notices, setNotices}) => {

    const handleRemoveBook = (id) => {
        setNotices(notices.filter((notice) => notice.id !== id));
    };

    return (
        <>
            <LocalHeader title={'Ogłoszenia'}/>
            <div className="notice-list">
                {!_.isEmpty(notices) ? (
                    notices.map((notice) => (
                        notice.status === 'NORMAL' &&
                        <Notice key={notice.id} {...notice} handleRemoveBook={handleRemoveBook}/>
                    ))
                ) : (
                    <p className="message">Brak ogłoszeń</p>
                )}
            </div>
        </>
    );
};

export default Notices;