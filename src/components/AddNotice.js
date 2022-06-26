import React from 'react';
import NoticeForm from './NoticeForm';

const AddNotice = () => {
    const handleOnSubmit = (notice) => {
        console.log(notice);
    };

    return (
        <>
            <NoticeForm handleOnSubmit={handleOnSubmit} />
        </>
    );
};

export default AddNotice;
