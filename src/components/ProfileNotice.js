import React from 'react';
import {useParams} from 'react-router-dom';
import './ProfileNotice.css';
import LocalHeader from "./LocalHeader";

const ProfileNotice = ({notices}) => {
    const {id} = useParams();
    const noticeProfile = notices.find((notice) => notice.id === id);


    return (
        <>
            <LocalHeader title={'Profil ogłoszenia'}/>
            <div className='profile-container'>
                <h2>{noticeProfile.title}</h2>
                <p>Author {noticeProfile.author}</p>
                <p>Opis {noticeProfile.description}</p>
                <p>Status: {noticeProfile.status === 'NORMAL' && 'Podstawowe' || noticeProfile.status === 'SELECTED' && 'Wybrane' || noticeProfile.status === 'ACCEPTED' && 'Zaakceptowane'}</p>
            </div>
        </>
    );
};

export default ProfileNotice;