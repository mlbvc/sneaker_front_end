import React from 'react';
import { getToken } from '../../utils/auth';
import './profile.css'

const Profile = () => {
  const username = getToken();
  return (
    <div>
      <div className="member_intro">
        <div className="member_avatar">

        </div>
        <div className="member_name">
          {username}
        </div>
      </div>
      <div className="vip">
        <div><h2>会员福利</h2></div>
      </div>
    </div>
  )
}

export default Profile;