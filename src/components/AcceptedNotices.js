import React from 'react';
import _ from 'lodash';
import Notice from './Notice';
import "./Notices.css"
import LocalHeader from "./LocalHeader";

const AcceptedNotices = ({notices, setNotices}) => {

    const handleRemoveBook = (id) => {
        setNotices(notices.filter((notice) => notice.id !== id));
    };

    return (
        <>
            <LocalHeader title={'Zaakceptowane ogłoszenia'}/>
            <div className="notice-list">
                {!_.isEmpty(notices) ? (
                    notices.map((notice) => (
                        notice.status === 'ACCEPTED' &&
                        <Notice key={notice.id} {...notice} handleRemoveBook={handleRemoveBook}/>
                    ))
                ) : (
                    <p className="message">Brak ogłoszeń</p>
                )}
            </div>
        </>
    );
};

export default AcceptedNotices;