import React from 'react';
import NoticeForm from './NoticeForm';
import { useNavigate} from "react-router-dom";
const AddNotice = ({notices, setNotices}) => {
    let navigate = useNavigate();
    const handleOnSubmit = (notice) => {
        setNotices([notice, ...notices]);
        navigate('/');
    };

    return (
        <>
            <NoticeForm handleOnSubmit={handleOnSubmit} />
        </>
    );
};

export default AddNotice;
