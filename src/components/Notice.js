import React from 'react';
import {useNavigate} from "react-router-dom";
import './Notice.css';
import Moment from 'moment';

const Notice = ({
                    id,
                    title,
                    author,
                    description,
                    date,
                    handleRemoveBook,
                }) => {
    let navigate = useNavigate();
    const formatDate = Moment(date).format('DD.MM.YYYY')
    return (
        <div className="notice">
            <div>
                <h2 className="notice-title">{title}</h2>
                <div className="divider"></div>
                <div className="notice-details">
                    <div className="notice-author">Autor: {author}</div>
                    <div className="notice-description">Opis: {description} </div>
                </div>
                <div className="divider"></div>
                <div className="card-footer">
                    <div className="card-date">Data utworzenia: {formatDate}</div>
                    <div>
                        <button className="btn-card" onClick={() => navigate(`/profile/${id}`)}>Profil</button>
                        <button className="btn-card" onClick={() => navigate(`/edit/${id}`)}>Edytuj</button>
                        <button className="btn-card" onClick={() => handleRemoveBook(id)}>Usuń</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;