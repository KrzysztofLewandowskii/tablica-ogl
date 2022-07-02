import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddNotice from "../components/AddNotice";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import Notices from "../components/Notices";
import EditNotice from "../components/EditNotice";
import ProfileNotice from "../components/ProfileNotice";
import Footer from "../components/Footer";
import SelectedNotices from "../components/SelectedNotices";
import AcceptedNotices from "../components/AcceptedNotices";

const AppRouter = () => {
    const [notices, setNotices] = useLocalStorage('notices', [{
        "id": "6e80ac64-3a11-4281-99ec-afc92e08fff9",
        "date": "2022-06-30T17:02:24.649Z",
        "title": "pierwsz ogłoszenie",
        "author": "Michał Nowak",
        "description": "Dzień dobry jest to pierwsze ogłoszenie",
        "status": "NORMAL"
    },
        {
            "id": "e22256cb-99ee-4550-a690-1ecadb0a71b3",
            "date": "2022-06-30T17:02:24.649Z",
            "title": "Drugie ogłoszenie",
            "author": "Adam Piechur",
            "description": "Dzień dobry jest to drugie ogłoszenie",
            "status": "SELECTED"
        },
        {
            "id": "309415b4-46df-4971-849c-9ac09f348e80",
            "date": "2022-06-30T17:02:24.649Z",
            "title": "Trzecie ogłoszenie",
            "author": "Michał Nowak",
            "description": "Dzień dobry jest to trzecie ogłoszenie",
            "status": "ACCEPTED"
        }]);

    return (
        <BrowserRouter>
            <div>
                <PageHeader/>
                <Routes>
                    <Route path="/" element={<Notices notices={notices} setNotices={setNotices}/>}/>
                    <Route path="/selectedNotices"
                           element={<SelectedNotices notices={notices} setNotices={setNotices}/>}/>
                    <Route path="/acceptedNotices"
                           element={<AcceptedNotices notices={notices} setNotices={setNotices}/>}/>
                    <Route path="/edit/:id" element={<EditNotice notices={notices} setNotices={setNotices}/>}/>
                    <Route path="/addNotice" element={<AddNotice notices={notices} setNotices={setNotices}/>}/>
                    <Route path="/profile/:id" element={<ProfileNotice notices={notices} setNotices={setNotices}/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;