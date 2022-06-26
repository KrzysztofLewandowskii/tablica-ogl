import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const NoticeForm = (props) => {
        const [notice, setNotice] = useState({
            title: props.notice ? props.notice.title : '',
            author: props.notice ? props.notice.author : '',
            description: props.notice ? props.notice.description : '',
            date: props.notice ? props.notice.date : ''
        });

        const [errorMsg, setErrorMsg] = useState('');
        const {title, author, description} = notice;

        const handleOnSubmit = (event) => {
            event.preventDefault();
            const values = [title, author, description];
            let errorMsg = '';

            const allFieldsFilled = values.every((field) => {
                const value = `${field}`.trim();
                return value !== '' && value !== '0';
            });

            if (allFieldsFilled) {
                const notice = {
                    id: uuidv4(),
                    title,
                    author,
                    description,
                    date: new Date()
                };
                props.handleOnSubmit(notice);
            } else {
                errorMsg = 'Proszę uzupełnij wszystkie dane.';
            }
            setErrorMsg(errorMsg);
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
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label>Tytuł</label>
                        <input
                            className="input-control"
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Wprowadź tytuł"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Autor</label>
                        <input
                            className="input-control"
                            type="text"
                            name="author"
                            value={author}
                            placeholder="Wprowadź autora"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Opis</label>
                        <input
                            className="input-control"
                            type="text"
                            name="description"
                            value={description}
                            placeholder="Wprowadź opis"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button  type="submit" className="submit-btn">
                        Dodaj
                    </button>
                </form>
            </div>
        );
    }
;

export default NoticeForm;