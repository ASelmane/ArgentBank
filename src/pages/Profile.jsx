import React from 'react';
import { getProfile } from '../services/apiCall';
import Accounts from '../components/Account';
import Welcome from '../components/Welcome';
import { account } from "../_mocks_/account";
import { useDispatch, useSelector } from 'react-redux';
import "../styles/css/profile.css";
import { getInfoProfile } from '../services/redux/profileSlice';
import { useNavigate } from 'react-router-dom';
import { getLoggedOut } from '../services/redux/loginSlice';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);

    React.useEffect(() => {
        const getProfileInfo = async () => {
            const data = await getProfile(token);
            if (data !== "error") {
                dispatch(getInfoProfile(data));
            }
            else {
                dispatch(getLoggedOut());
                navigate("/login");
            }
        };
        getProfileInfo();
    }, [dispatch, navigate, token]);

    return (
        <main className="main bg-dark">
            <Welcome />
            <h2 className="sr-only">Accounts</h2>
            {account.map((acct) => (
                <Accounts key={acct.id} account={acct} />
            ))}
        </main>
    );
}

export default Profile;