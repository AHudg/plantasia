import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import UserInfo from '../components/UserInfo/'
import { useQuery } from '@apollo/client';
import { QUERY_CLIENTME, QUERY_VENDORME , UPDATE_VENDOR, UPDATE_CLIENT} from '../utils/queries';

const Settings = () => {
  const [edit, setEdit] = useState(false);

  const { data, loading } = useQuery(Auth.getProfile().data.type === 'Client' ? QUERY_CLIENTME : QUERY_VENDORME);

  if (loading) {
    return <div>Loading...</div>
  }

  const userData = data?.clientMe || data?.vendorMe || {};

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  const handleEdit = () => {
    if (!edit) {
      return (
        <div>
          <button onClick={() => { setEdit(true) }} > EDIT PROFILE </button>
          <UserInfo userData={userData}></UserInfo>
        </div>
      )
    } else {
      return (
        <section className="row justify-content-center text-center mx-0">
        <img
          src="./images/blueProfile.png"
          alt="Company logo placeholder."
          className="col-10 userImage"
        ></img>
          <div className="col-10 my-3 row">
            <label className="col-12 col-sm-3 text-sm-end"
            >
              Username:
            </label>
            <input className="col-12 username" type="text" name="username" id="username">
            </input>
            <label className="col-12 description" >
              Description:
            </label>
            <input className="col-12 description" type="text" name="description" id="description">
            </input>
            <label className="col-12 my-1 userContact" >
              Phone:
            </label>
            <input className="col-12 my-1 userContact" type="text" name="phone" id="phone">
            </input>
            <label className="col-12 my-0 userContact" >
              Email:
            </label>
            <input className="col-12 my-0 userContact" type="text" name="email" id="email">
            </input>
            <button type='submit'> SAVE </button>
        </div>
      </section>
    )};
  };
  
  return (
    <main>
      <div>
        {Auth.loggedIn() ? (
          <>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/"></Link>
          </>
        )}
      </div>
      {handleEdit()}
    </main>
  );
};

export default Settings;
