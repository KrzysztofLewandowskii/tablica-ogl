import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './NoticeForm.css';

const NoticeForm = (props) => {
        const [notice, setNotice] = useState({
            title: props.notice ? props.notice.title : '',
            author: props.notice ? props.notice.author : '',
            description: props.notice ? props.notice.description : '',
            date: props.notice ? props.notice.date : '',
            status: props.status ? props.notice.status : ''
        });

        const {title, author, description, status} = notice;

        const handleOnSubmit = (event) => {
            event.preventDefault();

            const notice = {
                id: uuidv4(),
                title,
                author,
                description,
                date: new Date(),
                status
            };

            props.handleOnSubmit(notice);
        };


        const handleInputChange = (event) => {
            const {name, value} = event.target;
            setNotice((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }


        return (
            <div className="main-form">
                <form className="form" onSubmit={handleOnSubmit}>
                    <div>
                        <label className="input-label">Tytuł</label>
                        <input
                            className="input-control"
                            type="text"
                            name="title"
                            required
                            value={title}
                            placeholder="Wprowadź tytuł"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Autor</label>
                        <input
                            className="input-control"
                            type="text"
                            name="author"
                            required
                            value={author}
                            placeholder="Wprowadź autora"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Opis</label>
                        <textarea
                            className="input-control"
                            rows="4"
                            name="description"
                            required
                            value={description}
                            placeholder="Wprowadź opis"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="input-label">Status</label>
                        <select
                            className="input-control"
                            name="status"
                            required
                            value={status}
                            onChange={handleInputChange}

                        >
                            <option value="" disabled={true}>Wybierz status</option>
                            <option value="NORMAL">Podstawowy</option>
                            <option value="SELECTED">Wybrane</option>
                            <option value="ACCEPTED">Zaakceptowane</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">
                        Dodaj
                    </button>
                </form>
            </div>
        );
    }
;

export default NoticeForm;