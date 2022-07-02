import React from 'react';
import { useParams } from 'react-router-dom';
import NoticeForm from "./NoticeForm";
import { useNavigate} from "react-router-dom";

const EditNotice = ({notices, setNotices }) => {
    let navigate = useNavigate();
    const { id } = useParams();
    const noticeToEdit = notices.find((notice) => notice.id === id);

    const handleOnSubmit = (notice) => {
        const filteredNotices = notices.filter((notice) => notice.id !== id);
        setNotices([notice, ...filteredNotices]);
        navigate('/');
    };

    return (
        <div>
            <NoticeForm notice={noticeToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditNotice;